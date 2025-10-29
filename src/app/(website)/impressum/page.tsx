import Impressum from "@/components/ui/website/Impressum";
import { gradientClasses } from "@/styles/gradients";

const page = () => {
  return (
    <div>
      <div className={` ${gradientClasses.primaryBg} py-5 text-center`}>
        <h1 className="text-4xl md:text-5xl font-bold mb-14 text-white">
          Impressum
        </h1>
      </div>
      <Impressum />
    </div>
  );
};

export default page;
