import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (credentials) => {
    const user = await login(credentials);
    const redirectTo = location.state?.from?.pathname || (user.role === 'admin' ? '/admin/dashboard' : '/dashboard');
    navigate(redirectTo, { replace: true });
  };

  return (
    <MainLayout>
      <section className="section">
        <div className="container-page max-w-md mx-auto">
          <div className="card p-8">
            <h1 className="text-2xl font-extrabold text-navy-900 mb-1">Client Login</h1>
            <p className="text-sm text-navy-500 mb-6">Log in to view your enquiries and service requests.</p>
            <LoginForm onSubmit={handleLogin} />
            <p className="text-sm text-navy-500 mt-6 text-center">
              Don't have an account?{' '}
              <Link to="/register" className="text-accent-700 font-semibold hover:text-accent-800">
                Register
              </Link>
            </p>
            <p className="text-xs text-navy-400 mt-4 text-center">
              Administrator?{' '}
              <Link to="/admin/login" className="text-navy-500 underline underline-offset-2">
                Admin login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default LoginPage;
