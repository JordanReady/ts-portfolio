import MoreButton from "@/public/MoreBtn.png";
import News from "@/public/1MainNewsLogo.png";
import Booking from "@/public/1MainBookingLogo.png";
import Youtube from "@/public/1MainYoutubeLogo.png";
import Portfolio from "@/public/1MainPortfolioLogo.png";
import JWM from "@/public/1MainJWMLogo.png";
import Zazous from "@/public/1MainZazousLogo.png";
import Bridal from "@/public/1MainBridalLogo.png";
import Twitter from "@/public/1MainTwitterLogo.png";
import Chess from "@/public/1MainChessLogo.png";
import Airbnb from "@/public/1MainAirbnbLogo.png";
import Jrui from "@/public/1MainJruiLogo.png";
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
import JWMPage from "@/public/PageJWM.png";
import JWMPage2 from "@/public/PageJWM2.png";
import JWMPage3 from "@/public/PageJWM3.png";
import JWMPage4 from "@/public/PageJWM4.png";
import ZazousPage from "@/public/PageZazous.png";
import ZazousPage2 from "@/public/PageZazous2.png";
import ZazousPage3 from "@/public/PageZazous3.png";
import ZazousPage4 from "@/public/PageZazous4.png";
import BridalPage from "@/public/PageBridal.png";
import BridalPage2 from "@/public/PageBridal2.png";
import BridalPage3 from "@/public/PageBridal3.png";
import BridalPage4 from "@/public/PageBridal4.png";
import TwitterPage from "@/public/PageTwitter.png";
import TwitterPage2 from "@/public/PageTwitter2.png";
import TwitterPage3 from "@/public/PageTwitter3.png";
import TwitterPage4 from "@/public/PageTwitter4.png";
import ChessPage from "@/public/PageChess.png";
import ChessPage2 from "@/public/PageChess2.png";
import ChessPage3 from "@/public/PageChess3.png";
import ChessPage4 from "@/public/PageChess4.png";
import AirbnbPage from "@/public/PageAirbnb.png";
import AirbnbPage2 from "@/public/PageAirbnb2.png";
import AirbnbPage3 from "@/public/PageAirbnb3.png";
import AirbnbPage4 from "@/public/PageAirbnb4.png";
import JruiPage from "@/public/PageJrui.png";
import JruiPage2 from "@/public/PageJrui2.png";
import JruiPage3 from "@/public/PageJrui3.png";
import JruiPage4 from "@/public/PageJrui4.png";

import { StaticImageData } from "next/image";

export interface ProjectData {
  type: string;
  number: number;
  name: string;
  description: string;
  technologies: string;
  background: StaticImageData;
  logos: StaticImageData[];
  moreButton: StaticImageData;
}

export const projects: ProjectData[] = [
  // Production Projects
  {
    type: "production-sites",
    number: 3,
    name: "JRui Resource",
    description: "The complete Full-Stack Developer Resource",
    technologies:
      "Next.js, React, TypeScript, TailwindCSS, Firebase, NextAuth, Google Analytics",
    background: Jrui,
    logos: [JruiPage, JruiPage2, JruiPage3, JruiPage4],
    moreButton: MoreButton,
  },
  {
    type: "production-sites",
    number: 2,
    name: "Zazou's Bridal Boutique",
    description:
      "Zazou's Bridal Boutique & Tuxedos updated and optimized site.",
    technologies:
      "Next.js, React, TailwindCSS, CSS Modules, Bridal Live, Google Analytics",
    background: Zazous,
    logos: [ZazousPage, ZazousPage2, ZazousPage3, ZazousPage4],
    moreButton: MoreButton,
  },
  {
    type: "production-sites",
    number: 1,
    name: "Junior Web Masters",
    description:
      "Web development learning and mentoring platform tailored for young minds.",
    technologies: "Next.js, React, TypeScript, Firebase, NextAuth, Stripe,",
    background: JWM,
    logos: [JWMPage, JWMPage2, JWMPage3, JWMPage4],
    moreButton: MoreButton,
  },
  // Fullstack Projects
  {
    type: "fullstack",
    number: 2,
    name: "The Knight's Den",
    description:
      "Multiplayer chess learning platform with game analysis and stat tracking.",
    technologies:
      "React, Ruby on Rails, ActionCable, Chess.js, Bootstrap, Heroku",
    background: Chess,
    logos: [ChessPage, ChessPage2, ChessPage3, ChessPage4],
    moreButton: MoreButton,
  },
  {
    type: "fullstack",
    number: 3,
    name: "Airbnb Clone",
    description: "Booking platfrom for vacation rental properties.",
    technologies:
      "React, Ruby on Rails, Amazon S3, Stripe Webhooks, Bootstrap, Heroku",
    background: Airbnb,
    logos: [AirbnbPage, AirbnbPage2, AirbnbPage3, AirbnbPage4],
    moreButton: MoreButton,
  },
  {
    type: "fullstack",
    number: 1,
    name: "Twitter Clone",
    description: "Social media platform for sharing thoughts and images.",
    technologies: "React, Ruby on Rails, Amazon S3, Sass, Bootstrap ",
    background: Twitter,
    logos: [TwitterPage, TwitterPage2, TwitterPage3, TwitterPage4],
    moreButton: MoreButton,
  },

  // Frontend Projects
  {
    type: "frontend",
    number: 5,
    name: "Local Buisness Rebrand",
    description: "A complete UI/UX overhaul to a local bridal store website.",
    technologies: "React, CSS, Bootstrap ",
    background: Bridal,
    logos: [BridalPage, BridalPage2, BridalPage3, BridalPage4],
    moreButton: MoreButton,
  },
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
];
