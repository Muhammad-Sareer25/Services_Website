import React from 'react';
import { ShieldCheck, Server, ArrowRight } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="pointer-events-none absolute top-0 right-0 h-[36rem] w-[36rem] rounded-full bg-accent-600/20 blur-3xl translate-x-1/3 -translate-y-1/3"
        aria-hidden="true"
      />
      <div className="container-page relative py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <span className="eyebrow bg-white/10 text-accent-300 w-fit">UK Managed IT &amp; Professional Services</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
            Reliable IT Infrastructure &amp; Professional Technology Services
          </h1>
          <p className="text-lg text-navy-200 leading-relaxed max-w-xl">
            Delivering reliable IT infrastructure, managed services and technology solutions for businesses across
            the UK.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Button to="/contact" variant="primary" className="!px-6 !py-3.5 text-base">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/services" variant="outlineLight" className="!px-6 !py-3.5 text-base">
              Explore Our Services
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-8 shadow-cardHover">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80"
              alt="IT engineers working in a modern server room"
              className="rounded-xl w-full h-72 sm:h-80 object-cover"
              loading="eager"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-cardHover p-4 flex items-center gap-3 max-w-[220px]">
              <div className="h-10 w-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-navy-900 leading-tight">24/7 Support</p>
                <p className="text-xs text-navy-500">Always available</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-cardHover p-4 flex items-center gap-3 max-w-[220px] hidden sm:flex">
              <div className="h-10 w-10 rounded-lg bg-accent-50 text-accent-700 flex items-center justify-center flex-shrink-0">
                <Server className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-navy-900 leading-tight">UK-Wide Coverage</p>
                <p className="text-xs text-navy-500">Engineers nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
