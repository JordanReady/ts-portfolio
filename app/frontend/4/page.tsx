import React from "react";
import PortfolioImg from "@/public/1MainPortfolioDisplay.png";
import PortfolioImg2 from "@/public/1MainPortfolioDisplay2.png";
import PortfolioImg3 from "@/public/1MainPortfolioDisplay3.png";
import PortfolioImg4 from "@/public/1MainPortfolioDisplay4.png";
import ProjectMoreCard from "@/components/ProjectMoreCard";
import Photo from "@/public/PagePortfolio.png";
import Photo2 from "@/public/PagePortfolio2.png";
import Photo3 from "@/public/PagePortfolio3.png";
import Photo4 from "@/public/PagePortfolio4.png";

function Project() {
  const imageArray = [
    PortfolioImg,
    PortfolioImg2,
    PortfolioImg3,
    PortfolioImg4,
  ];
  return (
    <ProjectMoreCard
      projectName="Portfolio Website"
      technologies={[
        {
          name: "TypeScript",
          description:
            "TypeScript enhances JavaScript by adding static typing, improving code quality and developer productivity.",
        },
        {
          name: "React",
          description:
            "React is a JavaScript library for building efficient and reusable user interfaces, widely used for single-page applications.",
        },
        {
          name: "Bootstrap",
          description:
            "Open-source CSS framework directed at responsive, mobile-first front-end web development.",
        },
        {
          name: "Typed.js",
          description:
            "Typed.js is a JavaScript library that creates a typewriter effect, enhancing textual animations on webpages.",
        },
      ]}
      image={imageArray}
      javascript={0}
      html={0}
      css={45}
      typeScript={55}
      overviewParagraphs={[
        `My personal portfolio website marks the initial iteration of a dynamic showcase for my diverse range of projects. Crafted using React JS, it delivers a modern and engaging user experience. The interface is designed with a touch of creativity, making project exploration a fun and intuitive journey.`,
        `Utilizing the power of React, the website seamlessly presents each project, offering an interactive platform for visitors to delve into my work. The design aesthetic prioritizes user-friendly navigation, ensuring a delightful experience while exploring showcased projects.`,
        `This portfolio site reflects my commitment to creating not only functional but also visually appealing web applications. The initial version allowed me to experiment with various design elements, laying the foundation for future iterations that will continue to evolve with new projects and improved user interactions.`,
      ]}
      images={[Photo, Photo2, Photo3, Photo4]}
      repoLink="https://github.com/JordanReady/my-portfolio-website"
      siteLink="https://jordanready.com"
    />
  );
}

export default Project;
