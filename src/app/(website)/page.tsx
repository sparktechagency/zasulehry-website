import WebsiteMainPage from "@/components/ui/website/WebsiteMainPage";
import { myFetch } from "@/utils/myFetch";

export default async function Home() {
  let contactInfo = null;

  try {
    const response = await myFetch("/contact");
    if (response && response.success && response.data) {
      contactInfo = response.data;
    }
  } catch (error) {
    console.error("Error fetching contact info:", error);
  }

  return (
    <div>
      <WebsiteMainPage contactInfo={contactInfo} />
    </div>
  );
}
