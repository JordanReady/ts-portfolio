import React from "react";
import Designing from "./Designing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the comprehensive range of services offered by Jordan Ready, a skilled software developer based in Dubuque, Iowa. From front-end to back-end development, Jordan provides tailored solutions for individual tasks and collaborative projects. Discover how these services can enhance your projects and bring efficiency to your development workflow.",
};

function page() {
  return <Designing />;
}

export default page;
