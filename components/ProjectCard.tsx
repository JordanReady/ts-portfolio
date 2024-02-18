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
    <Link className={`${styles.link}`} href={`/${type}/${number}`}>
      <div
        className={` ${styles.border} relative p-0.5 mb-2  overflow-hidden text-sm font-medium bg-gradient-to-br from-purple-600 to-blue-500 `}
      >
        <div className={` ${styles.borderBg} bg-white dark:bg-slate-950`}>
          <div className={`${styles.projectCard}  `} style={backgroundStyle}>
            <div className={styles.content}>
              <div className={`${styles.innerBox}`}>
                <h3
                  className={`${styles.name} text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 pb-0`}
                >
                  {name}
                </h3>
                <p
                  className={` text-slate-700 dark:text-gray-100 ${styles.description}`}
                >
                  {description}
                </p>
              </div>
              <div className={`${styles.technologies}`}>
                <strong className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
                  Technologies:
                </strong>
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
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
