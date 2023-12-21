import React from "react";
import AirBnb from "@/public/MainPageNews.png";
import ProjectMoreCard from "@/components/ProjectMoreCard";

function Project() {
  return (
    <ProjectMoreCard
      projectName="AirBnb News Clone"
      technologies={[
        {
          name: "React",
          description: "JavaScript library for building user interfaces.",
        },
        {
          name: "HTML",
          description: "Standard markup language for creating web pages.",
        },
        {
          name: "CSS",
          description:
            "Style sheet language used for describing the look and formatting of a document written in HTML.",
        },
        {
          name: "Bootstrap",
          description:
            "Open-source CSS framework directed at responsive, mobile-first front-end web development.",
        },
      ]}
      image={AirBnb}
    />
  );
}

export default Project;
