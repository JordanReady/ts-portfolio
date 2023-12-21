import React from "react";
import AirBnb from "@/public/MainPageNews.png";
import Photo from "@/public/PageNews1.png";
import Photo2 from "@/public/PageNews2.png";
import Photo3 from "@/public/PageNews3.png";
import Photo4 from "@/public/PageNews4.png";
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
      javascript={0}
      html={70}
      css={30}
      typeScript={0}
      overviewParagraphs={[
        `The Airbnb News Website Clone is a frontend project meticulously
        crafted with React, HTML, CSS, and Bootstrap. The website boasts
        a prominent top news story section, showcasing the day's most
        important articles. It features multiple grid-based sections
        that highlight the latest news and provide convenient links to
        various social media platforms.`,
        `The design is anchored in thoughtfully designed grids created
        using Bootstrap, ensuring a seamless and intuitive user
        experience. From the engaging picture reel section to the
        organized news categories, the user-friendly sign-up for the
        newsletter, and the polished footer – each component is
        strategically crafted with Bootstrap grids for optimal display
        on various devices.`,
        `This website's primary objective is to offer users a clean and
        straightforward means to stay informed about Airbnb news. With a
        responsive design, users can effortlessly access the site from
        desktops, tablets, or smartphones, ensuring a consistently
        enjoyable experience across different devices.`,
      ]}
      images={[Photo, Photo2, Photo3, Photo4]}
      repoLink="https://github.com/JordanReady/Airbnb-press-clone"
      siteLink="https://trusting-swirles-c46c81.netlify.app/"
    />
  );
}

export default Project;
