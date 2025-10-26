"use client";

import Image from "next/image";
import Container from "../../Container";
import Link from "next/link";
import { gradientClasses } from "@/styles/gradients";
import AboutUsSections from "./AboutUsSections";
import AboutUsBanner from "./AboutUsBanner";

const MainAboutPage = () => {
  return (
    <div>
      <AboutUsBanner />
      <AboutUsSections />
    </div>
  );
};

export default MainAboutPage;
