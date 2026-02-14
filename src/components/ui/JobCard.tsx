import { gradientClasses } from "@/styles/gradients";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export interface JobCardProps {
  id: number | string;
  company: string;
  location: string;
  title: string;
  sector: string;
  salary: string;
  type: string;
  postedDays: number;
  image?: string;
  onClick?: () => void;
}

const JobCard: FC<JobCardProps> = ({
  id,
  company,
  location,
  title,
  sector,
  salary,
  type,
  postedDays,
  image,
  onClick,
}) => {
  return (
    <div className="bg-[#FFFFFF0D] border w-full h-full border-[#FFFFFF1A] shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden flex flex-col">
      {/* Job Image */}
      <div className="relative h-48 shrink-0">
        <Image
          src={
            image
              ? image?.startsWith("http")
                ? image
                : `${process.env.NEXT_PUBLIC_IMAGE_URL}${image}`
              : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          }
          alt={`${company} - ${title}`}
          fill
          className="object-cover p-2 rounded-t-lg"
        />
      </div>

      {/* Company Info */}
      <div className="p-4 grow">
        <div className="flex text-start gap-3 mb-3">
          <div className="w-12 h-12 bg-gray-600 rounded-full overflow-hidden flex items-center justify-center shrink-0">
            {image ? (
              <Image
                src={
                  image?.startsWith("http")
                    ? image
                    : `${process.env.NEXT_PUBLIC_IMAGE_URL}${image}`
                }
                alt={company}
                width={48}
                height={48}
                className="object-cover"
              />
            ) : (
              <span className="text-white text-lg font-bold">
                {company.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <h3 className="line-clamp-1 text-white font-medium text-lg">
              {company}
            </h3>
            <p className="line-clamp-1 text-gray-400 text-sm">{location}</p>
          </div>
        </div>

        {/* Job Details */}
        <div>
          <h2 className="line-clamp-2 text-white text-lg font-semibold mb-3 text-start">
            {title}
          </h2>
          <h2 className="line-clamp-2 text-gray-400 text-sm font-semibold mb-3 text-start">
            {sector}
          </h2>
        </div>
        <p className="text-white text-lg mb-4 text-start">{salary}</p>

        <div className="flex justify-between items-center mb-4">
          <span className="bg-[#FFFFFF0D] border text-white border-[#FFFFFF1A] text-sm px-3 py-1 rounded">
            {type}
          </span>
          <span className="text-gray-400 text-sm">{postedDays} Days Ago</span>
        </div>
      </div>

      {/* View Details Button */}
      <div className="mt-auto border border-[#FFFFFF1A] m-3 rounded-lg">
        <Link
          href={`/jobs/${id}`}
          onClick={onClick}
          style={{
            boxShadow: "0 0 10px 0 #B1F1FF inset",
          }}
          className={`${gradientClasses.buttonBg} rounded-lg cursor-pointer w-full py-2 text-center text-white transition-colors font-medium block`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
