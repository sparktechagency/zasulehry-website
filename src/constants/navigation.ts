import { NavItem, SocialLink, FooterSection } from "@/types";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "Employer Services", href: "/employer-services" },
  { label: "Contact Us", href: "/contact-us" },
];

export const socialLinks: SocialLink[] = [
  { name: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { name: "GitHub", href: "https://github.com", icon: "github" },
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
];

export const footerSections: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Profile", href: "/profile" },
      { label: "Home", href: "/" },
      { label: "Jobs", href: "/jobs" },
      { label: "Employer Services", href: "/employer-services" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Jobs Posting", href: "/jobs-posting" },
      { label: "Subscription Plan", href: "/subscription-plan" },
      { label: "Salary Calculator", href: "/salary-calculator" },
      { label: "Download Center", href: "/download-center" },
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
