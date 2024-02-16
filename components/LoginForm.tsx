import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { SparklesCore } from "@/components/ui/sparkles";
import BarLoader from "@/components/ui/BarLoader";

function LoginForm() {
  // Fetch the session and check if the user is logged in
  const { data: session } = useSession();

  useEffect(() => {
    // If the user is logged in, redirect to /profile
    if (session) {
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
      <h1 className=" text-3xl text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
        Redirecting you now!
      </h1>

      <BarLoader />
    </div>
  );
}

export default LoginForm;
