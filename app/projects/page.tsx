"use client";
import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import ProjectTypeControls from "@/components/ProjectTypeControls";
import { projects } from "@/components/projectData";
import { sendGTMEvent } from "@next/third-parties/google";

function Projects() {
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredProjects =
    selectedType === "all"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  useEffect(() => {
    sendGTMEvent({
      event: "pageView",
      value: "Project Page",
    });
  }, []);

  return (
    <div className="container">
      <ProjectTypeControls selectedType="all" onTypeChange={setSelectedType} />
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

export default Projects;
