import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import ErrorMessage from '../../components/ErrorMessage';
import SuccessMessage from '../../components/SuccessMessage';
import { useAuth } from '../../hooks/useAuth';
import { getErrorMessage } from '../../services/api';
import api from '../../services/api';

const AdminProfilePage = () => {
  const { user, updateProfile } = useAuth();
  const [form, setForm] = useState({ name: user?.name || '' });
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const [pwForm, setPwForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [pwSaving, setPwSaving] = useState(false);
  const [pwSuccess, setPwSuccess] = useState('');
  const [pwError, setPwError] = useState('');

  const handleProfileSave = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSaving(true);
    try {
      await updateProfile(form);
      setSuccess('Profile updated successfully.');
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setPwError('');
    setPwSuccess('');

    if (!pwForm.currentPassword) {
      setPwError('Please enter your current password.');
      return;
    }
    if (!pwForm.newPassword || pwForm.newPassword.length < 8) {
      setPwError('New password must be at least 8 characters.');
      return;
    }
    if (pwForm.newPassword !== pwForm.confirmPassword) {
      setPwError('New passwords do not match.');
      return;
    }

    setPwSaving(true);
    try {
      await api.put('/auth/profile', {
        currentPassword: pwForm.currentPassword,
        password: pwForm.newPassword,
      });
      setPwSuccess('Password updated successfully.');
      setPwForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      setPwError(getErrorMessage(err));
    } finally {
      setPwSaving(false);
    }
  };

  return (
    <AdminLayout title="Admin Profile" description="Manage your administrator account.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-3xl">
        <div className="card p-6">
          <h3 className="font-bold text-navy-900 mb-4">Profile Details</h3>
          {success && <div className="mb-4"><SuccessMessage message={success} /></div>}
          {error && <div className="mb-4"><ErrorMessage message={error} /></div>}
          <form onSubmit={handleProfileSave} className="flex flex-col gap-4">
            <div>
              <label className="label">Name</label>
              <input className="input" value={form.name} onChange={(e) => setForm({ name: e.target.value })} />
            </div>
            <div>
              <label className="label">Email</label>
              <input className="input bg-navy-50" value={user?.email} disabled />
            </div>
            <button type="submit" disabled={saving} className="btn-primary self-start">
              {saving ? 'Saving…' : 'Save Changes'}
            </button>
          </form>
        </div>

        <div className="card p-6">
          <h3 className="font-bold text-navy-900 mb-4">Change Password</h3>
          {pwSuccess && <div className="mb-4"><SuccessMessage message={pwSuccess} /></div>}
          {pwError && <div className="mb-4"><ErrorMessage message={pwError} /></div>}
          <form onSubmit={handlePasswordChange} className="flex flex-col gap-4">
            <div>
              <label className="label">Current Password</label>
              <input type="password" className="input" value={pwForm.currentPassword} onChange={(e) => setPwForm((p) => ({ ...p, currentPassword: e.target.value }))} />
            </div>
            <div>
              <label className="label">New Password</label>
              <input type="password" className="input" value={pwForm.newPassword} onChange={(e) => setPwForm((p) => ({ ...p, newPassword: e.target.value }))} />
            </div>
            <div>
              <label className="label">Confirm New Password</label>
              <input type="password" className="input" value={pwForm.confirmPassword} onChange={(e) => setPwForm((p) => ({ ...p, confirmPassword: e.target.value }))} />
            </div>
            <button type="submit" disabled={pwSaving} className="btn-primary self-start">
              {pwSaving ? 'Updating…' : 'Update Password'}
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProfilePage;
