import React from "react";
import ZazousImg from "@/public/1MainZazousDisplay.png";
import ZazousImg2 from "@/public/1MainZazousDisplay2.png";
import ZazousImg3 from "@/public/1MainZazousDisplay3.png";
import ZazousImg4 from "@/public/1MainZazousDisplay4.png";
import Photo from "@/public/PageZazous.png";
import Photo2 from "@/public/PageZazous2.png";
import Photo3 from "@/public/PageZazous3.png";
import Photo4 from "@/public/PageZazous4.png";
import ProjectMoreCard from "@/components/ProjectMoreCard";

function Project() {
  const imageArray = [ZazousImg, ZazousImg2, ZazousImg3, ZazousImg4];

  return (
    <ProjectMoreCard
      projectName="Zazou's Bridal Boutique"
      technologies={[
        {
          name: "Next.js",
          description:
            "React framework for building server-rendered and static web applications.",
        },
        {
          name: "React",
          description: "JavaScript library for building user interfaces.",
        },
        {
          name: "Tailwind CSS",
          description:
            "Utility-first CSS framework for rapidly building modern user interfaces.",
        },
        {
          name: "CSS Modules",
          description:
            "CSS files in which all class names and animation names are scoped locally by default.",
        },
        {
          name: "Bridal Live",
          description:
            "A comprehensive platform for bridal stores to enhance their online presence and customer experience.",
        },
      ]}
      image={imageArray}
      javascript={75}
      html={0}
      css={25}
      typeScript={0}
      overviewParagraphs={[
        `Collaborating with Zazou's Bridal Boutique & Tuxedos on their website redesign was a rewarding project rooted in the essence of a local business. Our collaboration began with a shared vision: to enhance the online presence of this esteemed boutique, marrying elegance with a user-friendly experience.`,
        `Throughout the process, effective communication played a pivotal role. From understanding their vision through image assets to refining rough Canva designs, every step was a testament to our shared commitment to the project's success.`,
        `As the developer, my focus extended beyond aesthetics. Transforming these designs into a fully functional website, I ensured a seamless online journey for Zazou's clientele. Importantly, this project wasn't just about visuals; it was a strategic effort to cut costs without compromising on quality.`,
        `By leveraging my technical skills and working closely with the Zazou's team, we achieved a website that not only met their aesthetic aspirations but also provided a cost-effective solution compared to their previous setup. It's a testament to the impact of collaborative efforts in bringing digital transformations to local businesses.`,
      ]}
      images={[Photo, Photo2, Photo3, Photo4]}
      repoLink="https://github.com/JordanReady/Zazous"
      siteLink="https://zazous.vercel.app/"
    />
  );
}

export default Project;
