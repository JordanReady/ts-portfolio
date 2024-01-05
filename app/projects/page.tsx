"use client";
import React, { useState } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "@/components/ProjectCard";
import MoreButton from "@/public/MoreBtn.png";
import News from "@/public/1MainNewsLogo.png";
import Booking from "@/public/1MainBookingLogo.png";
import Youtube from "@/public/1MainYoutubeLogo.png";
import Portfolio from "@/public/1MainPortfolioLogo.png";
import BookingPage from "@/public/PageBooking1.png";
import BookingPage2 from "@/public/PageBooking2.png";
import BookingPage3 from "@/public/PageBooking3.png";
import BookingPage4 from "@/public/PageBooking4.png";
import NewsPage from "@/public/PageNews1.png";
import NewsPage2 from "@/public/PageNews2.png";
import NewsPage3 from "@/public/PageNews3.png";
import NewsPage4 from "@/public/PageNews4.png";
import YoutubePage from "@/public/PageYoutube1.png";
import YoutubePage2 from "@/public/PageYoutube2.png";
import YoutubePage3 from "@/public/PageYoutube3.png";
import YoutubePage4 from "@/public/PageYoutube4.png";
import PortfolioPage from "@/public/PagePortfolio.png";
import PortfolioPage2 from "@/public/PagePortfolio2.png";
import PortfolioPage3 from "@/public/PagePortfolio3.png";
import PortfolioPage4 from "@/public/PagePortfolio4.png";
import Reveal from "@/components/Reveal";
import ProjectTypeControls from "@/components/ProjectTypeControls";
import { StaticImageData } from "next/image";

interface ProjectData {
  type: string;
  number: number;
  name: string;
  description: string;
  technologies: string;
  background: StaticImageData;
  logos: StaticImageData[];
  moreButton: StaticImageData;
}

function Projects() {
  const [selectedType, setSelectedType] = useState<string>("all");

  const projectData: ProjectData[] = [
    // Frontend Projects
    {
      type: "frontend",
      number: 1,
      name: "AirBnb News",
      description: "Responsive AirBnb News website clone",
      technologies: "React, HTML, CSS, Bootstrap",
      background: News,
      logos: [NewsPage, NewsPage2, NewsPage3, NewsPage4],
      moreButton: MoreButton,
    },
    {
      type: "frontend",
      number: 2,
      name: "YouTube Clone",
      description: "Responsive YouTube website clone",
      technologies: "React, CSS, Material UI, Rapid API",
      background: Youtube,
      logos: [YoutubePage, YoutubePage2, YoutubePage3, YoutubePage4],
      moreButton: MoreButton,
    },
    {
      type: "frontend",
      number: 3,
      name: "AirBnb Booking",
      description: "Responsive AirBnb Booking website clone",
      technologies: "HTML, CSS, Bootstrap",
      background: Booking,
      logos: [BookingPage, BookingPage2, BookingPage3, BookingPage4],
      moreButton: MoreButton,
    },
    {
      type: "frontend",
      number: 4,
      name: "Portfolio Website",
      description: "My first iteration of a portfolio website",
      technologies: "TypeScript, React, Bootstrap, Typed.js ",
      background: Portfolio,
      logos: [PortfolioPage, PortfolioPage2, PortfolioPage3, PortfolioPage4],
      moreButton: MoreButton,
    },
    // Fullstack Projects
    {
      type: "fullstack",
      number: 1,
      name: "FullStack",
      description: "My first iteration of a portfolio website",
      technologies: "TypeScript, React, Bootstrap, Typed.js ",
      background: Portfolio,
      logos: [PortfolioPage, PortfolioPage2, PortfolioPage3, PortfolioPage4],
      moreButton: MoreButton,
    },
    // Production Projects
    {
      type: "production-sites",
      number: 1,
      name: "Production",
      description: "Responsive AirBnb Booking website clone",
      technologies: "HTML, CSS, Bootstrap",
      background: Booking,
      logos: [BookingPage, BookingPage2, BookingPage3, BookingPage4],
      moreButton: MoreButton,
    },
  ];

  const filteredProjects =
    selectedType === "all"
      ? projectData
      : projectData.filter((project) => project.type === selectedType);

  return (
    <div className="container">
      <ProjectTypeControls onTypeChange={setSelectedType} />
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
