import React from "react";
import styles from "./ProjectCard.module.css";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface ProjectCardProps {
  type: string;
  number: number;
  name: string;
  description: string;
  technologies: string;
  background: StaticImageData;
  logos: StaticImageData[]; // Change to array
  moreButton: StaticImageData;
}

function ProjectCard({
  type,
  number,
  name,
  description,
  technologies,
  background,
  logos,
  moreButton,
}: ProjectCardProps) {
  const backgroundStyle = {
    backgroundImage: `url(${background.src})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const techArray = technologies.split(",");

  return (
    <Link href={`/${type}/${number}`}>
      <div
        className={`${styles.projectCard} shadow-purple-300 dark:shadow-purple-700  shadow-sm border border-b-1 gap-2`}
        style={backgroundStyle}
      >
        <div className={styles.content}>
          {/* <h2 className={`${styles.number}`}>0{number}</h2>
          <h2 className={`${styles.numberMain}`}>0{number}</h2> */}
          <div className={`${styles.innerBox}`}>
            <h3 className={`${styles.name}`}>{name}</h3>
            <p
              className={` text-slate-700 dark:text-gray-100 ${styles.description}`}
            >
              {description}
            </p>
          </div>
          <div className={`${styles.technologies}`}>
            <strong>Technologies:</strong>
            {techArray.map((tech, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-100">
                {tech}
              </p>
            ))}
          </div>
          <div className={styles.pages}>
            {logos.map((logo, index) => (
              <Image
                key={index}
                className={`${styles.img}`}
                src={logo}
                alt={`Logo ${index + 1}`}
                loading="lazy"
                placeholder="blur"
                sizes="fill"
              />
            ))}
          </div>
          {/* <Image
            className={`${styles.btn}`}
            src={moreButton}
            alt="More Button"
          ></Image> */}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
