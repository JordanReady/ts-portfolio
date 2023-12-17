"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LoginForm from "@/components/LoginForm";
import styles from "./page.module.css";

function Page() {
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className={"container"}>
      <div className={styles.formContainer}>
        <LoginForm />
      </div>
    </div>
  );
}

export default Page;
