import React from "react";
import TwitterImg from "@/public/1MainTwitterDisplay.png";
import TwitterImg2 from "@/public/1MainTwitterDisplay2.png";
import TwitterImg3 from "@/public/1MainTwitterDisplay3.png";
import TwitterImg4 from "@/public/1MainTwitterDisplay4.png";
import Photo from "@/public/PageTwitter.png";
import Photo2 from "@/public/PageTwitter2.png";
import Photo3 from "@/public/PageTwitter3.png";
import Photo4 from "@/public/PageTwitter4.png";
import ProjectMoreCard from "@/components/ProjectMoreCard";

function Project() {
  const imageArray = [TwitterImg, TwitterImg2, TwitterImg3, TwitterImg4];

  return (
    <ProjectMoreCard
      projectName="Twitter Clone"
      technologies={[
        {
          name: "React",
          description: "JavaScript library for building user interfaces.",
        },
        {
          name: "Ruby on Rails",
          description: "Server-side web application framework.",
        },
        {
          name: "Amazon S3",
          description: "Scalable object storage in the cloud.",
        },
        {
          name: "Sass",
          description: "CSS preprocessor scripting language.",
        },
        {
          name: "Bootstrap",
          description:
            "Open-source CSS framework for responsive web development.",
        },
      ]}
      image={imageArray}
      javascript={45}
      html={5}
      css={5}
      typeScript={0}
      ruby={45}
      overviewParagraphs={[
        `The full-stack Twitter Clone project is a web application
        that replicates the core functionality of Twitter, allowing
        users to create accounts, log in, and share their thoughts
        with the world. Upon creating an account, users can log in
        and access a variety of features including creating,
        viewing, and deleting their own tweets. Users can also
        browse a global feed of tweets from all users or navigate
        to a specific user's profile to view only the tweets that
        user has made.`,
        `The styling, achieved through Sass and Bootstrap, allows for responsiveness across various devices. This combination of technologies results in a Twitter Clone that seamlessly combines functionality, aesthetics, and performance, offering users a compelling platform to connect and share in real-time.`,
      ]}
      images={[Photo, Photo2, Photo3, Photo4]}
      repoLink="https://github.com/JordanReady/Airbnb-press-clone"
      siteLink="https://trusting-swirles-c46c81.netlify.app/"
    />
  );
}

export default Project;
