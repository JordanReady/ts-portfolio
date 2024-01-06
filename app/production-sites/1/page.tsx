import React from "react";
import JWMImg from "@/public/1MainJWMDisplay.png";
import JWMImg2 from "@/public/1MainJWMDisplay2.png";
import JWMImg3 from "@/public/1MainJWMDisplay3.png";
import JWMImg4 from "@/public/1MainJWMDisplay4.png";
import Photo from "@/public/PageJWM.png";
import Photo2 from "@/public/PageJWM2.png";
import Photo3 from "@/public/PageJWM3.png";
import Photo4 from "@/public/PageJWM4.png";
import ProjectMoreCard from "@/components/ProjectMoreCard";

function Project() {
  const imageArray = [JWMImg, JWMImg2, JWMImg3, JWMImg4];

  return (
    <ProjectMoreCard
      projectName="Junior Web Masters"
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
          name: "TypeScript",
          description:
            "Superset of JavaScript that adds static typing to the language.",
        },
        {
          name: "Tailwind CSS",
          description:
            "Utility-first CSS framework for rapidly building modern user interfaces.",
        },
        {
          name: "Shadcn",
          description:
            "Beautifully designed components library that are accessible, customizable, and open source. ",
        },
        {
          name: "CSS Modules",
          description:
            "CSS files in which all class names and animation names are scoped locally by default.",
        },
        {
          name: "Firebase",
          description:
            "Platform developed by Google for creating mobile and web applications.",
        },
        {
          name: "NextAuth",
          description: "Authentication library for Next.js applications.",
        },
        {
          name: "Stripe Payments",
          description: "Online payment processing for internet businesses.",
        },
      ]}
      image={imageArray}
      javascript={0}
      html={0}
      css={10}
      typeScript={90}
      overviewParagraphs={[
        `Junior Web Masters is a dedicated educational platform designed to introduce 6th graders to the exciting world of web development and programming. The initiative is driven by the goal of empowering young learners with essential coding skills, preparing them for the challenges and opportunities of the digital future.`,
        `At Junior Web Masters, we strive to provide a comprehensive and supportive learning platform for 6th graders embarking on their coding journey. The program features a structured curriculum that covers fundamental concepts in web development, ensuring a solid foundation for young learners.`,
        `One of the key pillars of Junior Web Masters is mentorship. We believe in fostering a supportive community where students can receive guidance from experienced mentors, encouraging the development of crucial problem-solving skills and unleashing their creativity.`,
        `In our engaging learning environment, inclusivity is a core value. Junior Web Masters is committed to creating a space where every student feels welcome and supported. Personalized assistance is provided to cater to individual learning styles, ensuring that each young learner can thrive.`,
        `Junior Web Masters is not just an educational program; it's a stepping stone for young talents to become the web developers of the future. By combining structured learning, mentorship, and a safe environment, we aim to instill a passion for coding and technology in the next generation.`,
      ]}
      images={[Photo, Photo2, Photo3, Photo4]}
      repoLink="https://github.com/JordanReady/sass-jwm-app"
      siteLink="https://www.juniorwebmasters.org/"
    />
  );
}

export default Project;
