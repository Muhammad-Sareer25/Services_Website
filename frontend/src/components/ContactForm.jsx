import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { submitEnquiry } from '../services/dataService';
import { getErrorMessage } from '../services/api';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';

const SERVICE_OPTIONS = [
  'General Enquiry',
  'Hardware Break Fix',
  'Server Maintenance',
  'Network Maintenance',
  'Data Center Services',
  'Asset Management',
  'Site Surveys',
  'ITAD',
  'Wi-Fi Surveys',
  'IMAC & Projects',
  'Rollout & Migration',
];

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: 'General Enquiry',
  message: '',
};

const ContactForm = ({ defaultService }) => {
  const [form, setForm] = useState({ ...initialForm, service: defaultService || 'General Enquiry' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.message.trim()) newErrors.message = 'Please add a short message';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    setSuccess(false);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    try {
      await submitEnquiry(form);
      setSuccess(true);
      setForm({ ...initialForm, service: defaultService || 'General Enquiry' });
    } catch (err) {
      setServerError(getErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {success && <SuccessMessage message="Thanks — your enquiry has been received. We'll be in touch shortly." />}
      {serverError && <ErrorMessage message={serverError} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="label">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            className="input"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <p id="name-error" className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className="label">Company Name</label>
          <input id="company" name="company" type="text" className="input" value={form.company} onChange={handleChange} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="label">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            className="input"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="label">Phone</label>
          <input id="phone" name="phone" type="tel" className="input" value={form.phone} onChange={handleChange} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="label">Service Required</label>
        <select id="service" name="service" className="input" value={form.service} onChange={handleChange}>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="label">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="input resize-none"
          value={form.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <p id="message-error" className="text-xs text-red-600 mt-1">{errors.message}</p>}
      </div>

      <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto self-start">
        {submitting ? 'Sending…' : (
          <>
            Send Enquiry
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
