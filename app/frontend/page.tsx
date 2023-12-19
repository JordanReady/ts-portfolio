import React from "react";
import styles from "./FrontEnd.module.css";
import ProjectCard from "@/components/ProjectCard";
import MoreButton from "@/public/MoreBtn.png";
import News from "@/public/LogoDesktopNews1.png";
import Booking from "@/public/LogoDesktopBooking1.png";
import Youtube from "@/public/LogoDesktopYoutube1.png";
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

function FrontEnd() {
  const type = "frontend";
  const projectData = {
    type: type,
    number: 1,
    name: "AirBnb News",
    description: "Responsive AirBnb News website clone",
    technologies: "React, HTML, CSS, Bootstrap",
    background: News,
    logos: [NewsPage, NewsPage2, NewsPage3, NewsPage4],
    moreButton: MoreButton,
  };
  const projectData2 = {
    type: type,
    number: 2,
    name: "YouTube Clone",
    description: "Responsive YouTube website clone",
    technologies: "React, CSS, Material UI, Rapid API",
    background: Youtube,
    logos: [YoutubePage, YoutubePage2, YoutubePage3, YoutubePage4],
    moreButton: MoreButton,
  };
  const projectData3 = {
    type: type,
    number: 3,
    name: "AirBnb Booking",
    description: "Responsive AirBnb Booking website clone",
    technologies: "HTML, CSS, Bootstrap",
    background: Booking,
    logos: [BookingPage, BookingPage2, BookingPage3, BookingPage4],
    moreButton: MoreButton,
  };

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className={`${styles.card} mt-4`}>
          <ProjectCard {...projectData} />
        </div>
        <div className={`${styles.card} mt-4`}>
          <ProjectCard {...projectData2} />
        </div>
        <div className={`${styles.card} mb-4`}>
          <ProjectCard {...projectData3} />
        </div>
      </div>
    </div>
  );
}

export default FrontEnd;
