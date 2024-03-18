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
import PerformanceOld from "@/public/PageZazousPerformanceOld.png";
import PerformanceNew from "@/public/PageZazousPerformanceNew.png";
import { Metadata } from "next";
import OG from "@/public/1MainZazous-opengraph-image.png";

export const metadata: Metadata = {
  title: "Zazou's Bridal Boutique",
  description:
    "Explore in-depth details of Zazou's Bridal Boutique by Jordan Ready. Learn about the technologies used, project scope, performance considerations, and gain a comprehensive overview. Discover the intricacies of this project, its impact, and the innovative solutions implemented.",
  openGraph: {
    title: "Zazou's Bridal Boutique",
    description:
      "Explore in-depth details of Zazou's Bridal Boutique by Jordan Ready. Learn about the technologies used, project scope, performance considerations, and gain a comprehensive overview. Discover the intricacies of this project, its impact, and the innovative solutions implemented.",
    siteName: "Jordan Ready",
    type: "website",
  },
};

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
        {
          name: "Google Analytics",
          description: "Tracking user interactions with realtime updates",
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
      performanceOld={PerformanceOld}
      performanceNew={PerformanceNew}
      performanceOldText={[
        `To assess and enhance the digital performance of websites, Google Lighthouse is a powerful tool widely used by developers. It evaluates websites based on various criteria, including performance, accessibility, best practices, and SEO, providing a comprehensive overview of their strengths and areas for improvement.`,
        `Before the redesign, Zazous Bridal's website underwent a Lighthouse evaluation with the following scores:`,
        `Previous Scores:\n\nPerformance: 70\nAccessibility: 89\nBest Practices: 77\nSEO: 92\nOverall: 70`,
        `These scores indicated room for improvement, particularly in terms of performance, best practices, and SEO. The challenge was not just to meet industry standards but to exceed them, providing Zazous Bridal with a website that not only aligns with their aesthetic but also excels in digital performance.`,
      ]}
      performanceNewText={[
        `The redesign of Zazous Bridal's website was a transformative journey aimed at elevating its digital presence. The focus extended beyond aesthetics to ensure optimal performance, accessibility, best practices, and SEO.`,
        `After the redesign, the website not only captured the essence of Zazous Bridal's style but also demonstrated a substantial improvement in Google Lighthouse scores:`,
        `Current Scores:\n\nPerformance: 97\nAccessibility: 96\nBest Practices: 95\nSEO: 100\nOverall: 97`,
        `Achieving Excellence\nPerformance Boost\nPerformance: +27 points\nDrastic improvement in loading times and overall website speed.`,
        `Enhanced Accessibility\nAccessibility: +7 points\nA commitment to inclusivity, ensuring a seamless experience for all users.`,
        `Best Practices Reinvented\nBest Practices: +18 points\nAdherence to industry standards and the implementation of optimal development practices.`,
        `SEO Excellence\nSEO: +8 points\nStrategic optimization for search engines, maximizing online visibility.`,
        `Stellar Overall Performance\nOverall: +27 points\nA comprehensive transformation, reflecting excellence across all dimensions.`,
        `This redesign not only brought Zazous Bridal's vision to life but also demonstrated my commitment to delivering websites that excel in both aesthetics and performance, surpassing expectations and industry standards.`,
      ]}
    />
  );
}

export default Project;
