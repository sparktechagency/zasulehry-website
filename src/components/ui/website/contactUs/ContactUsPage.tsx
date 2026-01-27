"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import { gradientClasses } from "@/styles/gradients";
import ContactBanner from "./ContactBanner";

import { createSupportAction } from "@/actions/support";
import toast from "react-hot-toast";

interface ContactInfo {
  email: string;
  phone: string;
  whatsApp: string;
  [key: string]: any;
}

const ContactUsPage = ({
  contactInfo,
}: {
  contactInfo?: ContactInfo | null;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("location", formData.location);
    data.append("message", formData.message);
    if (file) {
      data.append("image", file);
    }

    try {
      const result = await createSupportAction(data);
      console.log("result response ==>>", result);
      if (result.success) {
        toast.success(result.message);
        // Reset form after submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          message: "",
        });
        setFile(null);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <ContactBanner />
      <div className={`bg-[#2C3E50] py-16 min-h-screen`}>
        {/* Header Section */}
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-4 bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-white">
                    {contactInfo?.phone || "-"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-white">
                    {contactInfo?.email || "-"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <span className="text-white">
                    {contactInfo?.whatsApp || "-"}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-8 bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-8 rounded-lg">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      className="w-full border border-white rounded p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      className="w-full border border-white rounded p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Your Contact Number"
                      className="w-full border border-white rounded p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-white mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Enter Your Location"
                      className="w-full border border-white rounded p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-white mb-2">
                    Type Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Your Message"
                    rows={6}
                    className="w-full border border-white rounded p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label htmlFor="attachment" className="block text-white mb-2">
                    Upload Attachment
                  </label>
                  <div className="border border-dashed border-white rounded p-6 flex flex-col items-center justify-center">
                    <div className="w-10 h-10 bg-[#FFFFFF1A] rounded flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-teal-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center text-gray-400">
                      Upload Attachment
                    </p>
                    <input
                      type="file"
                      id="attachment"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="attachment"
                      className={`${gradientClasses.textGradient} mt-2 cursor-pointer text-sm`}
                    >
                      Browse Files
                    </label>
                    {file && (
                      <p className="mt-2 text-sm text-gray-300">{file.name}</p>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{ boxShadow: "0 0 10px 0 #B1F1FF inset" }}
                    className={`${gradientClasses.primaryBg} px-6 rounded-lg py-2 backdrop-blur-sm text-white disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactUsPage;
