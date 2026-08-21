import React from 'react';
import MainLayout from '../layouts/MainLayout';

const TermsPage = () => {
  return (
    <MainLayout>
      <section className="section">
        <div className="container-page max-w-3xl">
          <h1 className="text-3xl font-extrabold text-navy-900 mb-6">Terms &amp; Conditions</h1>
          <div className="prose text-navy-600 leading-relaxed flex flex-col gap-4 text-sm">
            <p>
              This is placeholder terms &amp; conditions content for CLICK TZEE LTD. Replace this page with your
              finalised terms of service before going live, covering use of this website, service agreements, and
              any relevant liability and jurisdiction clauses under UK law.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TermsPage;
