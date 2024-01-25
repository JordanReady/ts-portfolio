import React from "react";
import styles from "./Review.module.css";
import Image from "next/image";
import Img from "@/public/LogoRound.png";
import { Star } from "lucide-react";
import Reveal from "./Reveal";

function Review() {
  return (
    <div
      className={`${styles.card} bg-white dark:bg-gray-800 p-0.5 relative  mb-2  overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 shadow-md`}
    >
      <div className="bg-white p-6 rounded-md dark:bg-slate-900">
        <div className={styles.topRow}>
          <div
            className={`${styles.logo} relative p-0.5 mb-2  overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 shadow-md`}
          >
            <Reveal direction="left" delayTime={0.4}>
              <Image
                loading="lazy"
                placeholder="blur"
                sizes="fill"
                src={Img}
                alt="Logo Image"
                width={125}
                height={125}
                className={`${styles.logoImg}  bg-white dark:bg-slate-900 `}
              />
            </Reveal>
          </div>
          <div className={styles.nameTitleGroup}>
            <Reveal direction="right" delayTime={0.5}>
              <h2 className="text-3xl font-semibold mb-1 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
                Jordan Ready
              </h2>
            </Reveal>
            <Reveal color="grey" direction="right" delayTime={0.6}>
              <p className=" mb-2">Web Developer</p>
            </Reveal>
            <div className={`${styles.stars} mb-2 flex`}>
              <Reveal color="#9333ea" direction="top" delayTime={0.625}>
                <Star color="#9333ea" />
              </Reveal>
              <Reveal color="#7540ee" direction="top" delayTime={0.65}>
                <Star color="#7540ee" />
              </Reveal>
              <Reveal color="#615cfb" direction="top" delayTime={0.675}>
                <Star color="#615cfb" />
              </Reveal>
              <Reveal color="#4d74fa" direction="top" delayTime={0.7}>
                <Star color="#4d74fa" />
              </Reveal>
              <Reveal color="#3b82f6" direction="top" delayTime={0.725}>
                <Star color="#3b82f6" />
              </Reveal>
            </div>
          </div>
        </div>
        <Reveal color="grey" direction="top" delayTime={0.7}>
          <p className="mt-3">
            I'm a fullstack web developer on a mission to create web apps that
            are not just vissually appealing, but also super user-friendly.
          </p>
        </Reveal>
      </div>
    </div>
  );
}

export default Review;
