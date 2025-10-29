import { gradientClasses } from "@/styles/gradients";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import bannerBg from "@/assets/banner/bannerBg.png";
import googlePlay from "@/assets/banner/googlePlayLogo.png";
import applePlay from "@/assets/banner/appleLogo.png";

const Banner = () => {
  return (
    <section
      className={`${gradientClasses.primaryBg} w-full py-24 flex items-center justify-center`}
    >
      <Container className="md:flex flex-col lg:flex-row items-center justify-between">
        {/* Left content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-3xl md:text-5xl lg:text-5xl text-white mb-4 leading-tight">
            Next-Level
            <br />
            Recruitment With
            <br />
            <span className="text-[#FF69B4] md:text-6xl font-bold">
              AI Technology
            </span>
          </h1>
          <p className="text-white/90 mb-8 max-w-lg text-base md:text-lg">
            Our AI Doesn&apos;t Just Track Applicants — It
            <br />
            Intelligently Matches The Right Talent To Your
            <br />
            Roles.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/hiring"
              className={`${gradientClasses.buttonBg} text-white font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition-all`}
            >
              Start Hiring Now
            </Link>
            <Link
              href="/jobs"
              className={`${gradientClasses.buttonBg} text-white font-medium px-6 py-3 rounded-md hover:bg-[#2A7D7D]/30 transition-all`}
            >
              Find Job
            </Link>
          </div>
        </div>

        {/* Right content - Mobile app mockup */}
        <div className="lg:w-1/2 relative flex flex-col">
          <div className="">
            <Image
              src={bannerBg}
              alt="Mobile App Mockup"
              width={765546300}
              height={6754646600}
              className="h-full w-full pt-20"
            />
          </div>
          <div className="md:flex gap-5 md:absolute md:-top-3 md:right-10">
            <h1 className="md:text-2xl text-xl font-bold text-white mb-6 text-center lg:text-left">
              Download Our Mobile App
            </h1>
            <div className="flex flex-col gap-2">
              <Link href="">
                <div className="flex bg-white rounded-sm py-1 px-3 items-center justify-center gap-2">
                  <Image
                    src={googlePlay}
                    alt="Google Play"
                    width={24}
                    height={24}
                  />
                  <div>
                    <p className="text-black text-sm">get the app on</p>
                    <p className="text-[#2A7D7D] text-md">Google Play</p>
                  </div>
                </div>
              </Link>
              <Link href="">
                <div className="flex bg-white rounded-sm py-1 px-2 items-center justify-center gap-2">
                  <Image
                    src={applePlay}
                    alt="Apple Store"
                    width={24}
                    height={24}
                  />
                  <div>
                    <p className="text-black text-sm">Download on</p>
                    <p className="text-[#2A7D7D] text-md">Apple Store</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
