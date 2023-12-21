"use client";
import Image from "next/image";
import styles from "./HomePage.module.css"; // Assuming you have a CSS module file
import HeroImage from "@/public/MyLogo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroTyped from "@/components/HeroTyped";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className={`container grid grid-cols-1 md:grid-cols-2 gap-8`}>
      <div className={`${styles.heroContent}`}>
        <Reveal color="gray" direction="top">
          <h3 className={``}>Hello there! My name is</h3>
        </Reveal>
        <Reveal delayTime={0.2} direction="right">
          <h1 className={` text-purple-700 `}>Jordan Ready</h1>
        </Reveal>
        <Reveal direction="bottom" delayTime={0.4} color="gray">
          <h3 className={` ${styles.typedContainer}`}>
            <div>
              And I'm a
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
              <Button
                id="github"
                className="shadow-purple-400 dark:shadow-purple-700 shadow-sm border gap-2"
                variant={"outline"}
              >
                <Link href="https://github.com/JordanReady" target="blank">
                  Github
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className={styles.button}>
            <Reveal delayTime={1}>
              <Button
                id="linkedin"
                className="shadow-purple-400 dark:shadow-purple-700 shadow-sm border gap-2"
                variant={"outline"}
              >
                <Link href="https://github.com/JordanReady" target="blank">
                  LinkedIn
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className={styles.button}>
            <Reveal delayTime={1.2}>
              <Button
                id="website"
                className="shadow-purple-400 dark:shadow-purple-700 shadow-sm border gap-2"
                variant={"outline"}
              >
                <Link href="/contact" target="blank">
                  Need a Website?
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
      <div className={`${styles.heroImg}`}>
        <Reveal duration={1} delayTime={0.5}>
          <div className={styles.heroImg}>
            <Image src={HeroImage} alt="Logo Image"></Image>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
