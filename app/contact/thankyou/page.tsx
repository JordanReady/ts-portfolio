import React from "react";
import styles from "./ThankYou.module.css";
import CustomButton from "@/components/CustomButton";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import Logo from "@/public/LogoRound.png";
import Thanks from "@/public/ThankyouHeart.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thank you for reaching out! Your message has been received. Jordan Ready, a skilled software developer based in Dubuque, Iowa, will get back to you shortly.",
};

function ThankYou() {
  return (
    <div
      className={` ${styles.container} container grid grid-cols-1 md:grid-cols-2 gap-8 p-8 `}
    >
      {/* Left Column */}
      <div className="md:col-span-1 flex justify-center">
        <div
          className={`relative p-0.5 mb-2  overflow-hidden text-sm font-medium rounded-lg ${styles.contactContainer} bg-gradient-to-br from-purple-600 to-blue-500 `}
        >
          <div
            className={`max-w-md mx-auto relative px-5 py-2.5 ${styles.contactCard} bg-white dark:bg-slate-900 rounded-md group-hover:bg-opacity-0`}
          >
            <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-4xl mb-2 font-semibold">
              Jordan Ready
            </h2>
            <div
              className={`${styles.logo} relative p-0.5 mb-2  overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-purple-600 to-blue-500`}
            >
              <Image
                src={Logo}
                alt="Logo"
                width={130}
                height={130}
                className={`${styles.logoImg}  bg-white dark:bg-slate-900 `}
                loading="lazy"
                placeholder="blur"
                sizes="fill"
              />
            </div>
            <div className={styles.contactInfo}>
              <p className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-3xl mb-2 font-semibold">
                Personal Info
              </p>
              <p className=" mb-2">Software Developer</p>
              <p className=" mb-2">Location: Dubuque, IA</p>
              <p className=" mb-2">Phone: 563-593-3110</p>
              <p className=" mb-4">Email: jready112@gmail.com</p>
              <CustomButton
                link="https://www.linkedin.com/in/your-linkedin"
                text="LinkedIn"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:col-span-1 flex justify-center">
        <Reveal direction="top" delayTime={0} color="#9333ea">
          <div
            className={`relative p-0.5 mb-2  overflow-hidden text-sm font-medium rounded-lg ${styles.formContainer} bg-gradient-to-br from-purple-600 to-blue-500 `}
          >
            <div
              className={`max-w-md mx-auto relative px-5 py-2.5 ${styles.card} bg-white dark:bg-slate-900 rounded-md group-hover:bg-opacity-0`}
            >
              <Reveal direction="top" delayTime={0.2} color="#9333ea">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-4xl mb-2 font-semibold">
                  Thank You!
                </h2>
              </Reveal>
              <Reveal direction="top" delayTime={0.3} color="#9333ea">
                <div>
                  <Image
                    src={Thanks}
                    alt="Logo"
                    width={130}
                    height={130}
                    className={`${styles.heart}  bg-white dark:bg-slate-900 `}
                    loading="lazy"
                    placeholder="blur"
                    sizes="fill"
                  />
                </div>
              </Reveal>
              <Reveal direction="top" delayTime={0.4} color="grey">
                <p>Your message has been sent.</p>
              </Reveal>
              <Reveal direction="top" delayTime={0.5} color="grey">
                <p>I will get back to you as soon as possible!</p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default ThankYou;
