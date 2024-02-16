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
        <h3 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 font-semibold mt-5 mb-2">
          {"< Service Type />"}
        </h3>
      </Reveal>
      <div className={styles.buttonRow}>
        <div className={styles.button}>
          <Reveal delayTime={0.1}>
            <Button
              onClick={() => handleTypeChange("all")}
              className={`relative mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white ${
                localSelectedType === "all"
                  ? "active dark:bg-slate-700 opacity-80 bg-slate-100"
                  : ""
              }`}
              variant={"outline"}
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
              onClick={() => handleTypeChange("contract")}
              className={`relative mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white ${
                localSelectedType === "contract"
                  ? "active dark:bg-slate-700 opacity-80 bg-slate-100"
                  : ""
              }`}
              variant={"outline"}
            >
              <span
                className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md dark:text-white text-black active:text-white hover:text-white group-hover:bg-opacity-0 ${
                  localSelectedType === "contract" ? `${styles.active}` : ""
                }`}
              >
                Contract
              </span>
            </Button>
          </Reveal>
        </div>
        <div className={styles.button}>
          <Reveal delayTime={0.3}>
            <Button
              onClick={() => handleTypeChange("design")}
              className={`relative mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white ${
                localSelectedType === "design"
                  ? "active dark:bg-slate-700 opacity-80 bg-slate-100"
                  : ""
              }`}
              variant={"outline"}
            >
              <span
                className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md dark:text-white text-black active:text-white hover:text-white group-hover:bg-opacity-0 ${
                  localSelectedType === "design" ? `${styles.active}` : ""
                }`}
              >
                Create Website
              </span>
            </Button>
          </Reveal>
        </div>
        <div className={styles.button}>
          <Reveal delayTime={0.4}>
            <Button
              onClick={() => handleTypeChange("sass")}
              className={`relative mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white ${
                localSelectedType === "sass"
                  ? "active dark:bg-slate-700 opacity-80 bg-slate-100"
                  : ""
              }`}
              variant={"outline"}
            >
              <span
                className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md dark:text-white text-black active:text-white hover:text-white group-hover:bg-opacity-0 ${
                  localSelectedType === "sass" ? `${styles.active}` : ""
                }`}
              >
                Project / SASS
              </span>
            </Button>
          </Reveal>
        </div>
        {/* ... other buttons */}
      </div>
    </div>
  );
}

export default ServiceTypeControls;
