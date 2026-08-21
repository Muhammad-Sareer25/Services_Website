import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import RegisterForm from '../components/RegisterForm';
import { useAuth } from '../hooks/useAuth';

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (payload) => {
    await register(payload);
    navigate('/dashboard', { replace: true });
  };

  return (
    <MainLayout>
      <section className="section">
        <div className="container-page max-w-md mx-auto">
          <div className="card p-8">
            <h1 className="text-2xl font-extrabold text-navy-900 mb-1">Create an Account</h1>
            <p className="text-sm text-navy-500 mb-6">Register to submit and track service requests.</p>
            <RegisterForm onSubmit={handleRegister} />
            <p className="text-sm text-navy-500 mt-6 text-center">
              Already have an account?{' '}
              <Link to="/login" className="text-accent-700 font-semibold hover:text-accent-800">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default RegisterPage;
