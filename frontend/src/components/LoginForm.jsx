import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { getErrorMessage } from '../services/api';
import ErrorMessage from './ErrorMessage';

const LoginForm = ({ onSubmit, submitLabel = 'Log In' }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.email || !form.password) {
      setError('Please enter your email and password');
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
        <label htmlFor="email" className="label">Email</label>
        <input id="email" name="email" type="email" className="input" value={form.email} onChange={handleChange} autoComplete="email" />
      </div>
      <div>
        <label htmlFor="password" className="label">Password</label>
        <input id="password" name="password" type="password" className="input" value={form.password} onChange={handleChange} autoComplete="current-password" />
      </div>
      <button type="submit" disabled={submitting} className="btn-primary w-full">
        {submitting ? 'Logging in…' : (
          <>
            {submitLabel}
            <LogIn className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default LoginForm;
