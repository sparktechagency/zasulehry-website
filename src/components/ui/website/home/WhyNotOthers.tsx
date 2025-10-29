import { FaTimes } from "react-icons/fa";

const WhyNotOthers = () => {
  const features = [
    {
      id: 1,
      title: "No Hidden Fees Or Complicated Pricing",
      description:
        "Unlike Some Platforms, We Keep Pricing Transparent And Simple — You Always Know What You're Paying For.",
    },
    {
      id: 2,
      title: "No Overcrowded Job Boards",
      description:
        "Many Platforms Get Lost In The Noise. We Focus On Quality Over Quantity, Connecting You With Candidates Who Matter.",
    },
    {
      id: 3,
      title: "No Extra Tools Needed",
      description:
        "No Need To Juggle Multiple Apps Or Integrations — Everything You Need For Hiring Is Already Built In.",
    },
    {
      id: 4,
      title: "No Waiting, No Delays",
      description:
        "Instant Job Posting And Application Tracking Means You Can Move Faster Than On Traditional Platforms.",
    },
  ];

  return (
    <section className="bg-[#2C3E50] py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
          Why Not Others?
        </h2>

        <div className="space-y-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] rounded-lg p-6 flex items-start gap-4"
            >
              <div className="bg-red-500 rounded-full p-1 text-white text-sm mt-1">
                <FaTimes />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-1">
                  {feature.id}. {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNotOthers;
