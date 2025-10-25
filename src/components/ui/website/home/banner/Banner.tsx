import { gradientClasses } from "@/styles/gradients";
import Image from "next/image";
import Link from "next/link";
import bannerBg from "@/assets/banner/bannerBg.png";
import googlePlay from "@/assets/banner/googlePlayLogo.png";
import applePlay from "@/assets/banner/appleLogo.png";

const Banner = () => {
  return (
    <section
      className={`${gradientClasses.primaryBg} w-full h-[900px] py-16 flex items-center justify-center`}
    >
      {/* Use max-w-7xl to match standard navbar width and mx-auto to center */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Left content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Next-Level
            <br />
            Recruitment With
            <br />
            <span className="text-[#FF69B4] font-bold">AI Technology</span>
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
              className="bg-[#2A7D7D] text-white font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition-all"
            >
              Start Hiring Now
            </Link>
            <Link
              href="/jobs"
              className="bg-[#2A7D7D]/20 border border-[#2A7D7D]/30 text-white font-medium px-6 py-3 rounded-md hover:bg-[#2A7D7D]/30 transition-all"
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
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex gap-5 absolute -top-20 right-0">
            <h1 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">
              Download Our Mobile App
            </h1>
            <div className="flex flex-col gap-4">
              <Link href="">
                <div className="flex bg-white rounded-lg py-3 px-5 items-center justify-center gap-2">
                  <Image
                    src={googlePlay}
                    alt="Google Play"
                    width={24}
                    height={24}
                  />
                  <div>
                    <p className="text-black font-medium">get the app on</p>
                    <p className="text-[#2A7D7D] font-medium">Google Play</p>
                  </div>
                </div>
              </Link>
              <Link href="">
                <div className="flex bg-white rounded-lg py-3 px-5 items-center justify-center gap-2">
                  <Image
                    src={applePlay}
                    alt="Apple Store"
                    width={24}
                    height={24}
                  />
                  <div>
                    <p className="text-black font-medium">Download on</p>
                    <p className="text-[#2A7D7D] font-medium">Apple Store</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
