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
import CustomButton from "./CustomButton";

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
  performance?: StaticImageData;
  performanceOld?: StaticImageData;
  performanceNew?: StaticImageData;
  performanceText?: string[];
  performanceOldText?: string[];
  performanceNewText?: string[];
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
  performance,
  performanceText,
  performanceOld,
  performanceNew,
  performanceOldText,
  performanceNewText,
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
              <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-5xl p-4 font-semibold">
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
              <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-5xl p-4 font-semibold">
                Technologies
              </h2>
            </Reveal>

            <div className={styles.techRow}>
              <ol
                className={`relative border-s border-gray-200 dark:border-gray-700 ${styles.fadeListIn}`}
              >
                {technologies.map((tech) => (
                  <>
                    <div className="absolute w-3 h-3 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-3 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div key={tech.name}>
                      <Reveal delayTime={0.35} color="var(--primary-color)">
                        <p
                          className={` ${styles.techName} text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-2x px-4 font-semibold`}
                        >
                          {tech.name}
                        </p>
                      </Reveal>
                      {/* Technology description */}
                      <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <Reveal direction="top" delayTime={0.75} color="grey">
                        <p className=" text-slate-700 dark:text-gray-300 px-4 text-xl pb-3">
                          {tech.description}
                        </p>
                      </Reveal>
                    </div>
                  </>
                ))}
              </ol>
            </div>
            <Reveal
              direction="top"
              delayTime={0.5}
              color="var(--primary-color)"
            >
              <div className={` ${styles.languageBreakdownRow} `}>
                <h2 className="text-2xl p-4 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 font-semibold">
                  Language Breakdown
                </h2>
                <div className={` ${styles.barLogo} text-blue-500`}>
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
        <div
          className={` ${styles.overview} flex flex-col sm:flex-row flex-grow overflow-hidden`}
        >
          <section
            role="main"
            className="w-full h-full flex-grow overflow-none"
          >
            <Reveal
              direction="right"
              delayTime={0.25}
              color="var(--primary-color)"
            >
              <h2 className="text-6xl p-4 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 font-semibold">
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
                <CustomButton link={repoLink} text="Github Repo" />
              </Reveal>
              <Reveal
                direction="top"
                delayTime={0.25}
                color="var(--primary-color)"
              >
                <CustomButton link={siteLink} text="Live Site" />
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

        {/* Performance Section */}
        {(performanceOld || performanceNew || performance) && (
          <section
            role="main"
            className={`${styles.performance} w-full h-full flex-grow  overflow-auto`}
          >
            <Reveal
              direction="bottom"
              delayTime={0.25}
              color="var(--primary-color)"
            >
              <h2 className="text-6xl p-4 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 font-semibold">
                Performance
              </h2>
            </Reveal>
            {/* Custom Performance Section */}
            {performance && (
              <div>
                {performanceText && (
                  <div className={styles.performanceText}>
                    {performanceText.map((paragraph, index) => (
                      <Reveal
                        key={index}
                        direction="right"
                        delayTime={0.35}
                        color="grey"
                      >
                        <p className="text-xl text-slate-700 dark:text-gray-300 px-4">
                          {paragraph}
                        </p>
                      </Reveal>
                    ))}
                  </div>
                )}
                <Reveal delayTime={0.35} color="var(--primary-color)">
                  <Image
                    src={performance}
                    alt={`Performance image`}
                    objectFit="contain"
                    loading="lazy"
                    placeholder="blur"
                    sizes="fill"
                    className={`${styles.performanceImg} shadow-md`}
                  />
                </Reveal>
              </div>
            )}

            {/* Old Performance Section */}
            {performanceOld && (
              <div>
                <Reveal delayTime={0.25} color="var(--primary-color)">
                  <h3 className="text-2xl p-4 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 font-semibold">
                    Old Performance Numbers
                  </h3>
                </Reveal>
                {performanceOldText && (
                  <div className={styles.performanceText}>
                    {performanceOldText.map((paragraph, index) => (
                      <Reveal
                        key={index}
                        direction="right"
                        delayTime={0.35}
                        color="grey"
                      >
                        <p className="text-xl text-slate-700 dark:text-gray-300 px-4">
                          {paragraph}
                        </p>
                      </Reveal>
                    ))}
                  </div>
                )}
                <Reveal delayTime={0.35} color="var(--primary-color)">
                  <Image
                    src={performanceOld}
                    alt={`Old performance image`}
                    objectFit="contain"
                    loading="lazy"
                    placeholder="blur"
                    sizes="fill"
                    className={`${styles.performanceImg} shadow-md`}
                  />
                </Reveal>
              </div>
            )}

            {/* New Performance Section */}
            {performanceNew && (
              <div>
                <Reveal delayTime={0.25} color="var(--primary-color)">
                  <h3 className="text-2xl p-4 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 font-semibold">
                    New Performance Numbers
                  </h3>
                </Reveal>
                {performanceNewText && (
                  <div className={styles.performanceText}>
                    {performanceNewText.map((paragraph, index) => (
                      <Reveal
                        key={index}
                        direction="right"
                        delayTime={0.35}
                        color="grey"
                      >
                        <p className="text-xl text-slate-700 dark:text-gray-300 px-4">
                          {paragraph}
                        </p>
                      </Reveal>
                    ))}
                  </div>
                )}
                <Reveal delayTime={0.35} color="var(--primary-color)">
                  <Image
                    src={performanceNew}
                    alt={`New performance image`}
                    objectFit="contain"
                    loading="lazy"
                    placeholder="blur"
                    sizes="fill"
                    className={`${styles.performanceImg} shadow-md`}
                  />
                </Reveal>
              </div>
            )}
          </section>
        )}
      </div>
    </>
  );
}

export default ProjectMoreCard;
