"use client";
import Image from "next/image";
import styles from "./HomePage.module.css"; // Assuming you have a CSS module file
import HeroImage from "@/public/MyLogo.png";
import HeroTyped from "@/components/HeroTyped";
import Reveal from "@/components/Reveal";
import CustomButton from "@/components/CustomButton";

export default function Home() {
  return (
    <div
      className={`${styles.pageContainer} container grid grid-cols-1 md:grid-cols-2 gap-8`}
    >
      <div className={`${styles.heroContent}`}>
        <Reveal color="gray" direction="top">
          <h3 className={``}>Hello there! My name is</h3>
        </Reveal>
        <Reveal delayTime={0.2} direction="right">
          <h1
            className={` text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 `}
          >
            Jordan Ready
          </h1>
        </Reveal>
        <Reveal direction="bottom" delayTime={0.4} color="gray">
          <h3 className={` ${styles.typedContainer}`}>
            <span className={styles.imText}>And I'm a </span>
          </h3>
        </Reveal>
        <Reveal direction="bottom" delayTime={0.5} color="gray">
          <h3 className={` ${styles.typedContainer}`}>
            <span className={styles.spacer}></span>
            <span className="sr-only">
              Web Developer, Software Engineer, Full-stack Web Developer,
              Website Creator
            </span>
            <span>
              <HeroTyped />
            </span>
          </h3>
        </Reveal>
        <Reveal direction="left" delayTime={0.6} color="gray">
          <p>
            I seamlessly blend front-end and back-end technologies to deliver
            holistic solutions for diverse projects. My commitment to excellence
            drives me to harness the power of cutting-edge tools and frameworks,
            ensuring the creation of efficient, scalable, and user-friendly
            applications. Let's turn your ideas into exceptional web solutions!
          </p>
        </Reveal>

        <div className={styles.heroIcons}>
          <div className={styles.button}>
            <Reveal delayTime={0.8}>
              <CustomButton
                link="https://github.com/JordanReady"
                text="Github"
              />
            </Reveal>
          </div>
          <div className={styles.button}>
            <Reveal delayTime={0.8}>
              <CustomButton
                link="https://www.linkedin.com/in/jordan-ready-a97021268"
                text="LinkedIn"
              />
            </Reveal>
          </div>
          <div className={styles.button}>
            <Reveal delayTime={0.8}>
              <CustomButton link="/contact" text="Need a Website?" />
            </Reveal>
          </div>
        </div>
      </div>
      <div className={`${styles.heroImg}`}>
        <span className={styles.blobs}>
          <div className="absolute top-14 -left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl dark:opacity-10 opacity-40 animate-blob"></div>
          <div className="absolute top-15 -right-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-2xl dark:opacity-10 opacity-40 animate-blob animation-delay-2"></div>
          <div className="absolute bottom-5 left-20 w-96 h-96 bg-violet-950 rounded-full mix-blend-multiply filter blur-2xl dark:opacity-10 opacity-40 animate-blob animation-delay-4"></div>
        </span>

        <Reveal duration={1} delayTime={0}>
          <>
            <Image
              loading="lazy"
              placeholder="blur"
              sizes="fill"
              src={HeroImage}
              alt="Jordan Ready AI created animated logo"
            />
          </>
        </Reveal>
      </div>
    </div>
  );
}
