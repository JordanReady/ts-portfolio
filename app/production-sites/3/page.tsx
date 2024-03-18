import React from "react";
import JruiImg from "@/public/1MainJruiDisplay.png";
import JruiImg2 from "@/public/1MainJruiDisplay2.png";
import JruiImg3 from "@/public/1MainJruiDisplay3.png";
import JruiImg4 from "@/public/1MainJruiDisplay4.png";
import Photo from "@/public/PageJrui.png";
import Photo2 from "@/public/PageJrui2.png";
import Photo3 from "@/public/PageJrui3.png";
import Photo4 from "@/public/PageJrui4.png";
import ProjectMoreCard from "@/components/ProjectMoreCard";
import Performance from "@/public/PageJruiPerformance.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JRui Resource",
  description:
    "Explore in-depth details of JRui Resource by Jordan Ready. Learn about the technologies used, project scope, performance considerations, and gain a comprehensive overview. Discover the intricacies of this project, its impact, and the innovative solutions implemented.",
  openGraph: {
    title: "JRui Resource",
    description:
      "Explore in-depth details of JRui Resource by Jordan Ready. Learn about the technologies used, project scope, performance considerations, and gain a comprehensive overview. Discover the intricacies of this project, its impact, and the innovative solutions implemented.",
    siteName: "Jordan Ready",
    type: "website",
  },
};

function Project() {
  const imageArray = [JruiImg, JruiImg2, JruiImg3, JruiImg4];

  return (
    <ProjectMoreCard
      projectName="JRui Resource"
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
          name: "Firebase",
          description:
            "Platform developed by Google for creating mobile and web applications.",
        },
        {
          name: "NextAuth",
          description: "Authentication library for Next.js applications.",
        },
        {
          name: "Google Analytics",
          description: "Tracking user interactions with realtime updates",
        },
      ]}
      image={imageArray}
      javascript={0}
      html={0}
      css={5}
      typeScript={95}
      overviewParagraphs={[
        `JRui is a comprehensive platform designed to assist web developers in creating full-stack web applications with ease. It provides a collection of comprehensive guides, walkthroughs, and templates to streamline the development process from start to finish. Whether you're a beginner or an experienced developer, this resource hub offers everything you need to build robust and scalable web applications.`,
        `Here are the current key features of JRui.`,
        ` Template Selection: Choose from a variety of pre-designed templates for full-stack web applications. These templates come with starter layouts and configurations to jumpstart your development process.`,
        `

        Customization Options: Easily customize your selected template by adding features, sections, and components directly from the site. This intuitive interface allows you to tailor your application to meet your specific requirements.`,
        `
        
        Ticketing System: A built-in ticketing system enables users to request new components, report problems, or submit bugs related to existing components on the site. This ensures continuous improvement and user feedback integration. `,
        `
        
        Admin Dashboard: As the project creator, you have access to an admin dashboard to manage user tickets, track feedback, and monitor site performance. This allows for efficient management of user interactions and site maintenance.`,
        `
        
        Continuous Updates: The resource hub is regularly updated with new components, features, sections, and templates to meet the evolving needs of developers. This ensures that developers have access to the latest tools and resources for their projects. `,

        `I plan on continuing to expand this library to become the go-to resource for developers looking to streamline their full-stack development process!`,
      ]}
      images={[Photo, Photo2, Photo3, Photo4]}
      repoLink="https://github.com/JordanReady/Zazous"
      siteLink="https://zazous.vercel.app/"
      performance={Performance}
      performanceText={[
        `I take immense pride in crafting high-performance websites that not only meet industry standards but exceed them. My efforts are validated through Google Lighthouse, a tool that evaluates web pages in terms of performance, accessibility, best practices, and SEO.`,
        `Performance: 99
        A lightning-fast user experience, ensuring swift loading times and optimal performance.`,
        `
        Best Practices: 100
        Adherence to web development best practices, guaranteeing a robust and reliable website.`,
        `
        SEO: 100
        A search engine-friendly design to enhance visibility and reach.`,
        `
        Accessibility: 100
A strong emphasis on inclusivity, making the website accessible to a diverse audience.`,
        `
Overall Lighthouse Score: 99
A comprehensive evaluation showcasing the website's excellence in all aspects.`,
        `These scores reflect my dedication to creating websites that not only meet but surpass industry standards. I am not just a developer; I am committed to delivering an outstanding user experience that goes above and beyond expectations.`,
      ]}
    />
  );
}

export default Project;
