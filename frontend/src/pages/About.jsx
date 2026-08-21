import React from 'react';
import { Target, Eye, HeartHandshake, MapPin } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';

const values = [
  { title: 'Reliability', description: 'We deliver consistent, dependable service that businesses can plan around.' },
  { title: 'Transparency', description: 'Clear communication and honest advice, without unnecessary jargon.' },
  { title: 'Technical Excellence', description: 'Skilled engineers who take pride in doing the job properly.' },
  { title: 'Responsiveness', description: 'Fast, practical support when issues need resolving.' },
];

const AboutPage = () => {
  return (
    <MainLayout>
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="container-page text-center flex flex-col items-center gap-4">
          <span className="eyebrow bg-white/10 text-accent-300">About CLICK TZEE LTD</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl">
            A UK IT services partner built on reliability and technical expertise
          </h1>
          <p className="text-navy-200 max-w-2xl text-lg">
            We help businesses across the UK keep their IT infrastructure running smoothly, with managed services
            and professional technology support delivered by experienced engineers.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <SectionTitle
              align="left"
              eyebrow="Our Company"
              title="Practical IT support, delivered reliably"
              description="CLICK TZEE LTD provides managed IT and professional technology services to businesses across the United Kingdom. We work as an extension of your team, keeping infrastructure healthy and supporting the projects that keep your business moving forward."
            />
            <p className="text-navy-600 leading-relaxed">
              Our approach is straightforward: understand what a business needs, provide clear recommendations, and
              deliver work to a professional standard — whether that's day-to-day maintenance or a large-scale
              rollout.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
            alt="IT professionals collaborating in a modern office"
            className="rounded-2xl w-full h-80 object-cover shadow-card"
          />
        </div>
      </section>

      <section className="section bg-navy-50/60">
        <div className="container-page grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="card p-7">
            <div className="h-11 w-11 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center mb-4">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-navy-900 mb-2">Our Mission</h3>
            <p className="text-sm text-navy-600 leading-relaxed">
              To provide reliable, professional IT services that let UK businesses focus on what they do best.
            </p>
          </div>
          <div className="card p-7">
            <div className="h-11 w-11 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center mb-4">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-navy-900 mb-2">Our Vision</h3>
            <p className="text-sm text-navy-600 leading-relaxed">
              To be a trusted long-term technology partner for businesses across the UK.
            </p>
          </div>
          <div className="card p-7">
            <div className="h-11 w-11 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center mb-4">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-navy-900 mb-2">Why Businesses Choose Us</h3>
            <p className="text-sm text-navy-600 leading-relaxed">
              Responsive support, experienced engineers, and a straightforward way of working.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle eyebrow="What We Stand For" title="Our values" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <h3 className="font-bold text-navy-900 mb-2">{v.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-50/60">
        <div className="container-page flex flex-col items-center text-center gap-4">
          <div className="h-11 w-11 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center">
            <MapPin className="h-5 w-5" />
          </div>
          <SectionTitle title="UK-wide service coverage" description="Our engineers provide on-site and remote support to businesses across the United Kingdom, backed by a responsive helpdesk." />
        </div>
      </section>

      <CTA />
    </MainLayout>
  );
};

export default AboutPage;
