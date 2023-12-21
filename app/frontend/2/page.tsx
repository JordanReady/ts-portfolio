import React from "react";
import YoutubeImg from "@/public/MainPageYoutube.png";
import ProjectMoreCard from "@/components/ProjectMoreCard";

function Project() {
  return (
    <ProjectMoreCard
      projectName="Youtube Clone"
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
          name: "Material Ui",
          description:
            " Material-UI is a popular React UI framework that implements Google's Material Design guidelines.",
        },
        {
          name: "Rapid API",
          description:
            "RapidAPI is a platform that allows developers to discover, connect, and manage APIs. This made use of an api to fetch data from youtube so it could be displayed in the app.",
        },
      ]}
      image={YoutubeImg}
    />
  );
}

export default Project;
