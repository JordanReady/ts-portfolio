"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/projects/Projects.module.css";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/components/projectData";
import ProjectTypeControls from "@/components/ProjectTypeControls";
import { sendGTMEvent } from "@next/third-parties/google";

function FrontEnd() {
  const [selectedType, setSelectedType] = useState<string>("frontend");

  useEffect(() => {
    sendGTMEvent({
      event: "pageView",
      value: "Project Page(frontend)",
    });
  }, []);

  const filteredProjects =
    selectedType === "all"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  return (
    <div className="container">
      <ProjectTypeControls
        selectedType="frontend"
        onTypeChange={setSelectedType}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-4">
        {filteredProjects.map((project, index) => (
          <Reveal
            key={index}
            direction={index % 2 === 0 ? "right" : "left"}
            width="100%"
            delayTime={0.2 * index}
          >
            <div className={`${styles.card} mt-4`}>
              <ProjectCard {...project} />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default FrontEnd;
