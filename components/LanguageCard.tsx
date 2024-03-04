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
        className={`${styles.card}  bg-slate-100 shadow-sm dark:shadow-grey-200 shadow-grey-800 dark:bg-gray-900 w-full border-b md:border-0 p-1`}
      >
        <Image src={img} alt="Logo Image" />
        <h1>{language}</h1>
        <Progress
          color={color}
          value={progress}
          className="dark:bg-white00 bg-slate-200 text-white"
        />
      </div>
    </div>
  );
}

export default LanguageCard;
