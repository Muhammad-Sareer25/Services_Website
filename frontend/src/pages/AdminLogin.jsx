import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../hooks/useAuth';
import ErrorMessage from '../components/ErrorMessage';
import { useState } from 'react';

const AdminLoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [notAdminError, setNotAdminError] = useState('');

  const handleLogin = async (credentials) => {
    setNotAdminError('');
    const user = await login(credentials);
    if (user.role !== 'admin') {
      setNotAdminError('This account does not have administrator access.');
      return;
    }
    const redirectTo = location.state?.from?.pathname || '/admin/dashboard';
    navigate(redirectTo, { replace: true });
  };

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-xl bg-white/10 text-accent-300 flex items-center justify-center">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-extrabold text-white">CLICK TZEE Admin</h1>
          <p className="text-sm text-navy-300">Restricted access — administrators only</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-cardHover">
          {notAdminError && <div className="mb-4"><ErrorMessage message={notAdminError} /></div>}
          <LoginForm onSubmit={handleLogin} submitLabel="Log In as Admin" />
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
