import React from 'react';
import SectionTitle from './SectionTitle';

const steps = [
  { title: 'Contact Us', description: 'Get in touch via our contact form or phone to start the conversation.' },
  { title: 'Understand Your Requirements', description: 'We take time to understand your business and technical needs.' },
  { title: 'Site / Technical Assessment', description: 'Where needed, we carry out a survey or technical review.' },
  { title: 'Solution Planning', description: 'We design a solution and plan tailored to your requirements.' },
  { title: 'Implementation', description: 'Our engineers deliver the agreed work to a professional standard.' },
  { title: 'Ongoing Support', description: 'We provide continued support and maintenance where required.' },
];

const Process = () => {
  return (
    <section className="section">
      <div className="container-page">
        <SectionTitle
          eyebrow="Our Process"
          title="A clear, structured path from enquiry to ongoing support"
          description="Every engagement follows the same reliable process, so you always know what happens next."
        />
        <ol className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex-shrink-0 h-10 w-10 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-sm">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-bold text-navy-900 mb-1">{step.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
