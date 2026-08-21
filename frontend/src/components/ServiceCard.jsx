import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getIcon } from '../utils/iconMap';

const ServiceCard = ({ service }) => {
  const Icon = getIcon(service.icon);

  return (
    <div className="card p-6 flex flex-col h-full group">
      <div className="h-12 w-12 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center mb-5 group-hover:bg-accent-600 group-hover:text-white transition-colors duration-200">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-navy-900 mb-2">{service.name}</h3>
      <p className="text-sm text-navy-600 leading-relaxed flex-1">{service.shortDescription}</p>
      <Link
        to={`/services/${service.id}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 hover:text-accent-800"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
};

export default ServiceCard;
