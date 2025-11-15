import Image from "next/image";
import Container from "../../Container";
import { gradientClasses } from "@/styles/gradients";
import Link from "next/link";

const AboutUsBanner = () => {
  return (
    <div className={`${gradientClasses.primaryBg} py-16 md:py-24`}>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Empowering Connections.
              <br className="hidden sm:block" />
              Simplifying Employment.
            </h1>
            <p className="text-sm mb-6 sm:mb-8 opacity-90">
              JobsinApp is A Dynamic Service Platform Designed To Bridge The Gap
              Between Employers And Job Seekers. Whether You&apos;re Looking To
              Hire Skilled Professionals Or Searching For Your Next Opportunity,
              JobsinApp Makes The Process Fast, Transparent, And User-Friendly
            </p>
            <Link
              href="/contact"
              className={`${gradientClasses.buttonBg} text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-md transition duration-300 inline-block`}
            >
              Contact Now
            </Link>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://plus.unsplash.com/premium_photo-1700675175397-7cc710d56e11?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
              alt="Career growth illustration"
              width={500}
              height={500}
              className="w-full h-auto rounded-tr-4xl rounded-bl-4xl"
              priority
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsBanner;
