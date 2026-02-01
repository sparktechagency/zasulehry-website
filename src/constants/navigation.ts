import { NavItem, SocialLink, FooterSection } from "@/types";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "For Employer", href: "https://portal.jobsinapp.de/login" },
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
      { label: "Profile", href: "https://portal.jobsinapp.de/login" },
      { label: "Home", href: "/" },
      { label: "Jobs", href: "/jobs" },
      {
        label: "For Employer",
        href: "https://portal.jobsinapp.de/login",
      },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Job Posting", href: "https://portal.jobsinapp.de/login" },
      {
        label: "Subscription Plan",
        href: "https://portal.jobsinapp.de/login",
      },
      {
        label: "Salary Calculator",
        href: "https://portal.jobsinapp.de/login",
      },
      {
        label: "Download Center",
        href: "https://portal.jobsinapp.de/login",
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
