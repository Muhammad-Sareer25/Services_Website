import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-navy-200">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="h-9 w-9 rounded-lg bg-white text-navy-900 flex items-center justify-center font-extrabold text-sm">
                CT
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">
                CLICK TZEE<span className="text-accent-400"> LTD</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-navy-300 max-w-xs">
              Reliable managed IT services and professional technology solutions for businesses across the UK.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" aria-label="CLICK TZEE LTD on LinkedIn" className="text-navy-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="CLICK TZEE LTD on Twitter / X" className="text-navy-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="CLICK TZEE LTD on Facebook" className="text-navy-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services/network-maintenance" className="hover:text-white transition-colors">Network Maintenance</Link></li>
              <li><Link to="/services/server-maintenance" className="hover:text-white transition-colors">Server Maintenance</Link></li>
              <li><Link to="/services/data-center-services" className="hover:text-white transition-colors">Data Center Services</Link></li>
              <li><Link to="/services/wifi-surveys" className="hover:text-white transition-colors">Wi-Fi Surveys</Link></li>
              <li><Link to="/services/rollout-migration" className="hover:text-white transition-colors">Rollout &amp; Migration</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Client Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-navy-400" />
                <span>Registered Office, United Kingdom<br />86-90 Paul Street London England EC2A 4NE United Kingdom</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-navy-400" />
                <a href="tel:+441234567890" className="hover:text-white transition-colors">+44 (0)1234 567 890</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-navy-400" />
                <a href="mailto:info@clicktzee.com" className="hover:text-white transition-colors">info@clicktzee.com</a>
              </li>
                <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-navy-400" />
                <a href="mailto:hr@clicktzee.com" className="hover:text-white transition-colors">hr@clicktzee.com</a>
              </li>
                <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-navy-400" />
                <a href="mailto:sales@clicktzee.com" className="hover:text-white transition-colors">sales@clicktzee.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-navy-400" />
                <a href="mailto:manager@clicktzee.com" className="hover:text-white transition-colors">manager@clicktzee.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-navy-400" />
                <a href="mailto:accounts@clicktzee.com" className="hover:text-white transition-colors">accounts@clicktzee.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy-400">
          <p>&copy; {year} CLICK TZEE LTD. All rights reserved. Registered in England &amp; Wales.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
