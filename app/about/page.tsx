"use client";
import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import Image, { StaticImageData } from "next/image";
import Img1 from "@/public/LogoRound.png";
import HeroHiking from "@/public/hero-hiking.png";
import HeroClimbing from "@/public/hero-climbing.png";
import HeroGaming from "@/public/hero-gaming.png";
import Img2 from "@/public/Snowboarding.png";
import Img3 from "@/public/Wakeboard.jpg";
import Img4 from "@/public/Climbing.jpg";
import Reveal from "@/components/Reveal";
import TechList from "@/components/TechList";
import Review from "@/components/Review";
import CustomButton from "@/components/CustomButton";
import { MapPin } from "lucide-react";

function About() {
  const [selectedMainImage, setSelectedMainImage] = useState(0);
  const heroImages = [HeroHiking, HeroClimbing, HeroGaming];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedMainImage((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [heroImages]);
  return (
    <div className={`${styles.container} container `}>
      <div className="grid grid-cols-6 md:grid-cols-6 md:grid-rows-1 gap-4 mt-10">
        {/* First row */}
        <div className="col-span-6 md:col-span-3 md:row-span-2 flex justify-center mb-6 relative">
          <span className={styles.blobs}>
            <div className="absolute top-8 left-40 w-36 h-36  bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl dark:opacity-10 opacity-40 animate-blob"></div>
            <div className="absolute top-15 right-32 w-36 h-36  bg-indigo-600 rounded-full mix-blend-multiply filter blur-2xl dark:opacity-10 opacity-40 animate-blob animation-delay-2"></div>
            <div className="absolute bottom-0 left-56 w-36 h-36  bg-violet-950 rounded-full mix-blend-multiply filter blur-2xl dark:opacity-10 opacity-40 animate-blob animation-delay-4"></div>
          </span>
          <Reveal duration={1} delayTime={0}>
            <Image
              loading="lazy"
              sizes="fill"
              src={heroImages[selectedMainImage]}
              alt={`Photo ${selectedMainImage + 1}`}
              width={320}
              height={320}
              className={styles.aiImgs}
            />
          </Reveal>
        </div>
        <div
          className={`col-span-6 
md:col-span-3 md:row-span-2 flex flex-col align-middle mb-6`}
        >
          <Reveal delayTime={0} direction="right">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-3xl">
              Who am I?
            </h2>
          </Reveal>
          <Reveal delayTime={0.1} direction="top" color="grey">
            <p>
              Hey there! 👋 If you've landed on this page, you're probably
              wondering who's behind the scenes. Well, wonder no more – it's me!
              I'm a fullstack web developer on a mission to create web apps that
              are not just vissually appealing, but also super user-friendly. My
              coding journey kicked off at Altcademy, an online bootcamp where I
              mastered the art of full-stack web development. Now, I'm a
              freelance software developer helping local businesses create, or
              spruce up their websites.
            </p>
          </Reveal>
        </div>

        {/* Second row */}
        <div className={` ${styles.likeText} mb-6 col-span-6 xl:col-span-2 `}>
          <Reveal delayTime={0} direction="right">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-3xl">
              What do I like?
            </h2>
          </Reveal>
          <Reveal delayTime={0.1} direction="top" color="grey">
            <p>
              When I'm not glued to my keyboard, you'll find me embracing the
              outdoors. Fun fact: I'm terrified of heights, but I still get a
              kick out of rock climbing. It's a toe-curling experience, quite
              literally! I also enjoy hiking, love a good round of golf, and
              when winter hits, you'll catch me shredding the slopes on my
              snowboard. In the virtual realm, I'm on a perpetual quest for the
              perfect game. Gaming with friends is my go-to downtime activity.
              But, you know, life's all about balance. So, when I'm not gaming
              or out and about, I'm leveling up my web development skills.
              Always up for a challenge, I keep my finger on the pulse of the
              latest tools and tech. If you're thinking of a collaboration, have
              a cool project in mind, or just want to shoot the breeze about web
              development, hit me up! Just give that friendly contact button at
              the top of the screen a gentle click, and send me a message! Let's
              bring your digital dreams to life!
            </p>
          </Reveal>
        </div>
        <div className="col-span-6 md:col-span-1 "></div>
        <div className="col-span-6 lg:col-span-3 flex justify-center content-center mb-6">
          {/* Three smaller rotated images */}
          <div
            className={`
${styles.photoCard} ${styles.card1}`}
          >
            <Image
              loading="lazy"
              placeholder="blur"
              sizes="fill"
              src={Img2}
              alt="Logo Image"
              className={styles.smallImg}
            />
            <p className={styles.location}>
              {" "}
              <MapPin className={styles.pin} size={16} strokeWidth={2} />{" "}
              Chestnut Mountain, IL
            </p>
          </div>
          <div
            className={`
${styles.photoCard} ${styles.card2}`}
          >
            <Image
              loading="lazy"
              placeholder="blur"
              sizes="fill"
              src={Img4}
              alt="Logo Image"
              className={styles.smallImg}
            />
            <p className={styles.location}>
              {" "}
              <MapPin className={styles.pin} size={16} strokeWidth={2} /> Castle
              Rock, WI
            </p>
          </div>
          <div
            className={`
${styles.photoCard} ${styles.card1}`}
          >
            <Image
              loading="lazy"
              placeholder="blur"
              sizes="fill"
              src={Img3}
              alt="Logo Image"
              className={styles.smallImg}
            />
            <p className={styles.location}>
              {" "}
              <MapPin className={styles.pin} size={16} strokeWidth={2} /> Table
              Rock Lake, MO
            </p>
          </div>
        </div>
        {/* third col */}
        <div className="col-span-6 md:col-span-3 md:row-span-2 flex justify-center">
          <TechList></TechList>
        </div>
        <div
          className={`col-span-6 
md:col-span-3 md:row-span-2 mb-6`}
        >
          <Reveal delayTime={0} direction="right">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-3xl">
              What do I use?
            </h2>
          </Reveal>
          <Reveal delayTime={0.1} direction="top" color="grey">
            <p>
              In my journey as a Fullstack developer, I initially honed my
              skills using React, JavaScript, Bootstrap, and Ruby on Rails.
              These technologies played a pivotal role in shaping my
              understanding of web development. Over time, I've embraced a
              transformative evolution in my tech stack. React has remained a
              steadfast choice, but I've enhanced my codebase with TypeScript,
              bringing a new level of type safety and scalability to my
              projects. Tailwind CSS has become my preferred styling framework,
              allowing for rapid and flexible UI development. Additionally, I've
              integrated Firebase into my toolkit, leveraging its cloud services
              to streamline backend development. This blend of technologies
              reflects my commitment to staying on the cutting edge, ensuring
              that my projects are not only visually appealing but also built on
              a foundation of robust, modern tools.
            </p>
          </Reveal>
        </div>
        {/* fourth col */}
        <div
          className={`col-span-6 
lg:col-span-3 lg:row-span-2 mb-6`}
        >
          <Reveal delayTime={0} direction="right">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-3xl">
              What do people say?
            </h2>
          </Reveal>
          <Reveal delayTime={0.1} direction="top" color="grey">
            <p className="mb-2">
              As a Fullstack developer, I've had the pleasure of receiving
              positive feedback from clients and collaborators. They've
              appreciated my attention to detail, problem-solving skills, and
              commitment to delivering quality solutions. Clients often express
              satisfaction with the results, while collaborators find my
              professionalism and effective communication valuable in our
              projects. It's heartening to know that my work has made a positive
              impact, and I'm always eager to continue contributing to
              successful web development endeavors.
            </p>
            <CustomButton text="View More" link="/reviews" />
          </Reveal>
        </div>
        <div
          className="col-span-6 
lg:col-span-3 lg:row-span-2 mb-6 flex flex-col justify-center align-middle"
        >
          <div className="col-span-6">
            <Reveal delayTime={0} direction="right">
              <Review
                name="Zach Vivian"
                profession="Cybersecurity Student"
                date="02/08/2024"
                review="Jordan provided quick response times for fantastic help with my full-stack development project. I was struggling to get my project started and Jordan knew exactly what frameworks I had to use and how to connect them together. He is also really knowledgeable with React, and has already made some super cool projects!"
                img="https://lh3.googleusercontent.com/a/ACg8ocJNsfB7RsfYk9oPrJWO8v5vw19C5M7gOLjT57wduEu9BKQ=s96-c"
                rating={5}
                reviewId="null"
              />
            </Reveal>
          </div>

          <div className="col-span-6 flex justify-end">
            <Reveal delayTime={0.2} direction="left">
              <Review
                name="Jordan Ready"
                profession="Software Developer"
                date="01/15/2024"
                review="I'm a fullstack web developer on a mission to create web apps that are not just visually appealing, but also super user-friendly."
                img={Img1}
                rating={5}
                reviewId="null"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
