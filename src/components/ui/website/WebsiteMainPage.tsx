import { myFetch } from "@/utils/myFetch";
import Banner from "./home/banner/Banner";
import ConnectingJobs from "./home/ConnectingJobs";
import JobSearching from "./home/JobSearching";
import ModernWarkforce from "./home/ModernWarkforce";
import NeedHelp from "./home/NeedHelp";
import RecentJobs from "./home/recentJobs/RecentJobs";
import StartFree from "./home/StartFree";
import WhatCanYouDo from "./home/WhatCanYouDo";
import WhyChooseUs from "./home/WhyChooseUs";
import WhyNotOthers from "./home/WhyNotOthers";

const WebsiteMainPage = async ({ contactInfo }: { contactInfo?: any }) => {
  let jobs = [];
  let categories = [];

  const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://10.10.7.7:5000/api/v1";
  const hostUrl = apiBaseUrl.split("/api")[0];

  try {
    // 1. Fetch Categories
    const catResponse = await myFetch("/categories");
    if (catResponse && catResponse.success && Array.isArray(catResponse.data)) {
      categories = catResponse.data;
    }

    // 2. Fetch Recent Jobs
    const response = await myFetch("/jobs/public?limit=10");

    if (response && response.success && Array.isArray(response.data)) {
      jobs = response.data.map((item: any) => {
        const createdDate = new Date(item.createdAt);
        const currentDate = new Date();
        const diffTime = Math.max(
          0,
          currentDate.getTime() - createdDate.getTime(),
        );
        const postedDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        return {
          id: item._id,
          position: item.subCategory || item.category || "Untitled Job",
          company: item.author?.name || "Sparktech Agency",
          location: item.author?.address || "N/A",
          salary: item.salaryAmount
            ? `$${item.salaryAmount}/${item.salaryType || "Month"}`
            : "Negotiable",
          type: item.jobType || "Full Time",
          postedDays: postedDays,
          coordinates: item?.location?.coordinates || null,
          image: item.author?.image
            ? item.author.image.startsWith("http")
              ? item.author.image
              : `${hostUrl}${item.author.image}`
            : "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=320&h=160&q=80",
        };
      });
    }
  } catch (error) {
    console.error("Error fetching jobs in WebsiteMainPage:", error);
  }

  return (
    <div>
      <Banner />
      <RecentJobs initialJobs={jobs} categories={categories} />
      <ModernWarkforce />
      <StartFree />
      <WhyChooseUs />
      <WhyNotOthers />
      <ConnectingJobs />
      <WhatCanYouDo />
      <JobSearching />
      <NeedHelp contactInfo={contactInfo} />
    </div>
  );
};

export default WebsiteMainPage;
