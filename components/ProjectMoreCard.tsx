"use client";
import React, { useState, useEffect } from "react";
import Reveal from "@/components/Reveal";
import Image, { StaticImageData } from "next/image";
import styles from "./ProjectMoreCard.module.css";
import LanguageCard from "./LanguageCard";
import { BarChart3 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

// Define a TypeScript interface for the component props
interface ProjectMoreCardProps {
  projectName: string;
  technologies: { name: string; description: string }[];
  image: StaticImageData[];
  javascript?: number;
  html?: number;
  css?: number;
  typeScript?: number;
  ruby?: number;
  overviewParagraphs: string[];
  images: StaticImageData[];
  repoLink: string;
  siteLink: string;
}

// Use the interface as the type for the props

function ProjectMoreCard({
  projectName,
  technologies,
  image,
  javascript,
  html,
  css,
  typeScript,
  ruby,
  overviewParagraphs,
  images,
  repoLink,
  siteLink,
}: ProjectMoreCardProps) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedMainImage, setSelectedMainImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedMainImage((prevIndex) => (prevIndex + 1) % image.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [image]);

  const handleClick = (index: any) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className={` ${styles.container} container ${styles.container} `}>
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
                <Image
                  src={image[selectedMainImage]}
                  alt={`Photo ${selectedMainImage + 1}`}
                  width={1000}
                  loading="lazy"
                  placeholder="blur"
                  sizes="fill"
                />
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

            <div className={styles.techRow}>
              {technologies.map((tech) => (
                <div key={tech.name}>
                  <Reveal delayTime={0.35} color="var(--primary-color)">
                    <p
                      className={` ${styles.techName} text-2x px-4`}
                      style={{
                        color: "var(--primary-color)",
                      }}
                    >
                      {tech.name}
                    </p>
                  </Reveal>
                  {/* Technology description */}
                  <Reveal direction="top" delayTime={0.75} color="grey">
                    <p className=" text-slate-700 dark:text-gray-300 px-4 text-xl pb-3">
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
                <h2 className="text-2xl p-4">Language Breakdown</h2>
                <div className={styles.barLogo}>
                  <BarChart3 />
                </div>
              </div>
              <div
                className={`${styles.languageRow} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4`}
              >
                {html !== undefined && html !== 0 && (
                  <LanguageCard
                    img={require("@/public/HTMLLogo.png")}
                    language="HTML"
                    percentage={html}
                    color="#dd4d25"
                    delay={1200}
                  />
                )}
                {css !== undefined && css !== 0 && (
                  <LanguageCard
                    img={require("@/public/CSSLogo.png")}
                    language="CSS"
                    percentage={css}
                    color="#2972b4"
                    delay={1325}
                  />
                )}
                {javascript !== undefined && javascript !== 0 && (
                  <LanguageCard
                    img={require("@/public/JSLogo.png")}
                    language="JavaScript"
                    percentage={javascript}
                    delay={1450}
                    color="#f3e032"
                  />
                )}
                {typeScript !== undefined && typeScript !== 0 && (
                  <LanguageCard
                    img={require("@/public/TSLogo.png")}
                    language="TypeScript"
                    percentage={typeScript}
                    delay={1450}
                    color="#2972b4"
                  />
                )}
                {ruby !== undefined && ruby !== 0 && (
                  <LanguageCard
                    img={require("@/public/RubyLogo.png")}
                    language="ruby"
                    percentage={ruby}
                    delay={1450}
                    color="#b71807"
                  />
                )}
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
              delayTime={0.25}
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
            {overviewParagraphs.map((paragraph, index) => (
              <Reveal
                key={index}
                direction="right"
                delayTime={0.25}
                color="grey"
              >
                <p className="text-xl text-slate-700 dark:text-gray-300 px-4">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <div className={styles.btnRow}>
              <Reveal
                direction="top"
                delayTime={0.25}
                color="var(--primary-color)"
              >
                <div className=" shadow-purple-400 dark:shadow-purple-700 shadow-sm border gap-2 m-1">
                  <Link className="" href={repoLink} target="blank">
                    <Button className={navigationMenuTriggerStyle()}>
                      <span className=" dark:text-purple-300 text-gray-700">
                        {" "}
                        Github Repo
                      </span>
                    </Button>
                  </Link>
                </div>
              </Reveal>
              <Reveal
                direction="top"
                delayTime={0.25}
                color="var(--primary-color)"
              >
                <div className=" shadow-purple-400 dark:shadow-purple-700 shadow-sm border gap-2 m-1">
                  <Link href={siteLink} target="blank">
                    <Button className={navigationMenuTriggerStyle()}>
                      <span className=" dark:text-purple-300 text-gray-700">
                        {" "}
                        Live Site
                      </span>
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
          <div className="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
            <div className={` ${styles.imgRow} sticky top-0 p-4 w-full`}>
              <ul className="flex sm:flex-col overflow-hidden content-center justify-between">
                {images.map((img, index) => (
                  <div key={index} className={styles.imageContainer}>
                    <Reveal
                      key={index}
                      direction="left"
                      delayTime={0.25}
                      color="var(--primary-color)"
                    >
                      <Image
                        src={img}
                        alt={`Photo ${index + 1}`}
                        objectFit="contain"
                        className="pb-2 "
                        onClick={() => handleClick(index)}
                        loading="lazy"
                        placeholder="blur"
                        sizes="fill"
                      />
                    </Reveal>
                  </div>
                ))}
                {selectedImage !== null && (
                  <div className={styles.overlay} onClick={handleClose}>
                    <Reveal
                      direction="top"
                      delayTime={0}
                      color="var(--primary-color)"
                    >
                      <Image
                        src={images[selectedImage]}
                        alt={`Photo ${selectedImage + 1}`}
                        objectFit="contain"
                        loading="lazy"
                        placeholder="blur"
                        sizes="fill"
                      />
                    </Reveal>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectMoreCard;
