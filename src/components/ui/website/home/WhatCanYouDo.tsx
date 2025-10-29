import Container from "@/components/ui/Container";
import {
  FaUser,
  FaChartLine,
  FaEye,
  FaPaperPlane,
  FaRobot,
  FaCalendarAlt,
  FaWhatsapp,
  FaUserTie,
  FaCalculator,
  FaComments,
  FaUsers,
} from "react-icons/fa";
import Button from "../../Button";

const WhatCanYouDo = () => {
  const features = [
    {
      icon: <FaUser className="text-pink-400" />,
      text: "Create Your Profile With Your Own Logo",
    },
    {
      icon: <FaChartLine className="text-teal-400" />,
      text: "You Have Your Own Dashboard",
    },
    {
      icon: <FaEye className="text-pink-400" />,
      text: "See Your Posted Jobs",
    },
    {
      icon: <FaPaperPlane className="text-teal-400" />,
      text: "You Can Post Jobs",
    },
    {
      icon: <FaRobot className="text-pink-400" />,
      text: "You can use many AI Tools",
    },
    {
      icon: <FaCalendarAlt className="text-teal-400" />,
      text: "You Can Manage Your Appointments",
    },
    {
      icon: <FaWhatsapp className="text-pink-400" />,
      text: "You Can Use Whatsapp Support To Communicate With JobsinApp Team",
    },
    {
      icon: <FaWhatsapp className="text-teal-400" />,
      text: "You Can Add A Whatsapp Link To Communicate With Candidates",
    },
    {
      icon: <FaUserTie className="text-pink-400" />,
      text: "You Can Order A Worker From JobsinApp Platform",
    },
    {
      icon: <FaUsers className="text-teal-400" />,
      text: "You Can Manage Shiftplans For Your Workers",
    },
    {
      icon: <FaCalculator className="text-pink-400" />,
      text: "You Can Calculate The Salary",
    },
    {
      icon: <FaComments className="text-teal-400" />,
      text: "You Can Subscribe For JobsinApp To Use A Lot Of Services Including Candidate Matching",
    },
  ];

  return (
    <section className="bg-[#2C3E50] py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            What You Can Do On JobsinAppp{" "}
            <span className="text-teal-400">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-4 rounded-md hover:shadow-md transition-shadow duration-300"
            >
              <div className="shrink-0 w-8 h-8 flex items-center justify-center">
                {feature.icon}
              </div>
              <p className="text-white text-sm md:text-base">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            href="/jobs/post"
            variant="glass"
            className="px-8 py-3 rounded-md hover:opacity-90 transition-all inline-block"
          >
            Start Posting Now
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default WhatCanYouDo;
