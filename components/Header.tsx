"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { NavigationMenuDemo } from "./nav";
import styles from "./Header.module.css";
import { DarkModeToggle } from "./DarkModeToggle";
import UserButton from "./userButton";

export default function Header() {
  const state = true;

  const menus = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "Services", path: "/services" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`${styles.header} bg-white shadow-sm dark:shadow-purple-700 shadow-purple-400 dark:bg-gray-900 w-full border-b md:border-0`}
    >
      <div className="flex flex-col sm:flex-row items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className=" w-full flex items-center justify-center py-3 md:py-5 md:justify-start ">
          <Link href="/" className={styles.h1}>
            <h1 className="text-3xl font-bold text-purple-700  text-center justify-center ">
              Jordan Ready
            </h1>
          </Link>
        </div>
        <div
          className={`flex justify-self-center pb-3 mt-8 md:pb-0 md:mt-0 ${styles.navRow} `}
        >
          <NavigationMenuDemo />
          <div className={styles.spacerLong}></div>
          <div className={styles.utilBtns}>
            <DarkModeToggle></DarkModeToggle>
            <div className={styles.spacer}></div>
            <UserButton></UserButton>
          </div>
        </div>

        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 block ${styles.navRow} `}
        ></div>
      </div>
    </nav>
  );
}
