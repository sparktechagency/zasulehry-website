import ContactUsPage from "@/components/ui/website/contactUs/ContactUsPage";
import { myFetch } from "@/utils/myFetch";

const page = async () => {
  let contactInfo = null;

  try {
    const response = await myFetch("/contact");
    if (response && response.success && response.data) {
      contactInfo = response.data;
    }
  } catch (error) {
    console.error("Error fetching contact info:", error);
  }

  return <ContactUsPage contactInfo={contactInfo} />;
};

export default page;
