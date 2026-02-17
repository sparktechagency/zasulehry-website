import Impressum from "@/components/ui/website/Impressum";
import { gradientClasses } from "@/styles/gradients";

import { myFetch } from "@/utils/myFetch";

const page = async () => {
  let content = "";
  let lastUpdated = "";

  try {
    const response = await myFetch("/disclaimers/impressum");
    if (response && response.success && response.data) {
      content = response.data.content;
      lastUpdated = response.data.updatedAt;
    }
  } catch (error) {
    console.error("Error fetching impressum:", error);
  }

  return (
    <div>
      <div className={` ${gradientClasses.primaryBg} py-5 text-center`}>
        <h1 className="text-4xl md:text-5xl font-bold mb-14 text-white">
          Impressum
        </h1>
      </div>
      <Impressum content={content} lastUpdated={lastUpdated} />
    </div>
  );
};

export default page;
