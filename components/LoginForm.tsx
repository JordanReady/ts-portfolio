"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth";

function LoginForm() {
  //state for session
  const [session, setSession] = useState(null);

  //fetch session
  const fetchSession = async () => {
    const session = await getServerSession();
    if (session) {
      console.log("Session:", session);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const session = await getServerSession();
      console.log("Server session:", session);
    };

    fetchData();
  }, []);

  return (
    <div className={"grid gap-6"}>
      <Button variant={"outline"} onClick={() => signIn("google")}>
        Google
      </Button>
      <Button variant={"outline"} onClick={() => fetchSession}></Button>
    </div>
  );
}

export default LoginForm;
