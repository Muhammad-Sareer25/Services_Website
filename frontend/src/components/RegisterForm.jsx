import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { getErrorMessage } from '../services/api';
import ErrorMessage from './ErrorMessage';

const RegisterForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', company: '', phone: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setSubmitting(true);
    try {
      await onSubmit(form);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {error && <ErrorMessage message={error} />}
      <div>
        <label htmlFor="name" className="label">Full Name</label>
        <input id="name" name="name" type="text" className="input" value={form.name} onChange={handleChange} autoComplete="name" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="label">Company Name</label>
          <input id="company" name="company" type="text" className="input" value={form.company} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="phone" className="label">Phone</label>
          <input id="phone" name="phone" type="tel" className="input" value={form.phone} onChange={handleChange} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="label">Email</label>
        <input id="email" name="email" type="email" className="input" value={form.email} onChange={handleChange} autoComplete="email" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="password" className="label">Password</label>
          <input id="password" name="password" type="password" className="input" value={form.password} onChange={handleChange} autoComplete="new-password" />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="label">Confirm Password</label>
          <input id="confirmPassword" name="confirmPassword" type="password" className="input" value={form.confirmPassword} onChange={handleChange} autoComplete="new-password" />
        </div>
      </div>
      <button type="submit" disabled={submitting} className="btn-primary w-full">
        {submitting ? 'Creating account…' : (
          <>
            Create Account
            <UserPlus className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default RegisterForm;
