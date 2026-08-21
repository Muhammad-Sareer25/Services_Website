import React from 'react';
import Button from './Button';

const CTA = ({
  title = 'Need reliable IT support or infrastructure services?',
  description = 'Talk to our team about a tailored managed IT or professional services plan for your business.',
  buttonLabel = 'Request a Quote',
  buttonTo = '/contact',
}) => {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 sm:px-14 sm:py-16 text-center">
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-600/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{title}</h2>
            <p className="text-navy-200 text-base sm:text-lg">{description}</p>
            <Button to={buttonTo} variant="primary" className="!px-8 !py-3.5 text-base">
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
