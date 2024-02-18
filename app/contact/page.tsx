import React from "react";
import Contact from "./Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Jordan Ready, a skilled software developer based in Dubuque, Iowa. Get in touch with me for questions, project discussions, or just to say hello!",
};

function page() {
  return <Contact />;
}

export default page;
