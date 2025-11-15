import { NavItem, SocialLink, FooterSection } from "@/types";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "For Employer", href: "https://zisan-website.vercel.app/login" },
  { label: "Contact Us", href: "/contact-us" },
];

export const socialLinks: SocialLink[] = [
  { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  // { name: "WhatsApp", href: "https://whatsapp.com", icon: "whatsapp" },
  { name: "YouTube", href: "https://youtube.com", icon: "youtube" },
];

export const footerSections: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Profile", href: "https://zisan-website.vercel.app/login" },
      { label: "Home", href: "/" },
      { label: "Job", href: "/jobs" },
      {
        label: "For Employer",
        href: "https://zisan-website.vercel.app/signup",
      },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Job Posting", href: "https://zisan-website.vercel.app/login" },
      {
        label: "Subscription Plan",
        href: "https://zisan-website.vercel.app/login",
      },
      {
        label: "Salary Calculator",
        href: "https://zisan-website.vercel.app/login",
      },
      {
        label: "Download Center",
        href: "https://zisan-website.vercel.app/login",
      },
    ],
  },
  {
    title: "Legal Info",
    links: [
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Impressum", href: "/impressum" },
      { label: "About Us", href: "/about-us" },
    ],
  },
];
