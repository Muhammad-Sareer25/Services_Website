import React from 'react';
import MainLayout from '../layouts/MainLayout';

const PrivacyPolicyPage = () => {
  return (
    <MainLayout>
      <section className="section">
        <div className="container-page max-w-3xl">
          <h1 className="text-3xl font-extrabold text-navy-900 mb-6">Privacy Policy</h1>
          <div className="prose text-navy-600 leading-relaxed flex flex-col gap-4 text-sm">
            <p>
              This is placeholder privacy policy content for CLICK TZEE LTD. Replace this page with your finalised
              privacy policy before going live, covering how personal data submitted via this website (e.g. contact
              form and account details) is collected, used, stored and protected in line with UK GDPR and the Data
              Protection Act 2018.
            </p>
            <p>
              Topics a complete policy should cover include: what data is collected, the legal basis for processing,
              how long data is retained, third parties data may be shared with, and how users can exercise their
              data protection rights.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PrivacyPolicyPage;
