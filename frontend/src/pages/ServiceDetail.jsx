import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { getIcon } from '../utils/iconMap';
import { fetchServiceById } from '../services/dataService';
import { getErrorMessage } from '../services/api';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError('');
      try {
        const { service: data } = await fetchServiceById(id);
        setService(data);
      } catch (err) {
        setError(getErrorMessage(err));
      } finally {
        setLoading(false);
      }
    };
    load();
    
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <div className="py-24"><LoadingSpinner fullPage label="Loading service details…" /></div>
      </MainLayout>
    );
  }

  if (error || !service) {
    return (
      <MainLayout>
        <div className="section container-page max-w-md mx-auto text-center">
          <ErrorMessage message={error || 'This service could not be found.'} />
          <Link to="/services" className="btn-secondary mt-6 inline-flex">
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
        </div>
      </MainLayout>
    );
  }

  const Icon = getIcon(service.icon);

  return (
    <MainLayout>
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="container-page">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-navy-300 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-white/10 text-accent-300 flex items-center justify-center flex-shrink-0">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-accent-300">{service.category}</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">{service.name}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-12">
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">Overview</h2>
              <p className="text-navy-600 leading-relaxed">{service.overview}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-4">What's Included</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy-700">
                    <CheckCircle2 className="h-4.5 w-4.5 text-accent-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-4">Typical Use Cases</h2>
              <ul className="flex flex-col gap-2.5">
                {service.useCases.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy-700">
                    <CheckCircle2 className="h-4.5 w-4.5 text-accent-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-4">Our Process</h2>
              <ol className="flex flex-col gap-4">
                {service.process.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-xs">
                      {index + 1}
                    </span>
                    <p className="text-sm text-navy-700 pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-2">Frequently Asked Questions</h2>
              <FAQ items={service.faqs.map((f) => ({ q: f.q, a: f.a }))} />
            </div>
          </div>

          <div>
            <div className="card p-6 sticky top-24">
              <h3 className="font-bold text-navy-900 mb-3">Key Benefits</h3>
              <ul className="flex flex-col gap-2.5 mb-6">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-navy-600">
                    <CheckCircle2 className="h-4.5 w-4.5 text-green-600 flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
              <Button to={`/contact?service=${encodeURIComponent(service.name)}`} variant="primary" className="w-full">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </MainLayout>
  );
};

export default ServiceDetailPage;
