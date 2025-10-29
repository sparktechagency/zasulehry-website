import PrivacyPolicy from "@/components/ui/website/PrivacyPolicy";
import { gradientClasses } from "@/styles/gradients";

const page = () => {
  return (
    <div>
      <div className={` ${gradientClasses.primaryBg} py-5 text-center`}>
        <h1 className="text-4xl md:text-5xl font-bold mb-14 text-white">
          Privacy Policy
        </h1>
      </div>
      <PrivacyPolicy />
    </div>
  );
};

export default page;
