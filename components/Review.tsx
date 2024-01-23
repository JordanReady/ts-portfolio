import React from "react";
import styles from "./Review.module.css";
import Image from "next/image";
import Img from "@/public/LogoRound.png";
import { Star } from "lucide-react";

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
            <Image
              loading="lazy"
              placeholder="blur"
              sizes="fill"
              src={Img}
              alt="Logo Image"
              width={125}
              height={125}
              className={`${styles.logoImg}  bg-white dark:bg-slate-950 `}
            />
          </div>
          <div className={styles.nameTitleGroup}>
            <h2 className="text-3xl font-semibold mb-1 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
              Jordan Ready
            </h2>
            <p className=" mb-2">Web Developer</p>
            <div className={`${styles.stars} mb-2 flex`}>
              <Star color="#9333ea" />
              <Star color="#7540ee" />
              <Star color="#615cfb" />
              <Star color="#4d74fa" />
              <Star color="#3b82f6" />
            </div>
          </div>
        </div>
        <p className="mt-3">
          I'm a fullstack web developer on a mission to create web apps that are
          not just vissually appealing, but also super user-friendly.
        </p>
      </div>
    </div>
  );
}

export default Review;
