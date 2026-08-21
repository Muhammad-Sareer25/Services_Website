import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import SectionTitle from '../components/SectionTitle';
import ServiceGrid from '../components/ServiceGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import CTA from '../components/CTA';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { fetchServices } from '../services/dataService';
import { getErrorMessage } from '../services/api';

const HomePage = () => {
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
      <Hero />
      <Stats />

      <section className="section" id="services">
        <div className="container-page">
          <SectionTitle
            eyebrow="What We Do"
            title="Managed IT & Professional Technology Services"
            description="From day-to-day infrastructure support to hands-on project delivery, CLICK TZEE LTD covers the full lifecycle of your IT estate."
          />

          {loading && <div className="mt-12"><LoadingSpinner label="Loading services…" /></div>}
          {error && <div className="mt-12 max-w-md mx-auto"><ErrorMessage message={error} onRetry={loadServices} /></div>}

          {!loading && !error && (
            <div className="mt-14 flex flex-col gap-14">
              <div id="managed-services">
                <h3 className="text-xl font-bold text-navy-900 mb-6">Managed Services</h3>
                <ServiceGrid services={managed} />
              </div>
              <div id="professional-services">
                <h3 className="text-xl font-bold text-navy-900 mb-6">Professional Services</h3>
                <ServiceGrid services={professional} />
              </div>
            </div>
          )}
        </div>
      </section>

      <WhyChooseUs />
      <Process />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
