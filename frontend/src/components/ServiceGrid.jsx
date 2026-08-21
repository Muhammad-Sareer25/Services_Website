import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceGrid = ({ services = [], columns = 'md:grid-cols-2 lg:grid-cols-3' }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-6`}>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceGrid;
