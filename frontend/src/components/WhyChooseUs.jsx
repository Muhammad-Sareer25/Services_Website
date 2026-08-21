import React from 'react';
import { HeadphonesIcon, ShieldCheck, Gauge, UserCheck, MapPinned, SlidersHorizontal } from 'lucide-react';
import SectionTitle from './SectionTitle';

const reasons = [
  { icon: HeadphonesIcon, title: 'Experienced Technical Support', description: 'Skilled engineers on hand to resolve issues quickly and clearly.' },
  { icon: ShieldCheck, title: 'Reliable Infrastructure', description: 'Proactive maintenance that keeps your systems dependable.' },
  { icon: Gauge, title: 'Fast Response', description: 'Agreed response times so issues are addressed without delay.' },
  { icon: UserCheck, title: 'Professional Engineers', description: 'Vetted, qualified technicians for every engagement.' },
  { icon: MapPinned, title: 'UK-Wide Service', description: 'On-site and remote support available across the UK.' },
  { icon: SlidersHorizontal, title: 'Flexible Solutions', description: 'Services shaped around your business needs, not the other way round.' },
];

const WhyChooseUs = () => {
  return (
    <section className="section bg-navy-50/60">
      <div className="container-page">
        <SectionTitle
          eyebrow="Why CLICK TZEE LTD"
          title="Built around reliability and clear communication"
          description="We combine experienced engineers, proactive processes and UK-wide coverage to keep your technology running smoothly."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="card p-6">
              <div className="h-11 w-11 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-navy-900 mb-1.5">{title}</h3>
              <p className="text-sm text-navy-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
