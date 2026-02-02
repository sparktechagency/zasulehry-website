import JobDetailsPage from "@/components/ui/website/jobs/JobDetailsPage";
import { myFetch } from "@/utils/myFetch";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  let jobData = null;

  const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://10.10.7.7:5000/api/v1";
  const hostUrl = apiBaseUrl.split("/api")[0];

  try {
    const response = await myFetch(`/jobs/single/${id}`);
    if (response && response.success && response.data) {
      const item = response.data;
      jobData = {
        id: item._id,
        title: item.subCategory || item.category || "Untitled Job",
        company: item.author?.name || "Sparktech Agency",
        location: item.author?.address || "N/A",
        jobType: item.jobType || "Full Time",
        salary: item.salaryAmount
          ? `$${item.salaryAmount}/${item.salaryType || "Month"}`
          : "Negotiable",
        postedDate: item.createdAt
          ? new Date(item.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          : "N/A",
        image: item.author?.image,
        description: item.description || "No description available.",
        responsibilities: item.responsibilities || [],
        qualifications: item.qualifications || [],
      };
    }
  } catch (error) {
    console.error("Error fetching job details:", error);
  }

  if (!jobData) {
    return (
      <div className="bg-[#2C3E50] py-20 text-center text-white">
        <h1 className="text-2xl">Job not found</h1>
        <p className="mt-4">
          The job you are looking for might have been removed or is unavailable.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#2C3E50] py-10">
      <JobDetailsPage id={id} initialData={jobData} />
    </div>
  );
};

export default page;
