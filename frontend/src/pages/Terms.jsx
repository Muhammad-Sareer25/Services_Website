import React from 'react';
import MainLayout from '../layouts/MainLayout';

const TermsPage = () => {
  return (
    <MainLayout>
      <section className="section">
        <div className="container-page max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-2">Terms &amp; Conditions</h1>
          <p className="text-sm text-navy-400 mb-10">Last updated: 01 September 2026</p>

          <div className="flex flex-col gap-10 text-navy-600 leading-relaxed text-sm">

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">1. Introduction</h2>
              <p className="mb-3">
                These Terms &amp; Conditions ("Terms") govern your use of the website located at{' '}
                <strong>clicktzee.com</strong> (the "Website") and any services offered by <strong>Click Tzee Ltd</strong>,
                a company registered in England and Wales under company number <strong>13879140</strong>,
                with its registered office at <strong>86-90 Paul Street London England EC2A 4NE United Kingdom</strong> ("we", "us", "our",
                "Click Tzee Ltd").
              </p>
              <p className="mb-3">
                By accessing or using this Website, registering for an account, or engaging us to provide IT
                services, you agree to be bound by these Terms. If you do not agree with any part of these Terms,
                please do not use the Website or our services.
              </p>
              <p>These Terms should be read alongside our Privacy Policy, which explains how we collect and use your personal data.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">2. Definitions</h2>
              <ul className="list-disc pl-5 flex flex-col gap-1">
                <li><strong>"Client"</strong> means any individual or business that engages Click Tzee Ltd for IT services.</li>
                <li><strong>"Services"</strong> means the managed IT and professional technology services described on the Website, including but not limited to Hardware Break Fix, Server Maintenance, Network Maintenance, Data Center Services, Asset Management, Site Surveys, ITAD, Wi-Fi Surveys, IMAC &amp; Projects, and Rollout &amp; Migration.</li>
                <li><strong>"Content"</strong> means any text, images, data, or material published on the Website.</li>
                <li><strong>"Account"</strong> means a registered user profile enabling access to the client dashboard.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">3. Use of This Website</h2>
              <h3 className="font-bold text-navy-800 mb-2">3.1 Permitted Use</h3>
              <p className="mb-4">
                You may use this Website for lawful purposes only, including browsing information about our
                Services, submitting enquiries, and managing your account and service requests.
              </p>
              <h3 className="font-bold text-navy-800 mb-2">3.2 Prohibited Use</h3>
              <p className="mb-2">You must not:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1 mb-3">
                <li>Use the Website in any way that breaches any applicable local, national, or international law or regulation</li>
                <li>Attempt to gain unauthorised access to any part of the Website, our servers, or any systems or networks connected to the Website</li>
                <li>Introduce viruses, malware, or other harmful material</li>
                <li>Use automated systems (bots, scrapers) to access the Website without our prior written consent</li>
                <li>Misrepresent your identity or affiliation when submitting enquiries or registering an account</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate access to the Website or any Account found to be in
                breach of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">4. Account Registration</h2>
              <h3 className="font-bold text-navy-800 mb-2">4.1 Eligibility</h3>
              <p className="mb-4">
                To register an Account, you must be at least 18 years old and have the authority to enter into these
                Terms on behalf of yourself or the business you represent.
              </p>
              <h3 className="font-bold text-navy-800 mb-2">4.2 Account Responsibility</h3>
              <p className="mb-2">You are responsible for:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1 mb-3">
                <li>Maintaining the confidentiality of your login credentials</li>
                <li>All activities that occur under your Account</li>
                <li>Notifying us immediately of any unauthorised use of your Account</li>
              </ul>
              <p className="mb-4">
                We are not liable for any loss or damage arising from your failure to safeguard your login details.
              </p>
              <h3 className="font-bold text-navy-800 mb-2">4.3 Account Termination</h3>
              <p>
                We reserve the right to suspend or terminate any Account, at our discretion, where we reasonably
                believe these Terms have been breached, or where an Account has been inactive for an extended
                period.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">5. Enquiries and Service Requests</h2>
              <h3 className="font-bold text-navy-800 mb-2">5.1 Enquiries</h3>
              <p className="mb-4">
                Submitting an enquiry via our contact form does not create a binding contract between you and Click
                Tzee Ltd. It is an expression of interest, which we will respond to in order to discuss your
                requirements further.
              </p>
              <h3 className="font-bold text-navy-800 mb-2">5.2 Service Requests</h3>
              <p className="mb-4">
                Where you submit a service request through your Account, this constitutes a request for us to
                provide the specified Service. A binding agreement for the provision of Services will only be formed
                once we have confirmed acceptance of that request, typically via a separate quotation, order
                confirmation, or signed service agreement setting out the specific scope, pricing, and terms
                applicable to that engagement.
              </p>
              <h3 className="font-bold text-navy-800 mb-2">5.3 Quotations</h3>
              <p>
                Any quotations provided are valid for the period stated therein (or, if unstated, 30 days) and are
                subject to survey, site assessment, or further clarification of requirements where applicable.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">6. Provision of Services</h2>
              <h3 className="font-bold text-navy-800 mb-2">6.1 Standard of Service</h3>
              <p className="mb-4">
                We will use reasonable skill and care in providing the Services, in line with good industry
                practice.
              </p>
              <h3 className="font-bold text-navy-800 mb-2">6.2 Service Levels</h3>
              <p className="mb-4">
                Specific response times, service levels, and scope of work will be set out in the individual service
                agreement or statement of work agreed between Click Tzee Ltd and the Client, and are not guaranteed
                by the general descriptions on this Website.
              </p>
              <h3 className="font-bold text-navy-800 mb-2">6.3 Client Obligations</h3>
              <p className="mb-2">The Client agrees to:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1 mb-4">
                <li>Provide accurate and complete information necessary for us to deliver the Services</li>
                <li>Provide reasonable access to sites, systems, and personnel where required</li>
                <li>Make payment in accordance with agreed invoicing terms</li>
              </ul>
              <h3 className="font-bold text-navy-800 mb-2">6.4 Third-Party Products</h3>
              <p>
                Where Services involve the supply or configuration of third-party hardware or software, such
                products remain subject to the relevant manufacturer's or vendor's own warranties and licence terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">7. Fees and Payment</h2>
              <p className="mb-2">
                Fees for Services will be set out in the applicable quotation, order confirmation, or service
                agreement. Unless otherwise agreed in writing:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1">
                <li>Invoices are payable within <strong>[30]</strong> days of the invoice date</li>
                <li>Late payments may be subject to interest in accordance with the Late Payment of Commercial Debts (Interest) Act 1998, where applicable</li>
                <li>We reserve the right to suspend Services in the event of non-payment, subject to reasonable prior notice</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">8. Intellectual Property</h2>
              <h3 className="font-bold text-navy-800 mb-2">8.1 Website Content</h3>
              <p className="mb-4">
                All Content on this Website, including text, graphics, logos, and design, is owned by or licensed to
                Click Tzee Ltd and is protected by UK and international copyright and trade mark laws. You may view
                and print Website Content for personal, non-commercial reference only.
              </p>
              <h3 className="font-bold text-navy-800 mb-2">8.2 Restrictions</h3>
              <p className="mb-4">
                You may not reproduce, distribute, modify, or republish any Content from this Website without our
                prior written consent, except as permitted by law.
              </p>
              <h3 className="font-bold text-navy-800 mb-2">8.3 Client Materials</h3>
              <p>
                Any documentation, configurations, or deliverables created specifically for a Client as part of a
                paid engagement will be addressed in the applicable service agreement, which may grant the Client
                rights to use such materials for their internal business purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">9. Limitation of Liability</h2>
              <h3 className="font-bold text-navy-800 mb-2">9.1 General</h3>
              <p className="mb-2">Nothing in these Terms excludes or limits our liability for:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1 mb-4">
                <li>Death or personal injury caused by our negligence</li>
                <li>Fraud or fraudulent misrepresentation</li>
                <li>Any other liability which cannot be excluded or limited under English law</li>
              </ul>
              <h3 className="font-bold text-navy-800 mb-2">9.2 Website Use</h3>
              <p className="mb-4">
                To the fullest extent permitted by law, Click Tzee Ltd shall not be liable for any indirect,
                incidental, or consequential loss arising from your use of, or inability to use, this Website,
                including loss of profits, data, or business opportunity.
              </p>
              <h3 className="font-bold text-navy-800 mb-2">9.3 Service Liability</h3>
              <p className="mb-4">
                Our liability in connection with the provision of Services will be as set out in the applicable
                service agreement between Click Tzee Ltd and the Client, which will typically include a cap on
                liability and exclusions for indirect or consequential losses, in each case to the extent permitted
                by law.
              </p>
              <h3 className="font-bold text-navy-800 mb-2">9.4 Website Availability</h3>
              <p>
                We do not guarantee that this Website will be available uninterrupted or error-free. We may suspend,
                withdraw, or restrict availability of all or part of the Website for business or operational
                reasons, including maintenance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">10. Consumer Rights</h2>
              <p>
                If you are a consumer (rather than a business), nothing in these Terms affects your statutory rights
                under the <strong>Consumer Rights Act 2015</strong> or other applicable UK consumer protection
                legislation. Where our Services are provided under a distance contract (e.g. agreed remotely without
                face-to-face contact), you may have rights under the{' '}
                <strong>Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013</strong>,
                including a right to cancel within 14 days in certain circumstances, subject to the exceptions set
                out in those Regulations (for example, where you have requested Services to begin, and they have
                been fully performed, within the cancellation period).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">11. Links to Other Websites</h2>
              <p>
                This Website may contain links to third-party websites. We have no control over, and accept no
                responsibility for, the content, privacy policies, or practices of any third-party websites.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">12. Changes to These Terms</h2>
              <p>
                We may revise these Terms at any time by updating this page. Changes will apply to your use of the
                Website from the date of publication. Please check this page periodically for updates. Changes to
                terms governing an existing service engagement will be handled separately in accordance with the
                applicable service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">13. Governing Law and Jurisdiction</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of{' '}
                <strong>England and Wales</strong>. Any disputes arising in connection with these Terms or your use
                of the Website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">14. Severability</h2>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable by a court of competent
                jurisdiction, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">15. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy and any separately agreed service agreement,
                constitute the entire agreement between you and Click Tzee Ltd in relation to your use of the
                Website and/or our Services, and supersede any prior agreements or understandings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">16. Contact Us</h2>
              <p className="mb-2">If you have any questions about these Terms, please contact us at:</p>
              <p className="font-semibold text-navy-800">Click Tzee Ltd</p>
              <p>Address: 86-90 Paul Street London England EC2A 4NE United Kingdom</p>
    <li>
  <table>
    <tbody>
      <tr>
        <td>Email:</td>
        <td>info@clicktzee.com</td>
      </tr>
      <tr>
        <td></td>
        <td>hr@clicktzee.com</td>
      </tr>
      <tr>
        <td></td>
        <td>sales@clicktzee.com</td>
      </tr>
      <tr>
        <td></td>
        <td>accounts@clicktzee.com</td>
      </tr>
      <tr>
        <td></td>
        <td>manager@clicktzee.com</td>
      </tr>
    </tbody>
  </table>
</li>
              <p>Phone: [Insert Phone Number]</p>
            </div>

            <p className="text-xs text-navy-400 border-t border-navy-100 pt-6">
            
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TermsPage;