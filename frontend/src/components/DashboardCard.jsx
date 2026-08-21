import React from 'react';

const DashboardCard = ({ icon: Icon, label, value, accent = 'accent' }) => {
  const accents = {
    accent: 'bg-accent-50 text-accent-700',
    green: 'bg-green-50 text-green-700',
    amber: 'bg-amber-50 text-amber-700',
    navy: 'bg-navy-100 text-navy-700',
  };

  return (
    <div className="card p-5 flex items-center gap-4">
      {Icon && (
        <div className={`h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0 ${accents[accent]}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      )}
      <div>
        <p className="text-2xl font-extrabold text-navy-900 leading-none">{value}</p>
        <p className="text-sm text-navy-500 mt-1">{label}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
