import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SuccessMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
};

export default SuccessMessage;
