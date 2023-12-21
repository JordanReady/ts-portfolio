import React from "react";
import BookingImg from "@/public/MainPageBooking.png";
import ProjectMoreCard from "@/components/ProjectMoreCard";

function Project() {
  return (
    <ProjectMoreCard
      projectName="AirBnb Booking Clone"
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
      image={BookingImg}
    />
  );
}

export default Project;
