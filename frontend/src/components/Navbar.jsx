import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, LayoutDashboard, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import Button from './Button';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { label: 'Managed Services', to: '/services#managed-services' },
  { label: 'Professional Services', to: '/services#professional-services' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, isAdmin, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-accent-700' : 'text-navy-600 hover:text-navy-900'
    }`;

  return (
    <header
      className={`sticky top-0 z-40 bg-white/90 backdrop-blur border-b transition-shadow ${
        scrolled ? 'border-navy-100 shadow-sm' : 'border-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-18 py-3.5" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="h-9 w-9 rounded-lg bg-navy-900 text-white flex items-center justify-center font-extrabold text-sm">
            CT
          </span>
          <span className="text-lg font-extrabold tracking-tight text-navy-900">
            CLICK TZEE<span className="text-accent-600"> LTD</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.label === 'Services' ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink to={link.to} className={linkClass}>
                  <span className="inline-flex items-center gap-1">
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </span>
                </NavLink>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div className="bg-white rounded-xl border border-navy-100 shadow-cardHover p-2 min-w-[200px]">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="block px-3 py-2 rounded-lg text-sm text-navy-600 hover:bg-navy-50 hover:text-navy-900"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {!isAuthenticated && (
            <Link to="/login" className="text-sm font-medium text-navy-600 hover:text-navy-900">
              Login
            </Link>
          )}
          {isAuthenticated && !isAdmin && (
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-600 hover:text-navy-900"
            >
              <LayoutDashboard className="h-4 w-4" />
              {user?.name?.split(' ')[0] || 'Dashboard'}
            </Link>
          )}
          {isAuthenticated && isAdmin && (
            <Link
              to="/admin/dashboard"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-600 hover:text-navy-900"
            >
              <LayoutDashboard className="h-4 w-4" />
              Admin
            </Link>
          )}
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-400 hover:text-red-600"
            >
              <LogOut className="h-4 w-4" />
            </button>
          )}
          <Button to="/contact" variant="primary" className="!px-4 !py-2.5 text-sm">
            Get a Quote
          </Button>
        </div>

        <button
          className="lg:hidden text-navy-800"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-navy-100 bg-white">
          <div className="container-page py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="px-2 py-2.5 rounded-lg text-sm font-medium text-navy-700 hover:bg-navy-50"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="h-px bg-navy-100 my-2" />
            {!isAuthenticated && (
              <NavLink to="/login" className="px-2 py-2.5 rounded-lg text-sm font-medium text-navy-700 hover:bg-navy-50">
                Login
              </NavLink>
            )}
            {isAuthenticated && !isAdmin && (
              <NavLink to="/dashboard" className="px-2 py-2.5 rounded-lg text-sm font-medium text-navy-700 hover:bg-navy-50">
                My Dashboard
              </NavLink>
            )}
            {isAuthenticated && isAdmin && (
              <NavLink to="/admin/dashboard" className="px-2 py-2.5 rounded-lg text-sm font-medium text-navy-700 hover:bg-navy-50">
                Admin Dashboard
              </NavLink>
            )}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="text-left px-2 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            )}
            <Button to="/contact" variant="primary" className="mt-2 justify-center">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
