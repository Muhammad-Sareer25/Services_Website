import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <MainLayout>
      <section className="section">
        <div className="container-page text-center flex flex-col items-center gap-4">
          <span className="text-7xl font-extrabold text-navy-200">404</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Page not found</h1>
          <p className="text-navy-500 max-w-md">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <Button to="/" variant="primary" className="mt-2">Back to Home</Button>
          <Link to="/contact" className="text-sm text-accent-700 hover:text-accent-800 font-medium">
            Or get in touch with us
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default NotFoundPage;
