import React from 'react';
import MainLayout from '../layouts/MainLayout';

const PrivacyPolicyPage = () => {
  return (
    <MainLayout>
      <section className="section">
        <div className="container-page max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-navy-400 mb-10">Last updated: 01 September 2026</p>

          <div className="flex flex-col gap-10 text-navy-600 leading-relaxed text-sm">

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">1. Who We Are</h2>
              <p className="mb-3">
                This website is operated by <strong>Click Tzee Ltd</strong> ("we", "us", "our"), a company registered
                in England and Wales under company number <strong>13879140</strong>, with our
                registered office at <strong>86-90 Paul Street London England EC2A 4NE United Kingdom</strong>.
              </p>
              <p className="mb-3">
                We are the data controller responsible for your personal data in connection with this website and
                our services.
              </p>
              <p className="font-semibold text-navy-800 mb-2">Contact details:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1">
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
                <li>Post: 86-90 Paul Street London England EC2A 4NE United Kingdom</li>
                
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">2. What This Policy Covers</h2>
              <p className="mb-3">
                This Privacy Policy explains how Click Tzee Ltd collects, uses, stores, shares and protects your
                personal data when you:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1 mb-3">
                <li>Visit our website</li>
                <li>Submit an enquiry through our contact form</li>
                <li>Register for and use a client account</li>
                <li>Submit or manage a service request</li>
                <li>Otherwise interact with us in connection with our IT services</li>
              </ul>
              <p>
                This policy is provided in accordance with the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and
                the <strong>Data Protection Act 2018</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">3. Information We Collect</h2>
              <h3 className="font-bold text-navy-800 mb-2">3.1 Information you provide to us directly</h3>
              <ul className="list-disc pl-5 flex flex-col gap-1 mb-4">
                <li><strong>Contact form / enquiries:</strong> full name, company name, email address, phone number, service of interest, and the content of your message</li>
                <li><strong>Account registration:</strong> full name, email address, password (stored in hashed/encrypted form), company name, phone number</li>
                <li><strong>Service requests:</strong> details of the service requested and any description you provide</li>
                <li><strong>Communications:</strong> any information you provide when you contact us by email, phone, or otherwise</li>
              </ul>
              <h3 className="font-bold text-navy-800 mb-2">3.2 Information collected automatically</h3>
              <ul className="list-disc pl-5 flex flex-col gap-1 mb-3">
                <li><strong>Technical data:</strong> IP address, browser type and version, device information, operating system, referral source</li>
                <li><strong>Usage data:</strong> pages visited, time spent on pages, links clicked, and other analytics data (where analytics tools are enabled)</li>
                <li><strong>Cookies:</strong> see Section 9 (Cookies) below</li>
              </ul>
              <p>
                We do not knowingly collect any special category data (e.g. health, religion, ethnicity) through
                this website, and we ask that you do not submit such information via our forms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">4. How We Use Your Information and Our Legal Basis</h2>
              <p className="mb-4">
                We only use your personal data where we have a valid legal basis to do so under UK GDPR. The table
                below sets out our purposes and legal bases:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-navy-100 rounded-lg overflow-hidden">
                  <thead className="bg-navy-50 text-navy-700">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold">Purpose</th>
                      <th className="text-left px-4 py-3 font-semibold">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-100">
                    <tr><td className="px-4 py-3">Responding to your enquiry or quote request</td><td className="px-4 py-3">Legitimate interests / Steps taken prior to entering a contract</td></tr>
                    <tr><td className="px-4 py-3">Creating and managing your client account</td><td className="px-4 py-3">Performance of a contract with you</td></tr>
                    <tr><td className="px-4 py-3">Processing and tracking your service requests</td><td className="px-4 py-3">Performance of a contract with you</td></tr>
                    <tr><td className="px-4 py-3">Sending service-related communications (e.g. status updates)</td><td className="px-4 py-3">Performance of a contract / Legitimate interests</td></tr>
                    <tr><td className="px-4 py-3">Improving our website and services</td><td className="px-4 py-3">Legitimate interests</td></tr>
                    <tr><td className="px-4 py-3">Complying with legal or regulatory obligations</td><td className="px-4 py-3">Legal obligation</td></tr>
                    <tr><td className="px-4 py-3">Sending marketing communications (only where opted in)</td><td className="px-4 py-3">Consent</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">5. Sharing Your Information</h2>
              <p className="mb-3">We do not sell your personal data. We may share your information with:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1 mb-3">
                <li><strong>Service providers</strong> who support our operations, such as hosting providers, database providers (e.g. MongoDB Atlas), and email delivery services, under appropriate data processing agreements</li>
                <li><strong>Professional advisers</strong> such as accountants, auditors, or legal advisers, where necessary</li>
                <li><strong>Regulatory or law enforcement authorities</strong>, where we are legally required to do so</li>
                <li><strong>A buyer or successor</strong>, in the event of a sale, merger, or restructuring of our business, subject to appropriate confidentiality safeguards</li>
              </ul>
              <p>We do not share your personal data with third parties for their own marketing purposes.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">6. International Data Transfers</h2>
              <p>
                Where any of our service providers store or process data outside the UK or European Economic Area
                (EEA), we ensure appropriate safeguards are in place, such as the UK's International Data Transfer
                Agreement (IDTA), Standard Contractual Clauses, or reliance on an adequacy decision, in accordance
                with UK GDPR requirements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">7. Data Retention</h2>
              <p className="mb-3">
                We retain personal data only for as long as necessary for the purposes set out in this policy,
                including to satisfy any legal, accounting, or reporting requirements. Specifically:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1 mb-3">
                <li><strong>Enquiry data:</strong> retained for up to [12/24] months from the date of your last contact, unless a longer period is required by law</li>
                <li><strong>Account data:</strong> retained for as long as your account remains active, and for a reasonable period thereafter, or as required for legal purposes</li>
                <li><strong>Service request records:</strong> retained in line with our standard business record-keeping requirements, typically [6 years] to align with UK statutory limitation periods</li>
              </ul>
              <p>When personal data is no longer required, we securely delete or anonymise it.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">8. Your Rights</h2>
              <p className="mb-3">Under UK GDPR, you have the following rights in relation to your personal data:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1 mb-4">
                <li><strong>Right of access</strong> – to request a copy of the personal data we hold about you</li>
                <li><strong>Right to rectification</strong> – to request correction of inaccurate or incomplete data</li>
                <li><strong>Right to erasure</strong> – to request deletion of your data in certain circumstances</li>
                <li><strong>Right to restrict processing</strong> – to request that we limit how we use your data</li>
                <li><strong>Right to data portability</strong> – to receive your data in a structured, machine-readable format</li>
                <li><strong>Right to object</strong> – to object to processing based on legitimate interests or for direct marketing</li>
                <li><strong>Rights related to automated decision-making</strong> – we do not currently use automated decision-making or profiling that produces legal or similarly significant effects on you</li>
              </ul>
              <p className="mb-3">
                To exercise any of these rights, please contact us using the details in Section 1. We will respond
                within one month, as required by law.
              </p>
              <p>
                You also have the right to lodge a complaint with the <strong>Information Commissioner's Office (ICO)</strong>,
                the UK's data protection regulator: website{' '}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-accent-700 underline">ico.org.uk</a>,
                helpline 0303 123 1113.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">9. Cookies</h2>
              <p className="mb-3">
                Our website may use cookies and similar technologies to operate correctly, remember your
                preferences, and understand how visitors use the site.
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1 mb-3">
                <li><strong>Strictly necessary cookies:</strong> required for the website to function (e.g. keeping you logged in to your account). These do not require consent.</li>
                <li><strong>Analytics/performance cookies:</strong> used to understand website usage (only used where consent has been given, if applicable).</li>
              </ul>
              <p>
                You can control or delete cookies through your browser settings. Disabling certain cookies may
                affect the functionality of the website, particularly account login and dashboard features.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">10. Data Security</h2>
              <p className="mb-3">
                We implement appropriate technical and organisational measures to protect your personal data,
                including:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1 mb-3">
                <li>Encryption of passwords using industry-standard hashing (bcrypt)</li>
                <li>Secure authentication using JSON Web Tokens (JWT)</li>
                <li>Role-based access controls restricting access to personal data on a need-to-know basis</li>
                <li>Secure hosting infrastructure with access controls and monitoring</li>
              </ul>
              <p>
                While we take reasonable steps to protect your data, no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">11. Children's Privacy</h2>
              <p>
                Our website and services are intended for business use and are not directed at children. We do not
                knowingly collect personal data from individuals under the age of 18. If you believe a child has
                provided us with personal data, please contact us so we can take appropriate action.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for
                legal, operational, or regulatory reasons. Any updates will be posted on this page with a revised
                "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">13. Contact Us</h2>
              <p className="mb-2">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal
                data, please contact us at:
              </p>
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

export default PrivacyPolicyPage;