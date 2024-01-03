import React from "react";
import BookingImg from "@/public/1MainBookingDisplay.png";
import BookingImg2 from "@/public/1MainBookingDisplay2.png";
import BookingImg3 from "@/public/1MainBookingDisplay3.png";
import BookingImg4 from "@/public/1MainBookingDisplay4.png";
import ProjectMoreCard from "@/components/ProjectMoreCard";
import Photo from "@/public/PageBooking1.png";
import Photo2 from "@/public/PageBooking2.png";
import Photo3 from "@/public/PageBooking3.png";
import Photo4 from "@/public/PageBooking4.png";

function Project() {
  const imageArray = [BookingImg, BookingImg2, BookingImg3, BookingImg4];
  return (
    <ProjectMoreCard
      projectName="Portfolio Website"
      technologies={[
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
      image={imageArray}
      javascript={0}
      html={70}
      css={30}
      typeScript={0}
      overviewParagraphs={[
        `The project represents a contemporary web application constructed with React JS and styled using Material UI 5. It faithfully emulates the fundamental features of YouTube, empowering users to seamlessly browse and view videos, explore diverse content, and engage with the video player and associated details. Notable functionalities encompass video playback, personalized video recommendations, an efficient video search mechanism, and a responsive design for optimal user experience.`,
        `The application's user interface is thoughtfully designed, leveraging the aesthetic components of Material UI 5 to enhance visual appeal. To ensure the availability of current video data, the application seamlessly integrates with the YouTube Data API through Rapid API. This integration empowers users to retrieve comprehensive video information, including titles, descriptions, channel specifics, and view counts.`,
        `Throughout the development journey, navigating challenges and implementing key features, the project provided valuable insights and learnings. Not only did it hone technical skills in React JS and Material UI, but it also deepened understanding regarding API integrations and responsive design considerations.`,
      ]}
      images={[Photo, Photo2, Photo3, Photo4]}
      repoLink="https://github.com/JordanReady/Airbnb-press-clone"
      siteLink="https://trusting-swirles-c46c81.netlify.app/"
    />
  );
}

export default Project;
