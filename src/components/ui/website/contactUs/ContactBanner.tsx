import { gradientClasses } from "@/styles/gradients";
import Container from "../../Container";

const ContactBanner = () => {
  return (
    <div className={`${gradientClasses.primaryBg} py-2`}>
      <Container>
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Connect And Collaborate
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Reach Out To Our Team For Inquiries, Support, Or Partnership
            Opportunities. We&apos;re Here To Help
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ContactBanner;
