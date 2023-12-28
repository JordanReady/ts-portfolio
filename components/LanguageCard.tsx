"use client";
import React, { useEffect, useState } from "react";
import styles from "./LanguageCard.module.css";
import Image, { StaticImageData } from "next/image";
import { Progress } from "@/components/ui/progress";

interface LanguageCardProps {
  img: StaticImageData;
  language: string;
  percentage: number;
  color: string;
  delay?: number;
}

function LanguageCard({
  img,
  language,
  percentage,
  color,
  delay,
}: LanguageCardProps) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), delay);
    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.card} bg-white shadow-sm dark:shadow-purple-700 shadow-purple-400 dark:bg-gray-900 w-full border-b md:border-0`}
      >
        <Image src={img} alt="Logo Image" />
        <h1>{language}</h1>
        <Progress
          color={color}
          value={progress}
          className="dark:bg-white00  bg-purple-200 text-white"
        />
      </div>
    </div>
  );
}

export default LanguageCard;
