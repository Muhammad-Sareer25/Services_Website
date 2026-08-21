import React from 'react';
import AdminSidebar from '../components/AdminSidebar';

const AdminLayout = ({ children, title, description }) => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 min-h-screen bg-navy-50/50">
        <div className="container-page py-10">
          {(title || description) && (
            <div className="mb-8">
              {title && <h1 className="text-2xl font-extrabold text-navy-900">{title}</h1>}
              {description && <p className="text-sm text-navy-500 mt-1">{description}</p>}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
