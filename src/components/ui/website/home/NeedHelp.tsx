import { FaPhone, FaEnvelope, FaCommentDots } from "react-icons/fa";
import Link from "next/link";

const NeedHelp = () => {
  return (
    <section className="bg-[#2A3B4F] py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          You Need Help
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {/* Phone Contact */}
          <div className="flex flex-col items-center">
            <div className="bg-[#4361EE] p-4 rounded-full mb-3">
              <FaPhone className="text-white text-xl" />
            </div>
            <h3 className="text-white font-medium mb-1">Phone</h3>
            <p className="text-gray-300 text-sm">+1 234 567 890</p>
          </div>

          {/* Email Contact */}
          <div className="flex flex-col items-center">
            <div className="bg-[#16A249] p-4 rounded-full mb-3">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <h3 className="text-white font-medium mb-1">Email</h3>
            <p className="text-gray-300 text-sm">Support@JobsInapp.Com</p>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col items-center">
            <div className="bg-[#9D4EDD] p-4 rounded-full mb-3">
              <FaCommentDots className="text-white text-xl" />
            </div>
            <h3 className="text-white font-medium mb-1">Contact Form</h3>
            <Link
              href="#"
              className="bg-gray-700 hover:bg-gray-600 text-white text-sm py-1 px-4 rounded-md transition-colors mt-1"
            >
              Send Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedHelp;
