import JobDetailsPage from "@/components/ui/website/jobs/JobDetailsPage";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="bg-[#2C3E50] py-10">
      <JobDetailsPage id={params.id} />
    </div>
  );
};

export default page;
