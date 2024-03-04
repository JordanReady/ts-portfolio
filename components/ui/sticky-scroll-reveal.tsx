"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Reveal from "../Reveal";
import CustomButton from "../CustomButton";
import styles from "./sticky-scroll-reveal.module.css";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    icon: StaticImageData;
    price?: string;
    lowExample?: string;
    highExample?: string;
    lowExampleUrl?: string;
    highExampleUrl?: string;
    contact?: boolean;
  }[];
}) => {
  console.log("Content:", content);
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.1 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const backgroundColors = [""];
  const linearGradients = [
    "linear-gradient(to top left, #9333ea, #3b82f6)",
    "linear-gradient(to bottom right, #654ea3, #eaafc8)",
    "linear-gradient(to bottom right, #3494E6, #EC6EAD)",
    "linear-gradient(to bottom right, #ffc0cb, #7303c0)",
    "linear-gradient(to top left, #9333ea, #3b82f6)",
    "linear-gradient(to bottom right, #3c1053, #ad5389)",
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className=" h-[35rem] overflow-y-auto flex justify-center relative space-x-0 xl:space-x-52 rounded-md mb-20"
      ref={ref}
    >
      <div className=" flex items-start">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className={`my-10 ${styles.serviceGroup}`}
            >
              <Reveal direction="top">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.8,
                  }}
                  className=" text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500"
                >
                  {item.title}
                </motion.h2>
              </Reveal>
              <Reveal color="grey" delayTime={0.05} direction="right">
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.6,
                  }}
                  className=" text-gray-400 dark:text-gray-500"
                >
                  {item.price}
                </motion.p>
              </Reveal>
              <Reveal color="grey" delayTime={0.1} direction="top">
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.6,
                  }}
                  className=""
                >
                  {item.description}
                </motion.p>
              </Reveal>
              {item.lowExample && item.highExample && (
                <>
                  <Reveal direction="top" delayTime={0.15}>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeCard === index ? 1 : 0.6 }}
                      className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500"
                    >
                      {" "}
                      <br />
                      Examples:
                    </motion.p>
                  </Reveal>
                  <Reveal direction="top" color="grey" delayTime={0.2}>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeCard === index ? 1 : 0.6 }}
                      className="pb-2"
                    >
                      {item.lowExample}
                    </motion.p>
                  </Reveal>
                  {item.lowExampleUrl && (
                    <Reveal direction="top" delayTime={0.25} style="my-2">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeCard === index ? 1 : 0.6 }}
                      >
                        <CustomButton
                          text="View Example"
                          link={item.lowExampleUrl}
                        />
                      </motion.div>
                    </Reveal>
                  )}
                  <Reveal direction="top" color="grey" delayTime={0.2}>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeCard === index ? 1 : 0.6 }}
                      className=""
                    >
                      {item.highExample}
                    </motion.p>
                  </Reveal>
                  {item.highExampleUrl && (
                    <Reveal direction="top" delayTime={0.25} style="my-4">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeCard === index ? 1 : 0.6 }}
                      >
                        <CustomButton
                          text="View Example"
                          link={item.highExampleUrl}
                        />
                      </motion.div>
                    </Reveal>
                  )}
                </>
              )}
              {item.contact && (
                <Reveal direction="top" delayTime={0.25} style="my-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeCard === index ? 1 : 0.6 }}
                  >
                    <CustomButton text="Contact" link="/contact" />
                  </motion.div>
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </div>
      <Reveal direction="left" delayTime={0.4} style="w-[420px] fixed ">
        <motion.div
          animate={{
            background: linearGradients[activeCard % linearGradients.length],
          }}
          className="hidden lg:block h-[400px] w-[400px] rounded-md bg-white  overflow-hidden fixed mt-10 "
        >
          <Image
            className=" opacity-30 dark:opacity-60 p-1"
            src={content[activeCard].icon}
            alt="Icon"
            fill={true}
            priority={true}
            sizes="(max-width: 600px) 100vw, 600px"
          />
        </motion.div>
      </Reveal>
    </motion.div>
  );
};
