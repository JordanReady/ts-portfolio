"use client";
import Image from "next/image";
import styles from "./HomePage.module.css"; // Assuming you have a CSS module file
import HeroImage from "@/public/MyLogo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroTyped from "@/components/HeroTyped";

export default function Home() {
  return (
    <div className={`container grid grid-cols-1 md:grid-cols-2 gap-8`}>
      <div className={`${styles.heroContent}`}>
        <h3 className={``}>Hello there! My name is</h3>
        <h1 className={` text-purple-700 `}>Jordan Ready</h1>
        <h3 className={` ${styles.typedContainer}`}>
          <div>
            And I'm a
            <span>
              {" "}
              <HeroTyped />
            </span>
          </div>
        </h3>
        <p>
          My expertise lies in both front-end and back-end technologies, which
          allows me to tackle projects with a comprehensive perspective. I
          believe in leveraging the latest tools and frameworks to create
          efficient, scalable, and user-friendly applications. Welcome to my
          website, and thank you for taking the time to learn more about me.
        </p>
        <div className={styles.heroIcons}>
          <div className={styles.button}>
            <Button
              id="github"
              className="shadow-purple-300 dark:shadow-purple-700  shadow-sm border border-b-1 gap-2"
              variant={"outline"}
            >
              <Link href="https://github.com/JordanReady" target="blank">
                Github
              </Link>
            </Button>
          </div>
          <div className={styles.button}>
            <Button
              id="linkedin"
              className="shadow-purple-300 dark:shadow-purple-700  shadow-sm border border-b-1 gap-2"
              variant={"outline"}
            >
              <Link href="https://github.com/JordanReady" target="blank">
                LinkedIn
              </Link>
            </Button>
          </div>
          <div className={styles.button}>
            <Button
              id="website"
              className="shadow-purple-300 dark:shadow-purple-700  shadow-sm border border-b-1 gap-2"
              variant={"outline"}
            >
              <Link href="/contact" target="blank">
                Need a Website?
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className={`${styles.heroImg}`}>
        <div className={styles.heroImg}>
          <Image src={HeroImage} alt="Logo Image"></Image>
        </div>
      </div>
    </div>
  );
}
