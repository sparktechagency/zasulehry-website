import { gradientClasses } from "@/styles/gradients";
import Container from "../Container";

const Impressum = () => {
  return (
    <div className={`${gradientClasses.primaryBg} py-16`}>
      {/* Header */}
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Impressum
          </h1>
        </div>

        <div className="bg-slate-800/50 rounded-lg p-8 md:p-10 text-gray-200 space-y-8">
          {/* Company Information Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Company Information
            </h2>
            <p className="mb-4">
              JobsinAPP GmbH
              <br />
              Musterstraße 123
              <br />
              10115 Berlin
              <br />
              Germany
            </p>
          </section>

          {/* Contact Details Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Contact Details
            </h2>
            <div className="space-y-4">
              <p>
                Phone: +49 30 1234567
                <br />
                Email:{" "}
                <span className="text-teal-400">JobsinAPP@Gmail.Com</span>
                <br />
                Website: www.jobsinapp.com
              </p>
            </div>
          </section>

          {/* Legal Representation Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Legal Representation
            </h2>
            <p>
              JobsinAPP GmbH is represented by its managing directors:
              <br />
              Max Mustermann
              <br />
              Anna Musterfrau
            </p>
          </section>

          {/* Business Registration Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Business Registration
            </h2>
            <p>
              Registered at the Commercial Register of the Local Court of
              Berlin-Charlottenburg
              <br />
              Registration Number: HRB 123456
            </p>
          </section>

          {/* VAT and Tax Information Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. VAT and Tax Information
            </h2>
            <p>
              VAT Identification Number according to § 27a of the German VAT
              Act:
              <br />
              DE123456789
            </p>
          </section>

          {/* Regulatory Authority Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Regulatory Authority
            </h2>
            <p>
              The responsible regulatory authority for JobsinAPP GmbH is:
              <br />
              Landesamt für Bürger- und Ordnungsangelegenheiten
              <br />
              Friedrichstraße 219
              <br />
              10969 Berlin
            </p>
          </section>

          {/* Disclaimer and Liability Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. Disclaimer and Liability
            </h2>
            <p className="mb-4">
              Despite careful content control, we assume no liability for the
              content of external links. The operators of the linked pages are
              solely responsible for their content.
            </p>
            <p>
              All information on this website is provided without guarantee. We
              reserve the right to change, supplement, or delete parts of the
              pages or the entire offer without special notice.
            </p>
          </section>

          {/* Copyright Information Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. Copyright Information
            </h2>
            <p>
              The content and works created by the site operators on these pages
              are subject to German copyright law. Duplication, processing,
              distribution, and any kind of exploitation outside the limits of
              copyright law require the written consent of the respective author
              or creator.
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

export default Impressum;
