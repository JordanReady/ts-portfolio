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
            <div>
              And I'm a<span className={styles.spacer}></span>
              <span>
                {" "}
                <HeroTyped />
              </span>
            </div>
          </h3>
        </Reveal>
        <Reveal direction="left" delayTime={0.6} color="gray">
          <p>
            My expertise lies in both front-end and back-end technologies, which
            allows me to tackle projects with a comprehensive perspective. I
            believe in leveraging the latest tools and frameworks to create
            efficient, scalable, and user-friendly applications. Welcome to my
            website, and thank you for taking the time to learn more about me.
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
                link="https://github.com/JordanReady"
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
        <div className="absolute top-14 -left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl dark:opacity-10 opacity-40 animate-blob"></div>
        <div className="absolute top-15 -right-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-2xl dark:opacity-10 opacity-40 animate-blob animation-delay-2"></div>
        <div className="absolute bottom-5 left-20 w-96 h-96 bg-violet-950 rounded-full mix-blend-multiply filter blur-2xl dark:opacity-10 opacity-40 animate-blob animation-delay-4"></div>

        <Reveal duration={1} delayTime={0}>
          <Image
            loading="lazy"
            placeholder="blur"
            sizes="fill"
            src={HeroImage}
            alt="Logo Image"
          />
        </Reveal>
      </div>
    </div>
  );
}
