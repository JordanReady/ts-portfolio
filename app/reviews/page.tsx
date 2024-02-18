import React from "react";
import Reviews from "./Reviews";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Discover what others are saying about Jordan Ready, a skilled software developer based in Dubuque, Iowa. Read insightful reviews from clients and collaborators. Get a glimpse into the experiences of those who have worked with Jordan and gain valuable insights into the quality of service and expertise provided.",
};

function page() {
  return <Reviews />;
}

export default page;
