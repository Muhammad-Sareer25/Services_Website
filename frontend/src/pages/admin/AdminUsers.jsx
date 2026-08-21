import React, { useEffect, useState } from 'react';
import { Search, Trash2, Ban, CheckCircle } from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import Modal from '../../components/Modal';
import { fetchUsers, updateUser, deleteUser } from '../../services/dataService';
import { getErrorMessage } from '../../services/api';

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [actionError, setActionError] = useState('');

  const loadUsers = async (searchTerm = '') => {
    setLoading(true);
    setError('');
    try {
      const { users: data } = await fetchUsers(searchTerm ? { search: searchTerm } : {});
      setUsers(data);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    loadUsers(search);
  };

  const toggleActive = async (user) => {
    setActionError('');
    try {
      await updateUser(user._id, { isActive: !user.isActive });
      loadUsers(search);
    } catch (err) {
      setActionError(getErrorMessage(err));
    }
  };

  const handleDelete = async () => {
    if (!selectedUser) return;
    setActionError('');
    try {
      await deleteUser(selectedUser._id);
      setSelectedUser(null);
      loadUsers(search);
    } catch (err) {
      setActionError(getErrorMessage(err));
    }
  };

  return (
    <AdminLayout title="User Management" description="View, search and manage registered users.">
      <form onSubmit={handleSearch} className="flex gap-3 mb-6 max-w-md">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-400" />
          <input
            className="input pl-9"
            placeholder="Search by name or email…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-secondary">Search</button>
      </form>

      {actionError && <div className="mb-4"><ErrorMessage message={actionError} /></div>}
      {loading && <LoadingSpinner label="Loading users…" />}
      {error && <ErrorMessage message={error} onRetry={() => loadUsers(search)} />}

      {!loading && !error && (
        <div className="card overflow-hidden">
          {users.length === 0 ? (
            <p className="p-8 text-center text-navy-500 text-sm">No users found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-navy-50 text-navy-500 text-xs uppercase tracking-wide">
                  <tr>
                    <th className="text-left px-5 py-3">Name</th>
                    <th className="text-left px-5 py-3">Email</th>
                    <th className="text-left px-5 py-3">Role</th>
                    <th className="text-left px-5 py-3">Status</th>
                    <th className="text-left px-5 py-3">Joined</th>
                    <th className="text-right px-5 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-100">
                  {users.map((u) => (
                    <tr key={u._id}>
                      <td className="px-5 py-4 font-medium text-navy-800">{u.name}</td>
                      <td className="px-5 py-4 text-navy-600">{u.email}</td>
                      <td className="px-5 py-4 capitalize text-navy-600">{u.role}</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${u.isActive ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                          {u.isActive ? 'Active' : 'Disabled'}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-navy-500">{new Date(u.createdAt).toLocaleDateString('en-GB')}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-3">
                          <button onClick={() => toggleActive(u)} title={u.isActive ? 'Disable user' : 'Enable user'} className="text-navy-400 hover:text-accent-700">
                            {u.isActive ? <Ban className="h-4.5 w-4.5" /> : <CheckCircle className="h-4.5 w-4.5" />}
                          </button>
                          <button onClick={() => setSelectedUser(u)} title="Delete user" className="text-navy-400 hover:text-red-600">
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

      <Modal
        open={!!selectedUser}
        onClose={() => setSelectedUser(null)}
        title="Delete user"
        footer={
          <>
            <button className="btn-secondary" onClick={() => setSelectedUser(null)}>Cancel</button>
            <button className="btn-primary !bg-red-600 hover:!bg-red-700" onClick={handleDelete}>Delete</button>
          </>
        }
      >
        <p className="text-sm text-navy-600">
          Are you sure you want to delete <strong>{selectedUser?.name}</strong>? This action cannot be undone.
        </p>
      </Modal>
    </AdminLayout>
  );
};

export default AdminUsersPage;
