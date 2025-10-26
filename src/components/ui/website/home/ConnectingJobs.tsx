import Image from "next/image";
import connectingImg from "@/assets/connectingJobImg.png";

const ConnectingJobs = () => {
  return (
    <section className="bg-[#2A3B4F] py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Connecting Jobs & Talent For No Cost
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Column */}
          <div className="w-full md:w-1/2">
            <div className="bg-white p-4 rounded-tr-4xl rounded-bl-4xl">
              <Image
                src={connectingImg}
                alt="Are You Ready?"
                className="w-full h-[300px] object-contain"
                priority
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2 text-white">
            <h3 className="text-2xl font-bold mb-4">Job Posting</h3>

            <p className="mb-4">
              Create Job Postings In Minutes. Reach Thousands Of Qualified
              Candidates, And Manage Applications Effortlessly.
            </p>

            <p className="mb-4">
              Our Tools Help You Shortlist The Best Talent With Built-In
              Filtering, Messaging, And Analytics.
            </p>

            <p className="mb-4">
              You Can Use A Lot Of Services On Our Platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectingJobs;
