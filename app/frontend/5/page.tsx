import React from "react";
import BridalImg from "@/public/1MainBridalDisplay.png";
import BridalImg2 from "@/public/1MainBridalDisplay2.png";
import BridalImg3 from "@/public/1MainBridalDisplay3.png";
import BridalImg4 from "@/public/1MainBridalDisplay4.png";
import Photo from "@/public/PageBridal.png";
import Photo2 from "@/public/PageBridal2.png";
import Photo3 from "@/public/PageBridal3.png";
import Photo4 from "@/public/PageBridal4.png";
import ProjectMoreCard from "@/components/ProjectMoreCard";

function Project() {
  const imageArray = [BridalImg, BridalImg2, BridalImg3, BridalImg4];

  return (
    <ProjectMoreCard
      projectName="Local Business Rebrand"
      technologies={[
        {
          name: "React",
          description: "JavaScript library for building user interfaces.",
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
      image={imageArray}
      javascript={65}
      html={0}
      css={35}
      typeScript={0}
      overviewParagraphs={[
        `Embarking on a mission to revitalize local businesses, I took the initiative to find a deserving candidate for a complete rebrand and UI/UX overhaul. This venture was more than a project; it was a proactive demonstration of what a carefully crafted digital transformation could do for a local establishment.`,
        `The chosen business became the canvas for my creativity and technical expertise. The objective was clear: to provide a comprehensive rebranding, coupled with a complete overhaul of the user interface and experience. This approach aimed not only to refresh the brand's visual identity but also to optimize the online journey for its customers.`,
        `What started as an independent effort to showcase my capabilities soon evolved into a collaborative partnership. Working closely with the local business, we fine-tuned their vision, incorporating their insights and aspirations into the redesign process. The result was a website that not only met their expectations but exceeded them.`,
      ]}
      images={[Photo, Photo2, Photo3, Photo4]}
      repoLink="https://github.com/JordanReady/zazous-bridal-site"
      siteLink="https://jordanready.github.io/zazous-bridal-site/"
    />
  );
}

export default Project;
