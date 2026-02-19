"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import { gradientClasses } from "@/styles/gradients";
import ContactBanner from "./ContactBanner";
import Link from "next/link";
import { FaTimes, FaArrowLeft } from "react-icons/fa";

import { createSupportAction } from "@/actions/support";
import toast from "react-hot-toast";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

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
                {/* <div className="flex items-center gap-3">
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
                  {contactInfo?.phone ? (
                    <a
                      href={`https://wa.me/${contactInfo.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-teal-400 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  ) : (
                    <span className="text-white">-</span>
                  )}
                </div> */}

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
                  {contactInfo?.email ? (
                    <a
                      href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${contactInfo.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-teal-400 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  ) : (
                    <span className="text-white">-</span>
                  )}
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
                  {contactInfo?.whatsApp ? (
                    <button
                      onClick={() => setIsAppModalOpen(true)}
                      className="text-white hover:text-teal-400 cursor-pointer transition-colors"
                    >
                      Live Chat
                    </button>
                  ) : (
                    <span className="text-white">-</span>
                  )}
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
                    <PhoneInput
                      country={"de"}
                      value={formData.phone}
                      onChange={(phone) =>
                        setFormData((prev) => ({ ...prev, phone }))
                      }
                      enableSearch
                      searchPlaceholder="Search country..."
                      placeholder="Enter Your Contact Number"
                      inputStyle={{
                        width: "100%",
                        height: "50px",
                        backgroundColor: "transparent",
                        color: "white",
                        border: "1px solid white",
                        borderRadius: "4px",
                        fontSize: "16px",
                      }}
                      buttonStyle={{
                        backgroundColor: "transparent",
                        border: "1px solid white",
                        borderRadius: "4px 0 0 4px",
                      }}
                      dropdownStyle={{
                        backgroundColor: "#1e293b",
                        color: "white",
                      }}
                      searchStyle={{
                        backgroundColor: "#1e293b",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "4px",
                        padding: "8px",
                      }}
                      containerClass="phone-input-container"
                    />
                    <style jsx global>{`
                      .phone-input-container .form-control:focus {
                        box-shadow: 0 0 0 2px #14b8a6 !important;
                        border-color: #14b8a6 !important;
                      }
                      .phone-input-container .selected-flag:hover,
                      .phone-input-container .selected-flag:focus {
                        background-color: rgba(255, 255, 255, 0.1) !important;
                      }
                      .phone-input-container .country-list {
                        background-color: #1e293b !important;
                        border: 1px solid rgba(255, 255, 255, 0.15) !important;
                        border-radius: 6px !important;
                      }
                      .phone-input-container .country-list .country {
                        color: white !important;
                      }
                      .phone-input-container .country-list .country .dial-code {
                        color: #94a3b8 !important;
                      }
                      .phone-input-container .country-list .country:hover {
                        background-color: rgba(20, 184, 166, 0.2) !important;
                      }
                      .phone-input-container .country-list .country.highlight {
                        background-color: rgba(20, 184, 166, 0.4) !important;
                      }
                      .phone-input-container .country-list .search {
                        background-color: #1e293b !important;
                        padding: 10px !important;
                        position: sticky !important;
                        top: 0 !important;
                        z-index: 1 !important;
                      }
                      .phone-input-container .country-list .search-box {
                        background-color: #0f172a !important;
                        color: white !important;
                        border: 1px solid rgba(255, 255, 255, 0.2) !important;
                        border-radius: 4px !important;
                        padding: 8px 10px !important;
                        width: 100% !important;
                        box-sizing: border-box !important;
                      }
                      .phone-input-container
                        .country-list
                        .search-box::placeholder {
                        color: #64748b !important;
                      }
                      .phone-input-container .country-list .no-entries-message {
                        color: #94a3b8 !important;
                      }
                      .phone-input-container .country-list .divider {
                        border-bottom-color: rgba(
                          255,
                          255,
                          255,
                          0.1
                        ) !important;
                      }
                      .phone-input-container .country-list::-webkit-scrollbar {
                        width: 6px;
                      }
                      .phone-input-container
                        .country-list::-webkit-scrollbar-track {
                        background: #1e293b;
                      }
                      .phone-input-container
                        .country-list::-webkit-scrollbar-thumb {
                        background: #475569;
                        border-radius: 3px;
                      }
                    `}</style>
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
                    <p className="text-xs text-gray-500 mt-1">
                      Supported formats: JPG, JPEG, PNG, PDF
                    </p>
                    <input
                      type="file"
                      id="attachment"
                      accept=".jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf"
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

      {/* App Download Modal */}
      {isAppModalOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300"
          onClick={() => setIsAppModalOpen(false)}
        >
          <div
            className="bg-[#1E2A37] border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsAppModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes size={20} />
            </button>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaArrowLeft className="text-teal-500 text-3xl rotate-180" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Live Chat via Our Mobile App
              </h3>
              <p className="text-gray-400 mb-8">
                To access live chat support, please download our app from the
                store. It's fast, easy, and secure.
              </p>

              <div className="flex flex-col gap-4">
                <Link
                  href="https://play.google.com/store"
                  target="_blank"
                  className="flex items-center justify-center bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-all group"
                >
                  <svg
                    className="w-8 h-8 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-gray-500 -mb-1">
                      Get it on
                    </div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </Link>

                <Link
                  href="https://apple.com/app-store"
                  target="_blank"
                  className="flex items-center justify-center bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-all group"
                >
                  <svg
                    className="w-8 h-8 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-gray-500 -mb-1">
                      Download on the
                    </div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUsPage;
