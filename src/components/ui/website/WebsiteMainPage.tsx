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

const WebsiteMainPage = () => {
  return (
    <div>
      <Banner />
      <RecentJobs />
      <ModernWarkforce />
      <StartFree />
      <WhyChooseUs />
      <WhyNotOthers />
      <ConnectingJobs />
      <WhatCanYouDo />
      <JobSearching />
      <NeedHelp />
    </div>
  );
};

export default WebsiteMainPage;
