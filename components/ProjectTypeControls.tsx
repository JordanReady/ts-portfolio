import React, { useState } from "react";
import styles from "./ProjectTypeControls.module.css";
import { Button } from "./ui/button";
import Reveal from "./Reveal";

interface ProjectTypeControlsProps {
  onTypeChange: (type: string) => void;
}

function ProjectTypeControls({ onTypeChange }: ProjectTypeControlsProps) {
  const [selectedType, setSelectedType] = useState("all");

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    onTypeChange(type);
  };

  return (
    <div className={styles.container}>
      <Reveal delayTime={0}>
        <h3>Project Type</h3>
      </Reveal>
      <div className={styles.buttonRow}>
        <div className={styles.button}>
          <Reveal delayTime={0.1}>
            <Button
              onClick={() => handleTypeChange("all")}
              className={`shadow-purple-400 dark:shadow-purple-700 shadow-sm border gap-2 ${
                selectedType === "all"
                  ? "active dark:bg-slate-700 opacity-80 bg-slate-100"
                  : ""
              }`}
              variant={"outline"}
            >
              All
            </Button>
          </Reveal>
        </div>
        <div className={styles.button}>
          <Reveal delayTime={0.2}>
            <Button
              onClick={() => handleTypeChange("production-sites")}
              className={`shadow-purple-400 dark:shadow-purple-700 shadow-sm border gap-2 ${
                selectedType === "production-sites"
                  ? "active dark:bg-slate-700 opacity-80 bg-slate-100"
                  : ""
              }`}
              variant={"outline"}
            >
              Production
            </Button>
          </Reveal>
        </div>
        <div className={styles.button}>
          <Reveal delayTime={0.3}>
            <Button
              onClick={() => handleTypeChange("fullstack")}
              className={`shadow-purple-400 dark:shadow-purple-700 shadow-sm border gap-2 ${
                selectedType === "fullstack"
                  ? "active dark:bg-slate-700 opacity-80 bg-slate-100"
                  : ""
              }`}
              variant={"outline"}
            >
              Fullstack
            </Button>
          </Reveal>
        </div>
        <div className={styles.button}>
          <Reveal delayTime={0.4}>
            <Button
              onClick={() => handleTypeChange("frontend")}
              className={`shadow-purple-400 dark:shadow-purple-700 shadow-sm border gap-2 ${
                selectedType === "frontend"
                  ? "active dark:bg-slate-700 opacity-80 bg-slate-100"
                  : ""
              }`}
              variant={"outline"}
            >
              Frontend
            </Button>
          </Reveal>
        </div>
        {/* ... other buttons */}
      </div>
    </div>
  );
}

export default ProjectTypeControls;
