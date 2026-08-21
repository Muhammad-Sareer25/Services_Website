import React from 'react';

const sizeMap = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-2',
  lg: 'h-12 w-12 border-[3px]',
};

const LoadingSpinner = ({ size = 'md', label = 'Loading', fullPage = false }) => {
  const spinner = (
    <div className="flex flex-col items-center justify-center gap-3" role="status" aria-live="polite">
      <div
        className={`${sizeMap[size]} rounded-full border-navy-200 border-t-accent-600 animate-spin`}
        aria-hidden="true"
      />
      {label && <span className="text-sm text-navy-500">{label}</span>}
    </div>
  );

  if (fullPage) {
    return <div className="min-h-[50vh] flex items-center justify-center">{spinner}</div>;
  }

  return spinner;
};

export default LoadingSpinner;
