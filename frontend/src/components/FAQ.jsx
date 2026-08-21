import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!items.length) return null;

  return (
    <div className="divide-y divide-navy-100 border-t border-b border-navy-100">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <button
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-navy-900">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 text-navy-400 flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && <p className="pb-5 text-navy-600 leading-relaxed">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
