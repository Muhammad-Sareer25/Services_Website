import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const defaultService = searchParams.get('service') || undefined;

  return (
    <MainLayout>
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="container-page text-center flex flex-col items-center gap-4">
          <span className="eyebrow bg-white/10 text-accent-300">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl">
            Talk to our team
          </h1>
          <p className="text-navy-200 max-w-xl text-lg">
            Tell us about your requirements and we'll get back to you promptly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 card p-6 sm:p-8">
            <ContactForm defaultService={defaultService} />
          </div>

          <div className="flex flex-col gap-6">
            <div className="card p-6">
              <h3 className="font-bold text-navy-900 mb-4">Contact Details</h3>
              <ul className="flex flex-col gap-4 text-sm text-navy-600">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4.5 w-4.5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Registered Office, United Kingdom<br /><span className="text-navy-400">(Address placeholder)</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4.5 w-4.5 text-accent-600 flex-shrink-0" />
                  <a href="tel:+441234567890" className="hover:text-accent-700">+44 (0)1234 567 890</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4.5 w-4.5 text-accent-600 flex-shrink-0" />
                  <a href="mailto:info@clicktzee.co.uk" className="hover:text-accent-700">info@zeeclick.co.uk</a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-4.5 w-4.5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>24/7 support for existing clients<br />Mon–Fri, 9am–5:30pm for general enquiries</span>
                </li>
              </ul>
            </div>
            <div className="card overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                alt="CLICK TZEE LTD support team ready to help"
                className="h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
