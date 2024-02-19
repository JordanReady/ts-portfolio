import React from "react";
import AirbnbImg from "@/public/1MainAirbnbDisplay.png";
import AirbnbImg2 from "@/public/1MainAirbnbDisplay2.png";
import AirbnbImg3 from "@/public/1MainAirbnbDisplay3.png";
import AirbnbImg4 from "@/public/1MainAirbnbDisplay4.png";
import Photo from "@/public/PageAirbnb.png";
import Photo2 from "@/public/PageAirbnb2.png";
import Photo3 from "@/public/PageAirbnb3.png";
import Photo4 from "@/public/PageAirbnb4.png";
import ProjectMoreCard from "@/components/ProjectMoreCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description:
    "Explore in-depth details of Airbnb Clone by Jordan Ready. Learn about the technologies used, project scope, performance considerations, and gain a comprehensive overview. Discover the intricacies of this project, its impact, and the innovative solutions implemented.",
  openGraph: {
    title: "Airbnb Clone",
    description:
      "Explore in-depth details of Airbnb Clone by Jordan Ready. Learn about the technologies used, project scope, performance considerations, and gain a comprehensive overview. Discover the intricacies of this project, its impact, and the innovative solutions implemented.",
    siteName: "Jordan Ready",
    type: "website",
  },
};

function Project() {
  const imageArray = [AirbnbImg, AirbnbImg2, AirbnbImg3, AirbnbImg4];

  return (
    <ProjectMoreCard
      projectName="Airbnb Clone"
      technologies={[
        {
          name: "React",
          description: "JavaScript library for building user interfaces.",
        },
        {
          name: "Ruby on Rails",
          description:
            "A full-stack web application framework written in Ruby.",
        },
        {
          name: "Amazon S3",
          description:
            "Scalable object storage with industry-leading durability, availability, and performance.",
        },
        {
          name: "Stripe Webhooks",
          description:
            "Automated notifications and events from Stripe, providing real-time updates and enabling seamless payment processing.",
        },
        {
          name: "Bootstrap",
          description:
            "Open-source CSS framework directed at responsive, mobile-first front-end web development.",
        },
        {
          name: "Heroku",
          description:
            "Cloud platform that lets companies build, deliver, monitor, and scale apps.",
        },
      ]}
      image={imageArray}
      javascript={40}
      ruby={50}
      html={5}
      css={5}
      overviewParagraphs={[
        `Experience the essence of travel with the Airbnb Clone, a full-stack booking platform designed to redefine vacation rental experiences. As the creator of this project, my goal was to fuse the power of React and Ruby on Rails to deliver a user-centric and feature-rich platform.`,
        `From seamless property bookings to secure online transactions, the Airbnb Clone incorporates essential features to enhance the user experience. Leveraging Amazon S3 ensures scalable and reliable storage for the vast array of property images and data.`,
        `The integration of Stripe Webhooks elevates the platform by providing real-time updates on payment transactions, ensuring a secure and efficient payment process. The user interface, crafted with Bootstrap, guarantees a responsive design for users accessing the platform from various devices.`,
        `Deployed on Heroku, the Airbnb Clone is not just a platform; it's an invitation to explore and book unique stays worldwide. Whether users are planning a weekend getaway or an extended vacation, the platform offers a seamless and enjoyable booking experience.`,
      ]}
      images={[Photo, Photo2, Photo3, Photo4]}
      repoLink="https://github.com/JordanReady-Codes/full_stack_airbnb_clone"
      siteLink="https://airbnb-clone-platform.herokuapp.com/"
    />
  );
}

export default Project;
