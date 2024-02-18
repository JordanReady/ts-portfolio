import React from "react";
import Login from "./Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Log in to Jordan Ready's website securely. Access your profile, manage interactions, and explore exclusive features. Enjoy a seamless login experience designed for your convenience and privacy.",
};

function page() {
  return <Login />;
}

export default page;
