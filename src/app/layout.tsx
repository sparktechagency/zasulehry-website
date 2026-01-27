import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zasulehry - Digital Solutions & Web Development",
  description:
    "We create exceptional digital experiences that help businesses grow and succeed in the modern world. Professional web development, design, and digital solutions.",
  keywords:
    "web development, digital solutions, UI/UX design, modern websites, business growth",
  authors: [{ name: "Mahmud Hasan Sabbir" }],
  openGraph: {
    title: "Zasulehry - Digital Solutions & Web Development",
    description:
      "We create exceptional digital experiences that help businesses grow and succeed in the modern world.",
    type: "website",
  },
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
        suppressHydrationWarning
      >
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">
            {children}
            <Toaster position="top-center" reverseOrder={false} />
          </main>
        </div>
      </body>
    </html>
  );
}
