import JobDetailsPage from "@/components/ui/website/jobs/JobDetailsPage";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="bg-[#2C3E50] py-10">
      <JobDetailsPage id={id} />
    </div>
  );
};

export default page;
