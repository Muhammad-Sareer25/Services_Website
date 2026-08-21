import React from 'react';

const SectionTitle = ({ eyebrow, title, description, align = 'center' }) => {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto';

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900">{title}</h2>
      {description && <p className="text-base sm:text-lg text-navy-600 leading-relaxed">{description}</p>}
    </div>
  );
};

export default SectionTitle;
