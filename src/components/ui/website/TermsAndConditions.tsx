import Container from "../Container";

const TermsAndConditions = () => {
  return (
    <div className={`bg-[#2C3E50] py-16`}>
      {/* Header */}
      <Container>
        <div className="bg-[#FFFFFF1A] border border-[#FFFFFF1A] rounded-lg p-8 md:p-10 text-gray-200 space-y-8">
          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Introduction
            </h2>
            <p className="mb-4">
              Welcome to JobsinAPP! These Terms and Conditions govern your use
              of our mobile application (&quot;App&quot;) and the services
              provided through it. By accessing or using our App, you agree to
              be bound by these Terms. If you disagree with any part of these
              Terms, you may not access or use our App.
            </p>
          </section>

          {/* Acceptance of Terms Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Acceptance of Terms
            </h2>
            <p>
              By creating an account, downloading, accessing, or using our App,
              you acknowledge that you have read, understood, and agree to be
              bound by these Terms. If you are using the App on behalf of a
              company or other legal entity, you represent that you have the
              authority to bind such entity to these Terms.
            </p>
          </section>

          {/* User Accounts Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. User Accounts
            </h2>
            <div className="space-y-4">
              <p>
                To use certain features of our App, you may be required to
                register for an account. You agree to provide accurate, current,
                and complete information during the registration process and to
                update such information to keep it accurate, current, and
                complete.
              </p>
              <p>
                You are responsible for safeguarding the password that you use
                to access the App and for any activities or actions under your
                password. We encourage you to use a strong password and to sign
                out from your account at the end of each session.
              </p>
            </div>
          </section>

          {/* Eligibility Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Eligibility
            </h2>
            <p>
              You must be at least 18 years old to use our App. By using our
              App, you represent and warrant that you are at least 18 years of
              age and have the legal capacity to enter into these Terms. If you
              are using the App on behalf of a minor, you must be their legal
              guardian and you accept these Terms on their behalf.
            </p>
          </section>

          {/* Service Usage Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Service Usage
            </h2>
            <p className="mb-4">
              Our App provides a platform for connecting job seekers with
              potential employers. You agree to use our services only for lawful
              purposes and in accordance with these Terms. You are responsible
              for all content you post, upload, or otherwise transmit through
              our App.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue the App or
              any service, content, feature, or product offered through the App,
              at any time and without notice, without liability to you.
            </p>
          </section>

          {/* Prohibited Activities Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Prohibited Activities
            </h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use the App in any way that violates any applicable law or
                regulation
              </li>
              <li>
                Impersonate any person or entity or falsely state or
                misrepresent your affiliation with a person or entity
              </li>
              <li>
                Interfere with or disrupt the App or servers or networks
                connected to the App
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the App or
                any other systems or networks
              </li>
              <li>
                Use the App to send unsolicited or unauthorized advertising or
                promotional material
              </li>
              <li>
                Collect or store personal data about other users without their
                consent
              </li>
            </ul>
          </section>

          {/* Intellectual Property Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. Intellectual Property
            </h2>
            <p>
              The App and its original content, features, and functionality are
              and will remain the exclusive property of JobsinAPP and its
              licensors. The App is protected by copyright, trademark, and other
              laws. Our trademarks and trade dress may not be used in connection
              with any product or service without the prior written consent of
              JobsinAPP.
            </p>
          </section>

          {/* Termination Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. Termination
            </h2>
            <p>
              We may terminate or suspend your account and bar access to the App
              immediately, without prior notice or liability, under our sole
              discretion, for any reason whatsoever, including but not limited
              to a breach of these Terms. If you wish to terminate your account,
              you may simply discontinue using the App or contact us to request
              account deletion.
            </p>
          </section>

          {/* Limitation of Liability Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              9. Limitation of Liability
            </h2>
            <p>
              In no event shall JobsinAPP, its directors, employees, partners,
              agents, suppliers, or affiliates, be liable for any indirect,
              incidental, special, consequential or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your access to or use of or
              inability to access or use the App.
            </p>
          </section>

          {/* Governing Law Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              10. Governing Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws applicable in your jurisdiction, without regard to its
              conflict of law provisions. Our failure to enforce any right or
              provision of these Terms will not be considered a waiver of those
              rights.
            </p>
          </section>

          {/* Changes to Terms Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              11. Changes to Terms
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. We will provide notice of any changes by
              posting the new Terms on this page and updating the &quot;Last
              Updated&quot; date. Your continued use of the App after any such
              changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          {/* Contact Us Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              12. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us at:{" "}
              <span className="text-teal-400">JobsinAPP@Gmail.Com</span>
            </p>
          </section>

          {/* Last Updated */}
          <div className="pt-4 border-t border-slate-700">
            <p className="text-sm text-gray-400">
              Last Updated: November 15, 2023
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
