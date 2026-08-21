import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionTitle from '../components/SectionTitle';
import ServiceGrid from '../components/ServiceGrid';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import CTA from '../components/CTA';
import { fetchServices } from '../services/dataService';
import { getErrorMessage } from '../services/api';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadServices = async () => {
    setLoading(true);
    setError('');
    try {
      const { services: data } = await fetchServices();
      setServices(data);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  const managed = services.filter((s) => s.category === 'Managed Services');
  const professional = services.filter((s) => s.category === 'Professional Services');

  return (
    <MainLayout>
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="container-page text-center flex flex-col items-center gap-4">
          <span className="eyebrow bg-white/10 text-accent-300">Our Services</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl">
            Managed IT and Professional Technology Services
          </h1>
          <p className="text-navy-200 max-w-2xl text-lg">
            Ten core services covering the full lifecycle of your IT infrastructure — from day-to-day management to
            hands-on project delivery.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          {loading && <LoadingSpinner label="Loading services…" />}
          {error && <div className="max-w-md mx-auto"><ErrorMessage message={error} onRetry={loadServices} /></div>}

          {!loading && !error && (
            <div className="flex flex-col gap-16">
              <div id="managed-services" className="scroll-mt-24">
                <SectionTitle align="left" eyebrow="01" title="Managed Services" description="Ongoing, proactive support that keeps your infrastructure healthy day to day." />
                <div className="mt-8">
                  <ServiceGrid services={managed} />
                </div>
              </div>
              <div id="professional-services" className="scroll-mt-24">
                <SectionTitle align="left" eyebrow="02" title="Professional Services" description="Project-based and specialist services for planning, deployment and change." />
                <div className="mt-8">
                  <ServiceGrid services={professional} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </MainLayout>
  );
};

export default ServicesPage;
