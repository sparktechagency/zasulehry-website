import Container from "../Container";

const PrivacyPolicy = () => {
  return (
    <div className={`bg-[#2C3E50] py-16`}>
      {/* Header */}
      <Container>
        <div className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] rounded-lg p-8 md:p-10 text-gray-200 space-y-8">
          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Introduction
            </h2>
            <p className="mb-4">
              Welcome To Service Ware! This Privacy Policy Explains How We
              Collect, Use, Disclose, And Protect Your Information When You Use
              Our Mobile Application (&quot;App&quot;). By Using Our App, You
              Agree To The Collection And Use Of Your Data In Accordance With
              This Privacy Policy.
            </p>
          </section>

          {/* Information We Collect Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Personal Information:
                </h3>
                <p>
                  When You Register Or Use Our App, We May Collect Personal
                  Details Such As Your Name, Email Address, Phone Number, And
                  Payment Details.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Usage Data:
                </h3>
                <p>
                  We Collect Data About How You Interact With Our App, Including
                  Pages Visited, Time Spent, And Service Requests
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">We Use The Information We Collect To:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, Maintain, And Improve Our Services</li>
              <li>Process Transactions And Send Related Information</li>
              <li>Send You Technical Notices, Updates, And Support Messages</li>
              <li>Respond To Your Comments And Questions</li>
              <li>Develop New Products And Services</li>
              <li>Monitor And Analyze Trends And Usage</li>
            </ul>
          </section>

          {/* Information Sharing Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Information Sharing
            </h2>
            <p className="mb-4">We May Share Your Information With:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service Providers Who Perform Services On Our Behalf</li>
              <li>
                Business Partners With Whom We Jointly Offer Products Or
                Services
              </li>
              <li>
                Law Enforcement Or Other Third Parties In Response To Legal
                Process
              </li>
            </ul>
          </section>

          {/* Data Security Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Data Security
            </h2>
            <p>
              We Implement Appropriate Technical And Organizational Measures To
              Protect Your Personal Information Against Unauthorized Access,
              Accidental Loss, Or Damage. However, We Cannot Guarantee The
              Security Of Information Transmitted To Our App.
            </p>
          </section>

          {/* Your Rights Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Your Rights
            </h2>
            <p className="mb-4">
              Depending On Your Location, You May Have The Right To:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access The Personal Information We Hold About You</li>
              <li>Request Correction Of Inaccurate Information</li>
              <li>Request Deletion Of Your Information</li>
              <li>Object To Our Processing Of Your Information</li>
              <li>Request Restriction Of Processing</li>
              <li>Data Portability</li>
            </ul>
          </section>

          {/* Changes To This Policy Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. Changes To This Policy
            </h2>
            <p>
              We May Update This Privacy Policy From Time To Time. We Will
              Notify You Of Any Changes By Posting The New Privacy Policy On
              This Page And Updating The &quot;Last Updated&quot; Date.
            </p>
          </section>

          {/* Contact Us Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. Contact Us
            </h2>
            <p>
              If You Have Any Questions About This Privacy Policy, Please
              Contact Us At:{" "}
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

export default PrivacyPolicy;
