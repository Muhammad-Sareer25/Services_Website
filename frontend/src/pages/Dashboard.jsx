import React, { useEffect, useState } from 'react';
import { Mail, ClipboardList, User as UserIcon, Plus } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import StatusBadge from '../components/StatusBadge';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import SuccessMessage from '../components/SuccessMessage';
import Modal from '../components/Modal';
import { useAuth } from '../hooks/useAuth';
import { fetchEnquiries, fetchRequests, createServiceRequest } from '../services/dataService';
import { getErrorMessage } from '../services/api';

const TABS = [
  { id: 'overview', label: 'Overview', icon: UserIcon },
  { id: 'enquiries', label: 'My Enquiries', icon: Mail },
  { id: 'requests', label: 'Service Requests', icon: ClipboardList },
];

const SERVICE_OPTIONS = [
  'Hardware Break Fix', 'Server Maintenance', 'Network Maintenance', 'Data Center Services', 'Asset Management',
  'Site Surveys', 'ITAD', 'Wi-Fi Surveys', 'IMAC & Projects', 'Rollout & Migration',
];

const DashboardPage = () => {
  const { user, updateProfile } = useAuth();
  const [tab, setTab] = useState('overview');

  const [enquiries, setEnquiries] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [profileForm, setProfileForm] = useState({ name: user?.name || '', company: user?.company || '', phone: user?.phone || '' });
  const [profileSaving, setProfileSaving] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState('');
  const [profileError, setProfileError] = useState('');

  const [modalOpen, setModalOpen] = useState(false);
  const [newRequest, setNewRequest] = useState({ service: SERVICE_OPTIONS[0], description: '' });
  const [requestSubmitting, setRequestSubmitting] = useState(false);
  const [requestError, setRequestError] = useState('');

  const loadData = async () => {
    setLoading(true);
    setError('');
    try {
      const [enquiryRes, requestRes] = await Promise.all([fetchEnquiries(), fetchRequests()]);
      setEnquiries(enquiryRes.enquiries);
      setRequests(requestRes.requests);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleProfileSave = async (e) => {
    e.preventDefault();
    setProfileError('');
    setProfileSuccess('');
    setProfileSaving(true);
    try {
      await updateProfile(profileForm);
      setProfileSuccess('Profile updated successfully.');
    } catch (err) {
      setProfileError(getErrorMessage(err));
    } finally {
      setProfileSaving(false);
    }
  };

  const handleCreateRequest = async (e) => {
    e.preventDefault();
    setRequestError('');
    if (!newRequest.description.trim()) {
      setRequestError('Please describe what you need help with.');
      return;
    }
    setRequestSubmitting(true);
    try {
      await createServiceRequest(newRequest);
      setModalOpen(false);
      setNewRequest({ service: SERVICE_OPTIONS[0], description: '' });
      loadData();
    } catch (err) {
      setRequestError(getErrorMessage(err));
    } finally {
      setRequestSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <section className="bg-navy-900 py-12">
        <div className="container-page">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Welcome back, {user?.name?.split(' ')[0]}</h1>
          <p className="text-navy-300 mt-1">Manage your profile, enquiries and service requests.</p>
        </div>
      </section>

      <section className="section !py-10">
        <div className="container-page">
          <div className="flex gap-2 border-b border-navy-100 mb-8 overflow-x-auto">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
                  tab === id ? 'border-accent-600 text-accent-700' : 'border-transparent text-navy-500 hover:text-navy-800'
                }`}
              >
                <Icon className="h-4 w-4" /> {label}
              </button>
            ))}
          </div>

          {loading && <LoadingSpinner label="Loading your data…" />}
          {error && <ErrorMessage message={error} onRetry={loadData} />}

          {!loading && !error && tab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="font-bold text-navy-900 mb-4">Your Profile</h3>
                {profileSuccess && <div className="mb-4"><SuccessMessage message={profileSuccess} /></div>}
                {profileError && <div className="mb-4"><ErrorMessage message={profileError} /></div>}
                <form onSubmit={handleProfileSave} className="flex flex-col gap-4">
                  <div>
                    <label className="label">Name</label>
                    <input className="input" value={profileForm.name} onChange={(e) => setProfileForm((p) => ({ ...p, name: e.target.value }))} />
                  </div>
                  <div>
                    <label className="label">Email</label>
                    <input className="input bg-navy-50" value={user?.email} disabled />
                  </div>
                  <div>
                    <label className="label">Company</label>
                    <input className="input" value={profileForm.company} onChange={(e) => setProfileForm((p) => ({ ...p, company: e.target.value }))} />
                  </div>
                  <div>
                    <label className="label">Phone</label>
                    <input className="input" value={profileForm.phone} onChange={(e) => setProfileForm((p) => ({ ...p, phone: e.target.value }))} />
                  </div>
                  <button type="submit" disabled={profileSaving} className="btn-primary self-start">
                    {profileSaving ? 'Saving…' : 'Update Profile'}
                  </button>
                </form>
              </div>

              <div className="flex flex-col gap-6">
                <div className="card p-6 flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-extrabold text-navy-900">{enquiries.length}</p>
                    <p className="text-sm text-navy-500 mt-1">Enquiries submitted</p>
                  </div>
                  <Mail className="h-8 w-8 text-accent-600" />
                </div>
                <div className="card p-6 flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-extrabold text-navy-900">{requests.length}</p>
                    <p className="text-sm text-navy-500 mt-1">Service requests</p>
                  </div>
                  <ClipboardList className="h-8 w-8 text-accent-600" />
                </div>
              </div>
            </div>
          )}

          {!loading && !error && tab === 'enquiries' && (
            <div className="card overflow-hidden">
              {enquiries.length === 0 ? (
                <p className="p-8 text-center text-navy-500 text-sm">You haven't submitted any enquiries yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-navy-50 text-navy-500 text-xs uppercase tracking-wide">
                      <tr>
                        <th className="text-left px-5 py-3">Service</th>
                        <th className="text-left px-5 py-3">Message</th>
                        <th className="text-left px-5 py-3">Status</th>
                        <th className="text-left px-5 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy-100">
                      {enquiries.map((e) => (
                        <tr key={e._id}>
                          <td className="px-5 py-4 font-medium text-navy-800">{e.service}</td>
                          <td className="px-5 py-4 text-navy-600 max-w-xs truncate">{e.message}</td>
                          <td className="px-5 py-4"><StatusBadge status={e.status} /></td>
                          <td className="px-5 py-4 text-navy-500">{new Date(e.createdAt).toLocaleDateString('en-GB')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {!loading && !error && tab === 'requests' && (
            <div>
              <div className="flex justify-end mb-4">
                <button onClick={() => setModalOpen(true)} className="btn-primary">
                  <Plus className="h-4 w-4" /> New Service Request
                </button>
              </div>
              <div className="card overflow-hidden">
                {requests.length === 0 ? (
                  <p className="p-8 text-center text-navy-500 text-sm">You haven't submitted any service requests yet.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-navy-50 text-navy-500 text-xs uppercase tracking-wide">
                        <tr>
                          <th className="text-left px-5 py-3">Service</th>
                          <th className="text-left px-5 py-3">Description</th>
                          <th className="text-left px-5 py-3">Status</th>
                          <th className="text-left px-5 py-3">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-navy-100">
                        {requests.map((r) => (
                          <tr key={r._id}>
                            <td className="px-5 py-4 font-medium text-navy-800">{r.service}</td>
                            <td className="px-5 py-4 text-navy-600 max-w-xs truncate">{r.description}</td>
                            <td className="px-5 py-4"><StatusBadge status={r.status} /></td>
                            <td className="px-5 py-4 text-navy-500">{new Date(r.createdAt).toLocaleDateString('en-GB')}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="New Service Request">
        <form onSubmit={handleCreateRequest} className="flex flex-col gap-4">
          {requestError && <ErrorMessage message={requestError} />}
          <div>
            <label className="label">Service</label>
            <select className="input" value={newRequest.service} onChange={(e) => setNewRequest((p) => ({ ...p, service: e.target.value }))}>
              {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Description</label>
            <textarea rows={4} className="input resize-none" value={newRequest.description} onChange={(e) => setNewRequest((p) => ({ ...p, description: e.target.value }))} />
          </div>
          <button type="submit" disabled={requestSubmitting} className="btn-primary self-start">
            {requestSubmitting ? 'Submitting…' : 'Submit Request'}
          </button>
        </form>
      </Modal>
    </MainLayout>
  );
};

export default DashboardPage;
