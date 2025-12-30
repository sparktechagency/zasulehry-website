"use server";
import fs from "fs";
import path from "path";

export async function createSupportAction(formData: FormData) {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://10.10.7.7:5000/api/v1";
  const url = `${baseUrl}/supports/create`;

  try {
    // The formData already contains name, email, phone, message, and image
    // We just need to make sure 'location' is either supported or handled.
    // Based on the user's provided API image, it doesn't show 'location'.
    // I will append location to the message if it's present.

    const allKeys = Array.from(formData.keys());
    console.log("Received FormData Keys:", allKeys);

    // Log to file as well since terminal is hard to read
    const logPath = path.join(process.cwd(), "api_debug.log");
    fs.appendFileSync(
      logPath,
      `\nReceived FormData Keys: ${JSON.stringify(allKeys)}\n`
    );

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const location = formData.get("location");
    const message = formData.get("message");
    const image = formData.get("image");

    const finalFormData = new FormData();
    if (name) finalFormData.append("name", name);
    if (email) finalFormData.append("email", email);
    if (phone) finalFormData.append("phone", phone);

    let finalMessage = message as string;
    if (location) {
      finalMessage = `Location: ${location}\n\n${finalMessage}`;
    }
    finalFormData.append("message", finalMessage);

    if (image && (image as File).name) {
      finalFormData.append("image", image);
    }

    const response = await fetch(url, {
      method: "POST",
      body: finalFormData,
      // Note: Do NOT set Content-Type header when sending FormData,
      // the browser/node will set it automatically with the boundary.
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok) {
      const logPath = path.join(process.cwd(), "api_debug.log");
      const logContent = `\n--- ${new Date().toISOString()} ---\nURL: ${url}\nResult: ${JSON.stringify(
        result,
        null,
        2
      )}\n`;
      fs.appendFileSync(logPath, logContent);

      console.error("API Error Result:", JSON.stringify(result, null, 2));
      // Try to extract specific validation messages if they exist in standard formats
      let errorMessage = result.message || "Failed to send support request.";

      if (result.error && typeof result.error === "string") {
        errorMessage = result.error;
      } else if (result.errors && typeof result.errors === "object") {
        // Handle field-specific errors if available (e.g., { phone: ["Invalid format"] })
        const errorDetails = Object.values(result.errors).flat().join(", ");
        if (errorDetails) errorMessage = `${errorMessage}: ${errorDetails}`;
      }

      return {
        success: false,
        message: errorMessage,
      };
    }

    return {
      success: true,
      message: result.message || "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Error in createSupportAction:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
