"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import Reveal from "@/components/Reveal";
import Loader from "@/components/Loader";
import { customEvent } from "@/utils/customEvent";

function Page() {
  // Fetch the session and check if the user is logged in
  const { data: session } = useSession();

  useEffect(() => {
    // If the user is logged in, redirect to /profile
    if (session) {
      customEvent("Login", "User Login");
      window.location.href = "/profile";
    } else {
      handleGoogleSignIn();
    }
  }, [session]);

  // Function to handle Google sign-in
  const handleGoogleSignIn = () => {
    signIn("google");
  };

  return (
    <div className="h-[40rem] relative w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
      <Reveal direction="top">
        <h1 className=" text-4xl text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
          Hang tight!
        </h1>
      </Reveal>
      <Reveal direction="right" color="grey">
        <Loader />
      </Reveal>
    </div>
  );
}

export default Page;
