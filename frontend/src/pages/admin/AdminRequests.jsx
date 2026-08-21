import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import StatusBadge from '../../components/StatusBadge';
import Modal from '../../components/Modal';
import { fetchRequests, updateServiceRequest } from '../../services/dataService';
import { getErrorMessage } from '../../services/api';

const STATUS_OPTIONS = ['Submitted', 'Under Review', 'In Progress', 'Completed', 'Cancelled'];

const AdminRequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selected, setSelected] = useState(null);
  const [notesDraft, setNotesDraft] = useState('');
  const [actionError, setActionError] = useState('');
  const [saving, setSaving] = useState(false);

  const loadRequests = async () => {
    setLoading(true);
    setError('');
    try {
      const params = {};
      if (statusFilter) params.status = statusFilter;
      const { requests: data } = await fetchRequests(params);
      setRequests(data);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter]);

  const openDetail = (r) => {
    setSelected(r);
    setNotesDraft(r.adminNotes || '');
  };

  const handleSave = async (status) => {
    if (!selected) return;
    setActionError('');
    setSaving(true);
    try {
      const payload = { adminNotes: notesDraft };
      if (status) payload.status = status;
      const { request } = await updateServiceRequest(selected._id, payload);
      setSelected(request);
      loadRequests();
    } catch (err) {
      setActionError(getErrorMessage(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout title="Service Request Management" description="Track and update the status of client service requests.">
      <div className="flex flex-wrap gap-3 mb-6">
        <select className="input max-w-[200px]" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All statuses</option>
          {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {actionError && <div className="mb-4"><ErrorMessage message={actionError} /></div>}
      {loading && <LoadingSpinner label="Loading service requests…" />}
      {error && <ErrorMessage message={error} onRetry={loadRequests} />}

      {!loading && !error && (
        <div className="card overflow-hidden">
          {requests.length === 0 ? (
            <p className="p-8 text-center text-navy-500 text-sm">No service requests found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-navy-50 text-navy-500 text-xs uppercase tracking-wide">
                  <tr>
                    <th className="text-left px-5 py-3">Client</th>
                    <th className="text-left px-5 py-3">Service</th>
                    <th className="text-left px-5 py-3">Status</th>
                    <th className="text-left px-5 py-3">Date</th>
                    <th className="text-right px-5 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-100">
                  {requests.map((r) => (
                    <tr key={r._id}>
                      <td className="px-5 py-4">
                        <p className="font-medium text-navy-800">{r.user?.name || 'Unknown'}</p>
                        <p className="text-xs text-navy-400">{r.user?.email}</p>
                      </td>
                      <td className="px-5 py-4 text-navy-600">{r.service}</td>
                      <td className="px-5 py-4"><StatusBadge status={r.status} /></td>
                      <td className="px-5 py-4 text-navy-500">{new Date(r.createdAt).toLocaleDateString('en-GB')}</td>
                      <td className="px-5 py-4 text-right">
                        <button onClick={() => openDetail(r)} title="View" className="text-navy-400 hover:text-accent-700">
                          <Eye className="h-4.5 w-4.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      <Modal open={!!selected} onClose={() => setSelected(null)} title="Service Request Details">
        {selected && (
          <div className="flex flex-col gap-4">
            <div><p className="label mb-1">Client</p><p className="text-sm text-navy-800">{selected.user?.name} ({selected.user?.email})</p></div>
            <div><p className="label mb-1">Service</p><p className="text-sm text-navy-800">{selected.service}</p></div>
            <div><p className="label mb-1">Description</p><p className="text-sm text-navy-800 leading-relaxed">{selected.description}</p></div>
            <div>
              <p className="label mb-1">Status</p>
              <select className="input" value={selected.status} onChange={(e) => setSelected((p) => ({ ...p, status: e.target.value }))}>
                {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <p className="label mb-1">Admin Notes</p>
              <textarea rows={4} className="input resize-none" value={notesDraft} onChange={(e) => setNotesDraft(e.target.value)} />
            </div>
            <button onClick={() => handleSave(selected.status)} disabled={saving} className="btn-primary self-start">
              {saving ? 'Saving…' : 'Save Changes'}
            </button>
          </div>
        )}
      </Modal>
    </AdminLayout>
  );
};

export default AdminRequestsPage;
