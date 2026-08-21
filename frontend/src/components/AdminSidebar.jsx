import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Mail, ClipboardList, UserCog, LogOut, Home } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const links = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/users', label: 'Users', icon: Users },
  { to: '/admin/enquiries', label: 'Enquiries', icon: Mail },
  { to: '/admin/requests', label: 'Service Requests', icon: ClipboardList },
  { to: '/admin/profile', label: 'Profile', icon: UserCog },
];

const AdminSidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <aside className="w-64 flex-shrink-0 bg-navy-900 text-navy-200 flex flex-col min-h-screen">
      <div className="px-6 py-6 border-b border-white/10">
        <span className="text-lg font-extrabold text-white">CLICK TZEE<span className="text-accent-400"> Admin</span></span>
      </div>
      <nav className="flex-1 px-3 py-6 flex flex-col gap-1">
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'
              }`
            }
          >
            <Icon className="h-4.5 w-4.5" />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="px-3 py-6 border-t border-white/10 flex flex-col gap-1">
        <NavLink to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-white/5 hover:text-white">
          <Home className="h-4.5 w-4.5" />
          Back to site
        </NavLink>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-300 hover:bg-red-500/10 text-left"
        >
          <LogOut className="h-4.5 w-4.5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
