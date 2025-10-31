import Image from "next/image";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import jobSearchingImg from "@/assets/banner/bannerBg.png";
import qrCode from "@/assets/jobSearchingHome/jobSearchingQR.png";
import { gradientClasses } from "@/styles/gradients";

const JobSearching = () => {
  return (
    <section className={`${gradientClasses.primaryBg} py-16 px-4`}>
      <div className="container mx-auto max-w-6xl">
        {/* Heading and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Job Searching
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore Thousands Of Opportunities Across Industries.
            <br />
            Build Your Profile, Upload Your Resume, And Let Top Employers Find
            You.
            <br />
            You Can Download Our Mobile App To Use A Lot Of Services For Free.
          </p>
        </div>

        {/* Mobile App and Download Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-20">
          {/* Mobile App Mockup */}
          <div className="w-full lg:w-3/5">
            <Image
              src={jobSearchingImg}
              alt="Mobile App Mockup"
              className="w-full scale-125 h-auto"
              priority
            />
          </div>

          {/* Download Section */}
          <div className="w-full lg:w-2/5 text-white">
            <h3 className="text-2xl font-bold text-[#D259D3] mb-4">
              Download Our App
            </h3>

            <p className="mb-6 w-[80%]">
              Scan The QR Code To Download Our Mobile App And Access All
              Features On The Go.
            </p>

            {/* QR Codes */}
            <div className="flex justify-center lg:justify-start gap-8 mb-8">
              <div className="text-center">
                <div className="bg-white p-2 rounded-lg mb-2">
                  <Image
                    src={qrCode}
                    alt="Android QR Code"
                    width={120}
                    height={120}
                  />
                </div>
                <span>Play Store</span>
              </div>

              <div className="text-center">
                <div className="bg-white p-2 rounded-lg mb-2">
                  <Image
                    src={qrCode}
                    alt="Apple QR Code"
                    width={120}
                    height={120}
                  />
                </div>
                <span>Apple Store</span>
              </div>
            </div>

            {/* CTA Buttons */}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center sm:flex-row gap-4">
          <button
            style={{ boxShadow: "0 0 10px 0 #B1F1FF inset" }}
            className={`${gradientClasses.primaryBg} px-8 py-3 flex items-center justify-center gap-2 rounded-md hover:opacity-90 transition-all cursor-pointer`}
          >
            <FaDownload /> Download Mobile App
          </button>

          <button
            style={{ boxShadow: "0 0 10px 0 #B1F1FF inset" }}
            className={`${gradientClasses.primaryBg} px-8 py-3 flex items-center justify-center gap-2 rounded-md hover:opacity-90 transition-all cursor-pointer`}
          >
            Start Hiring Now <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobSearching;
