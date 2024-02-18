import React from "react";
import About from "./About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Jordan Ready, a passionate software developer based in Dubuque, Iowa. With expertise in front-end and back-end technologies, Jordan leverages the latest tools and frameworks to create efficient, scalable, and user-friendly applications. Learn more about Jordan's journey in web devlopment and commitment to delivering top-notch solutions.",
};

function page() {
  return <About />;
}

export default page;
