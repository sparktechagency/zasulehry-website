import JobsMainPage from "@/components/ui/website/jobs/JobsMainPage";
import { myFetch } from "@/utils/myFetch";

export const dynamic = "force-dynamic";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  let jobs = [];
  let pagination = { totalPage: 1, currentPage: 1 };
  let categories = [];
  const params = await searchParams;
  // console.log("ORIGINAL SEARCH PARAMS ==>>", params);

  // Use the host for images (assumed to be the same as API but without the /api/v1 suffix)
  const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://10.10.7.7:5000/api/v1";
  const hostUrl = apiBaseUrl.split("/api")[0];

  try {
    // 1. Fetch Categories for the filter options
    const catResponse = await myFetch("/categories");
    if (catResponse && catResponse.success && Array.isArray(catResponse.data)) {
      categories = catResponse.data;
    }

    // 2. Fetch Jobs based on query parameters
    const query = new URLSearchParams();
    if (params.category && params.category !== "Category")
      query.set("category", params.category as string);
    if (params.subCategory && params.subCategory !== "Sub Category")
      query.set("subCategory", params.subCategory as string);
    if (params.jobType) query.set("jobType", params.jobType as string);
    if (params.experience) query.set("experience", params.experience as string);
    if (params.salaryType) query.set("salaryType", params.salaryType as string);
    if (params.salaryAmount)
      query.set("salaryAmount", params.salaryAmount as string);
    if (params.page) query.set("page", params.page as string);
    query.set("limit", (params.limit as string) || "12");
    if (params.lat && params.lng) {
      query.set("lat", params.lat as string);
      query.set("lng", params.lng as string);
      query.set("radius", "50"); // Default radius of 50km when location is provided
    }

    const queryString = query.toString();
    const endpoint = `/jobs/public${queryString ? `?${queryString}` : ""}`;
    // console.log("BACKEND ENDPOINT ==>>", endpoint);

    const response = await myFetch(endpoint);

    if (response && response.success && Array.isArray(response.data)) {
      pagination = {
        totalPage: response.pagination?.totalPage || 1,
        currentPage: response.pagination?.page || 1,
      };

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
          title: item.subCategory,
          sector: item.category,
          company: item.author?.name || "Sparktech Agency",
          location: item.author?.address || "N/A",
          salary: item.salaryAmount
            ? `€${item.salaryAmount}/${item.salaryType}ly`
            : "Negotiable",
          jobType: item.jobType || "Full Time",
          postedDays: postedDays,
          coordinates: item?.location?.coordinates || null,
          image: item.author?.image,
        };
      });

      // console.log("OG RESPONSE ==>>", response);
      // console.log("jobs ==>>", jobs);
    }
  } catch (error) {
    console.error("Error fetching jobs or categories:", error);
  }

  return (
    <div className="bg-[#2C3E50] py-10">
      <JobsMainPage
        initialJobs={jobs}
        pagination={pagination}
        categories={categories}
      />
    </div>
  );
};

export default page;
