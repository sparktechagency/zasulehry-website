import TermsAndConditions from "@/components/ui/website/TermsAndConditions";
import { gradientClasses } from "@/styles/gradients";

import { myFetch } from "@/utils/myFetch";

const page = async () => {
  let content = "";
  let lastUpdated = "";

  try {
    const response = await myFetch("/disclaimers/terms-and-conditions");
    if (response && response.success && response.data) {
      content = response.data.content;
      lastUpdated = response.data.updatedAt;
    }
  } catch (error) {
    console.error("Error fetching terms and conditions:", error);
  }

  return (
    <div>
      <div className={` ${gradientClasses.primaryBg} py-5 text-center`}>
        <h1 className="text-4xl md:text-5xl font-bold mb-14 text-white">
          Terms and Conditions
        </h1>
      </div>
      <TermsAndConditions content={content} lastUpdated={lastUpdated} />
    </div>
  );
};

export default page;
