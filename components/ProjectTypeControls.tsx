import React, { useState, useEffect } from "react";
import styles from "./ProjectTypeControls.module.css";
import { Button } from "./ui/button";
import Reveal from "./Reveal";
import CustomButton from "./CustomButton";

interface ProjectTypeControlsProps {
  onTypeChange: (type: string) => void;
  selectedType: string;
}

function ProjectTypeControls({
  onTypeChange,
  selectedType,
}: ProjectTypeControlsProps) {
  const [localSelectedType, setLocalSelectedType] = useState(selectedType);

  useEffect(() => {
    setLocalSelectedType(selectedType);
  }, [selectedType]);

  const handleTypeChange = (type: string) => {
    setLocalSelectedType(type);
    onTypeChange(type);
  };

  return (
    <div className={styles.container}>
      <Reveal delayTime={0}>
        <h3 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 font-semibold">
          Project Type
        </h3>
      </Reveal>
      <div className={styles.buttonRow}>
        <div className={styles.button}>
          <Reveal delayTime={0.1}>
            <Button
              onClick={() => handleTypeChange("all")}
              className={`relative mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white ${
                localSelectedType === "all" ? `${styles.active} ` : ""
              }`}
            >
              <span
                className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md dark:text-white text-black active:text-white hover:text-white group-hover:bg-opacity-0 ${
                  localSelectedType === "all" ? `${styles.active}` : ""
                }`}
              >
                All
              </span>
            </Button>
          </Reveal>
        </div>
        <div className={styles.button}>
          <Reveal delayTime={0.2}>
            <Button
              onClick={() => handleTypeChange("production-sites")}
              className={`relative mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white ${
                localSelectedType === "production-sites"
                  ? `${styles.active} `
                  : ""
              }`}
            >
              <span
                className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md dark:text-white text-black active:text-white hover:text-white group-hover:bg-opacity-0 ${
                  localSelectedType === "production-sites"
                    ? `${styles.active}`
                    : ""
                }`}
              >
                Freelance
              </span>
            </Button>
          </Reveal>
        </div>

        <div className={styles.button}>
          <Reveal delayTime={0.3}>
            <Button
              onClick={() => handleTypeChange("fullstack")}
              className={`relative mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white ${
                localSelectedType === "fullstack" ? `${styles.active} ` : ""
              }`}
            >
              <span
                className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md dark:text-white text-black active:text-white hover:text-white group-hover:bg-opacity-0 ${
                  localSelectedType === "fullstack" ? `${styles.active}` : ""
                }`}
              >
                Fullstack
              </span>
            </Button>
          </Reveal>
        </div>

        <div className={styles.button}>
          <Reveal delayTime={0.4}>
            <Button
              onClick={() => handleTypeChange("frontend")}
              className={`relative mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white ${
                localSelectedType === "frontend" ? `${styles.active} ` : ""
              }`}
            >
              <span
                className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md dark:text-white text-black active:text-white hover:text-white group-hover:bg-opacity-0 ${
                  localSelectedType === "frontend" ? `${styles.active}` : ""
                }`}
              >
                Frontend
              </span>
            </Button>
          </Reveal>
        </div>
        {/* ... other buttons */}
      </div>
    </div>
  );
}

export default ProjectTypeControls;
