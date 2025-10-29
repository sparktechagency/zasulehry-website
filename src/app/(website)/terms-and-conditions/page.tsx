import TermsAndConditions from "@/components/ui/website/TermsAndConditions";
import { gradientClasses } from "@/styles/gradients";

const page = () => {
  return (
    <div>
      <div className={` ${gradientClasses.primaryBg} py-5 text-center`}>
        <h1 className="text-4xl md:text-5xl font-bold mb-14 text-white">
          Terms and Conditions
        </h1>
      </div>
      <TermsAndConditions />
    </div>
  );
};

export default page;
