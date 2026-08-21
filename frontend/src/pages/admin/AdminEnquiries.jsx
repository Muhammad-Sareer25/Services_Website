import React, { useEffect, useState } from 'react';
import { Search, Trash2, Eye } from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import StatusBadge from '../../components/StatusBadge';
import Modal from '../../components/Modal';
import { fetchEnquiries, updateEnquiryStatus, deleteEnquiry } from '../../services/dataService';
import { getErrorMessage } from '../../services/api';

const STATUS_OPTIONS = ['New', 'In Review', 'Responded', 'Closed'];

const AdminEnquiriesPage = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selected, setSelected] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [actionError, setActionError] = useState('');

  const loadEnquiries = async () => {
    setLoading(true);
    setError('');
    try {
      const params = {};
      if (search) params.search = search;
      if (statusFilter) params.status = statusFilter;
      const { enquiries: data } = await fetchEnquiries(params);
      setEnquiries(data);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEnquiries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilter = (e) => {
    e.preventDefault();
    loadEnquiries();
  };

  const handleStatusChange = async (id, status) => {
    setActionError('');
    try {
      await updateEnquiryStatus(id, { status });
      loadEnquiries();
      if (selected?._id === id) setSelected((prev) => ({ ...prev, status }));
    } catch (err) {
      setActionError(getErrorMessage(err));
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setActionError('');
    try {
      await deleteEnquiry(deleteTarget._id);
      setDeleteTarget(null);
      loadEnquiries();
    } catch (err) {
      setActionError(getErrorMessage(err));
    }
  };

  return (
    <AdminLayout title="Enquiry Management" description="View, filter and manage contact form submissions.">
      <form onSubmit={handleFilter} className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-[220px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-400" />
          <input className="input pl-9" placeholder="Search by name, email, company…" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <select className="input max-w-[180px]" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All statuses</option>
          {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <button type="submit" className="btn-secondary">Filter</button>
      </form>

      {actionError && <div className="mb-4"><ErrorMessage message={actionError} /></div>}
      {loading && <LoadingSpinner label="Loading enquiries…" />}
      {error && <ErrorMessage message={error} onRetry={loadEnquiries} />}

      {!loading && !error && (
        <div className="card overflow-hidden">
          {enquiries.length === 0 ? (
            <p className="p-8 text-center text-navy-500 text-sm">No enquiries found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-navy-50 text-navy-500 text-xs uppercase tracking-wide">
                  <tr>
                    <th className="text-left px-5 py-3">Name</th>
                    <th className="text-left px-5 py-3">Service</th>
                    <th className="text-left px-5 py-3">Status</th>
                    <th className="text-left px-5 py-3">Date</th>
                    <th className="text-right px-5 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-100">
                  {enquiries.map((e) => (
                    <tr key={e._id}>
                      <td className="px-5 py-4">
                        <p className="font-medium text-navy-800">{e.name}</p>
                        <p className="text-xs text-navy-400">{e.email}</p>
                      </td>
                      <td className="px-5 py-4 text-navy-600">{e.service}</td>
                      <td className="px-5 py-4"><StatusBadge status={e.status} /></td>
                      <td className="px-5 py-4 text-navy-500">{new Date(e.createdAt).toLocaleDateString('en-GB')}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-3">
                          <button onClick={() => setSelected(e)} title="View" className="text-navy-400 hover:text-accent-700">
                            <Eye className="h-4.5 w-4.5" />
                          </button>
                          <button onClick={() => setDeleteTarget(e)} title="Delete" className="text-navy-400 hover:text-red-600">
                            <Trash2 className="h-4.5 w-4.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      <Modal open={!!selected} onClose={() => setSelected(null)} title="Enquiry Details">
        {selected && (
          <div className="flex flex-col gap-4">
            <div><p className="label mb-1">Name</p><p className="text-sm text-navy-800">{selected.name}</p></div>
            <div><p className="label mb-1">Company</p><p className="text-sm text-navy-800">{selected.company || '—'}</p></div>
            <div><p className="label mb-1">Email</p><p className="text-sm text-navy-800">{selected.email}</p></div>
            <div><p className="label mb-1">Phone</p><p className="text-sm text-navy-800">{selected.phone || '—'}</p></div>
            <div><p className="label mb-1">Service</p><p className="text-sm text-navy-800">{selected.service}</p></div>
            <div><p className="label mb-1">Message</p><p className="text-sm text-navy-800 leading-relaxed">{selected.message}</p></div>
            <div>
              <p className="label mb-1">Status</p>
              <select className="input" value={selected.status} onChange={(e) => handleStatusChange(selected._id, e.target.value)}>
                {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        title="Delete enquiry"
        footer={
          <>
            <button className="btn-secondary" onClick={() => setDeleteTarget(null)}>Cancel</button>
            <button className="btn-primary !bg-red-600 hover:!bg-red-700" onClick={handleDelete}>Delete</button>
          </>
        }
      >
        <p className="text-sm text-navy-600">
          Are you sure you want to delete the enquiry from <strong>{deleteTarget?.name}</strong>?
        </p>
      </Modal>
    </AdminLayout>
  );
};

export default AdminEnquiriesPage;
