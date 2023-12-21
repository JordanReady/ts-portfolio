"use client";
import React from "react";
import Reveal from "@/components/Reveal";
import Image, { StaticImageData } from "next/image";
import styles from "./ProjectMoreCard.module.css";
import Photo from "@/public/PageNews1.png";
import Photo2 from "@/public/PageNews2.png";
import Photo3 from "@/public/PageNews3.png";
import Photo4 from "@/public/PageNews4.png";
import LanguageCard from "./LanguageCard";
import { BarChart3 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

// Define a TypeScript interface for the component props
interface ProjectMoreCardProps {
  projectName: string;
  technologies: { name: string; description: string }[];
  image: StaticImageData; // Assuming you are using Next.js Image component
}

// Use the interface as the type for the props
function ProjectMoreCard({
  projectName,
  technologies,
  image,
}: ProjectMoreCardProps) {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
          {/* First column */}
          <div className="col-span-2 md:col-span-1 ">
            <Reveal>
              <h2
                style={{
                  color: "var(--primary-color)",
                }}
                className="text-6xl p-4"
              >
                {projectName}
              </h2>
            </Reveal>

            <Reveal delayTime={0.35} color="gray">
              <div className={`${styles.img}`}>
                <Image src={image} alt="Logo" width={1000}></Image>
              </div>
            </Reveal>
          </div>

          {/* Second column */}
          <div className="col-span-2 md:col-span-1 mb-5 relative">
            <Reveal delayTime={0.35} color="var(--primary-color)">
              <h2
                style={{
                  color: "var(--primary-color)",
                }}
                className="text-6xl p-4"
              >
                Technologies
              </h2>
            </Reveal>

            <div>
              {technologies.map((tech) => (
                <div key={tech.name}>
                  <Reveal delayTime={0.35} color="var(--primary-color)">
                    <p
                      className="text-2xl px-4"
                      style={{
                        color: "var(--primary-color)",
                      }}
                    >
                      {tech.name}
                    </p>
                  </Reveal>
                  {/* Technology description */}
                  <Reveal direction="top" delayTime={0.75} color="grey">
                    <p className=" text-slate-700 dark:text-gray-100 px-4 text-xl pb-3">
                      {tech.description}
                    </p>
                  </Reveal>
                </div>
              ))}
            </div>
            <Reveal
              direction="top"
              delayTime={0.5}
              color="var(--primary-color)"
            >
              <div
                style={{
                  color: "var(--primary-color)",
                }}
                className={` ${styles.languageBreakdownRow}`}
              >
                <h2 className="text-2xl px-4">Language Breakdown</h2>
                <div className={styles.barLogo}>
                  <BarChart3 />
                </div>
              </div>
              <div
                className={`${styles.languageRow} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4`}
              >
                <LanguageCard
                  img={require("@/public/HTMLLogo.png")}
                  language="HTML"
                  percentage={70}
                  color="#dd4d25"
                  delay={1200}
                />
                <LanguageCard
                  img={require("@/public/CSSLogo.png")}
                  language="CSS"
                  percentage={30}
                  color="#2972b4"
                  delay={1325}
                />
                {/* <LanguageCard
                  img={require("@/public/JSLogo.png")}
                  language="JavaScript"
                  percentage={30}
                  delay={1450}
                  color="#f3e032"
                /> */}
                {/* <LanguageCard
                  img={require("@/public/TSLogo.png")}
                  language="TypeScript"
                  percentage={30}
                  delay={1450}
                  color="#2972b4"
                /> */}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Second Section */}
        <div className=" flex flex-col sm:flex-row flex-grow overflow-hidden">
          <section
            role="main"
            className="w-full h-full flex-grow  overflow-auto"
          >
            <Reveal
              direction="right"
              delayTime={0.75}
              color="var(--primary-color)"
            >
              <h2
                style={{
                  color: "var(--primary-color)",
                }}
                className="text-6xl p-4"
              >
                Overview
              </h2>
            </Reveal>
            <Reveal direction="right" delayTime={0.85} color="grey">
              <p className="text-xl text-slate-700 dark:text-gray-100 px-4">
                The Airbnb News Website Clone is a frontend project meticulously
                crafted with React, HTML, CSS, and Bootstrap. The website boasts
                a prominent top news story section, showcasing the day's most
                important articles. It features multiple grid-based sections
                that highlight the latest news and provide convenient links to
                various social media platforms.
              </p>
            </Reveal>
            <Reveal direction="right" delayTime={0.85} color="grey">
              <p className="text-xl text-slate-700 dark:text-gray-100 px-4">
                The design is anchored in thoughtfully designed grids created
                using Bootstrap, ensuring a seamless and intuitive user
                experience. From the engaging picture reel section to the
                organized news categories, the user-friendly sign-up for the
                newsletter, and the polished footer – each component is
                strategically crafted with Bootstrap grids for optimal display
                on various devices.
              </p>
            </Reveal>
            <Reveal direction="right" delayTime={0.85} color="grey">
              <p className="text-xl text-slate-700 dark:text-gray-100 px-4">
                This website's primary objective is to offer users a clean and
                straightforward means to stay informed about Airbnb news. With a
                responsive design, users can effortlessly access the site from
                desktops, tablets, or smartphones, ensuring a consistently
                enjoyable experience across different devices.
              </p>
            </Reveal>
            <div className={styles.btnRow}>
              <Reveal
                direction="top"
                delayTime={0.8}
                color="var(--primary-color)"
              >
                <div className=" shadow-purple-300 dark:shadow-purple-700  shadow-sm border border-b-1 gap-2">
                  <Link
                    href="https://github.com/JordanReady/Airbnb-press-clone"
                    target="blank"
                  >
                    <Button className={navigationMenuTriggerStyle()}>
                      <span className=" dark:text-purple-300">
                        {" "}
                        Github Repo
                      </span>
                    </Button>
                  </Link>
                </div>
              </Reveal>
              <Reveal
                direction="top"
                delayTime={0.8}
                color="var(--primary-color)"
              >
                <div className=" shadow-purple-300 dark:shadow-purple-700  shadow-sm border border-b-1 gap-2">
                  <Link
                    href="https://trusting-swirles-c46c81.netlify.app/"
                    target="blank"
                  >
                    <Button className={navigationMenuTriggerStyle()}>
                      <span className=" dark:text-purple-300"> Live Site</span>
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
          <div className="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
            <div className="sticky top-0 p-4 w-full">
              <ul className="flex sm:flex-col overflow-hidden content-center justify-between">
                <Reveal
                  direction="left"
                  delayTime={0.85}
                  color="var(--primary-color)"
                >
                  <Image
                    src={Photo}
                    alt="Photo 1"
                    objectFit="contain"
                    className="pb-2"
                  />
                </Reveal>
                <Reveal
                  direction="left"
                  delayTime={0.85}
                  color="var(--primary-color)"
                >
                  <Image
                    src={Photo2}
                    alt="Photo 2"
                    objectFit="contain"
                    className="pb-2"
                  />
                </Reveal>
                <Reveal
                  direction="left"
                  delayTime={0.85}
                  color="var(--primary-color)"
                >
                  <Image
                    src={Photo3}
                    alt="Photo 3"
                    objectFit="contain"
                    className="pb-2"
                  />
                </Reveal>
                <Reveal
                  direction="left"
                  delayTime={0.85}
                  color="var(--primary-color)"
                >
                  <Image
                    src={Photo4}
                    alt="Photo 4"
                    objectFit="contain"
                    className="pb-2"
                  />
                </Reveal>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectMoreCard;
