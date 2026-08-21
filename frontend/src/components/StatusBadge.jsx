import React from 'react';

const styles = {
  // Enquiry statuses
  New: 'bg-blue-50 text-blue-700 border-blue-200',
  'In Review': 'bg-amber-50 text-amber-700 border-amber-200',
  Responded: 'bg-green-50 text-green-700 border-green-200',
  Closed: 'bg-navy-100 text-navy-600 border-navy-200',
  // Service request statuses
  Submitted: 'bg-blue-50 text-blue-700 border-blue-200',
  'Under Review': 'bg-amber-50 text-amber-700 border-amber-200',
  'In Progress': 'bg-accent-50 text-accent-700 border-accent-200',
  Completed: 'bg-green-50 text-green-700 border-green-200',
  Cancelled: 'bg-red-50 text-red-700 border-red-200',
};

const StatusBadge = ({ status }) => {
  const classes = styles[status] || 'bg-navy-100 text-navy-600 border-navy-200';
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${classes}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
