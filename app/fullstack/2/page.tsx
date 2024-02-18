import React from "react";
import ChessImg from "@/public/1MainChessDisplay.png";
import ChessImg2 from "@/public/1MainChessDisplay2.png";
import ChessImg3 from "@/public/1MainChessDisplay3.png";
import ChessImg4 from "@/public/1MainChessDisplay4.png";
import Photo from "@/public/PageChess.png";
import Photo2 from "@/public/PageChess2.png";
import Photo3 from "@/public/PageChess3.png";
import Photo4 from "@/public/PageChess4.png";
import ProjectMoreCard from "@/components/ProjectMoreCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Knight's Den",
  description:
    "Explore in-depth details of The Knight's Den by Jordan Ready. Learn about the technologies used, project scope, performance considerations, and gain a comprehensive overview. Discover the intricacies of this project, its impact, and the innovative solutions implemented.",
};

function Project() {
  const imageArray = [ChessImg, ChessImg2, ChessImg3, ChessImg4];

  return (
    <ProjectMoreCard
      projectName="The Knight's Den"
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
          name: "ActionCable Websocket",
          description:
            "Integrated WebSocket technology for real-time communication in Rails applications.",
        },
        {
          name: "Chess.js",
          description:
            "A JavaScript chess library for chess move generation/validation, piece placement/movement, and check/checkmate/draw detection.",
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
      javascript={12}
      ruby={70}
      html={15}
      css={3}
      overviewParagraphs={[
        `Embark on a chess journey with The Knight's Den, a dynamic multiplayer chess learning platform that blends strategic gameplay with advanced features. As the developer behind this project, I set out to create an immersive space for chess enthusiasts, combining the power of React and Ruby on Rails.`,
        `The platform not only enables users to engage in thrilling multiplayer chess battles but also offers robust game analysis and stat tracking functionalities. It's not just about making moves; it's about understanding the strategies, learning from each game, and improving as a chess player.`,
        `Powered by ActionCable Websocket, The Knight's Den ensures real-time communication, allowing players to experience the excitement of live chess matches. The integration of Chess.js adds depth to the gaming experience, providing precise move validation and game state management.`,
        `The user interface, designed with Bootstrap, maintains a clean and intuitive layout, ensuring a seamless experience across devices. The deployment on Heroku guarantees accessibility to a wide audience, making chess accessible to players worldwide.`,
      ]}
      images={[Photo, Photo2, Photo3, Photo4]}
      repoLink="https://github.com/JordanReady/The-Knights-Den"
      siteLink="https://the-knights-den.herokuapp.com/"
    />
  );
}

export default Project;
