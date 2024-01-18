import React, { useState, useEffect } from "react";
import styles from "./ServiceTypeControls.module.css";
import { Button } from "./ui/button";
import Reveal from "./Reveal";

interface ServiceTypeControlsProps {
  onTypeChange: (type: string) => void;
  selectedType: string;
}

function ServiceTypeControls({
  onTypeChange,
  selectedType,
}: ServiceTypeControlsProps) {
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
        <h3>Service Type</h3>
      </Reveal>
      <div className={styles.buttonRow}>
        <div className={styles.button}>
          <Reveal delayTime={0.1}>
            <Button
              onClick={() => handleTypeChange("all")}
              className={`shadow-purple-400 dark:shadow-purple-700 shadow-sm border gap-2 ${
                localSelectedType === "all"
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
              onClick={() => handleTypeChange("contract")}
              className={`shadow-purple-400 dark:shadow-purple-700 shadow-sm border gap-2 ${
                localSelectedType === "contract"
                  ? "active dark:bg-slate-700 opacity-80 bg-slate-100"
                  : ""
              }`}
              variant={"outline"}
            >
              Contract
            </Button>
          </Reveal>
        </div>
        <div className={styles.button}>
          <Reveal delayTime={0.3}>
            <Button
              onClick={() => handleTypeChange("design")}
              className={`shadow-purple-400 dark:shadow-purple-700 shadow-sm border gap-2 ${
                localSelectedType === "design"
                  ? "active dark:bg-slate-700 opacity-80 bg-slate-100"
                  : ""
              }`}
              variant={"outline"}
            >
              Website Develop
            </Button>
          </Reveal>
        </div>
        <div className={styles.button}>
          <Reveal delayTime={0.4}>
            <Button
              onClick={() => handleTypeChange("sass")}
              className={`shadow-purple-400 dark:shadow-purple-700 shadow-sm border gap-2 ${
                localSelectedType === "sass"
                  ? "active dark:bg-slate-700 opacity-80 bg-slate-100"
                  : ""
              }`}
              variant={"outline"}
            >
              Project / Sass
            </Button>
          </Reveal>
        </div>
        {/* ... other buttons */}
      </div>
    </div>
  );
}

export default ServiceTypeControls;
