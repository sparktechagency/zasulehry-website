import Container from "../Container";

const TermsAndConditions = ({
  content,
  lastUpdated,
}: {
  content: string;
  lastUpdated: string;
}) => {
  return (
    <div className={`bg-[#2C3E50] py-16`}>
      {/* Header */}
      <Container>
        <div className="bg-[#FFFFFF1A] border border-[#FFFFFF1A] rounded-lg p-8 md:p-10 text-gray-200 space-y-8">
          <div
            className="text-white **:text-white!"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <p className="text-right text-gray-400">
            Last Updated:{" "}
            {new Date(lastUpdated).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
