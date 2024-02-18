import React from "react";
import Profile from "./Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description:
    "Explore your profile on Jordan Ready's website. Edit your profile card, leave reviews, and manage your interactions. Take control of your experience and engage with the platform's features designed to enhance your presence and collaboration.",
};

function page() {
  return <Profile />;
}

export default page;
