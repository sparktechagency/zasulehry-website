import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Effortless Hiring, Every Time, Very Easy.",
      description:
        "We Use AI Technology To Find A Perfect Match. We Offer Free Services And Free Job Posting For Everyone. Post Jobs, Manage Applications, And Connect With Top Talent — All In One Simple, Intuitive Platform. No More Juggling Multiple Tools.",
    },
    {
      id: 2,
      title: "Reach The Right Candidates Fast",
      description:
        "Our Advanced Matching Algorithms And Wide Network Ensure Your Job Posts Get Seen By Qualified Candidates Who Fit Your Needs.",
    },
    {
      id: 3,
      title: "Flexible Plans For Every Business",
      description:
        "Whether You're A Startup Or A Large Enterprise, Our Subscription Tiers Grow With You — Only Pay For What You Actually Need.",
    },
    {
      id: 4,
      title: "Insightful Analytics",
      description:
        "Track The Performance Of Your Job Posts And Make Smarter Hiring Decisions With Data-Driven Insights.",
    },
    {
      id: 5,
      title: "Support You Can Count On",
      description:
        "Our Friendly Support Team Is Here Whenever You Need Guidance, From Posting Jobs To Onboarding New Talent.",
    },
  ];

  return (
    <section className="bg-[#2A3B4F] py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
          Why Choose Us?
        </h2>

        <div className="space-y-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#FFFFFF1A] border border-[#FFFFFF1B] rounded-lg p-6 flex items-start gap-4"
            >
              <div className="text-[#4cd5c5] text-xl mt-1">
                <FaCheckCircle />
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

export default WhyChooseUs;
