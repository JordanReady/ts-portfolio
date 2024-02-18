import React from "react";
import FullStack from "./FullStack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore a collection of projects by Jordan Ready, a skilled software developer based in Dubuque, Iowa. From web applications to innovative solutions, Jordan's portfolio showcases a diverse range of projects. Dive into the details, technologies used, and the impact each project has made. Get inspired and discover how Jordan can bring creativity and expertise to your next endeavor.",
};

function page() {
  return <FullStack />;
}

export default page;
