import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import Banner from "@/public/AboutBanner.png";

function About() {
  return (
    <div>
      <div className={styles.banner}>
        <Image src={Banner} alt="banner" />
      </div>
      <div
        className={`${styles.container} container dark:bg-slate-950 bg-white`}
      >
        <div className="grid grid-cols-6 grid-rows-5 gap-4">
          <div className="col-span-2">1</div>
          <div className="col-span-4 col-start-3">3</div>
          <div className="col-span-3 row-start-2">4</div>
          <div className="col-span-3 col-start-4 row-start-2">5</div>
        </div>

        <p>
          Hey there! 👋 If you've landed on this page, you're probably wondering
          who's behind the scenes. Well, wonder no more – it's me! I'm a
          fullstack web developer on a mission to create web apps that are not
          just vissually appealing, but also super user-friendly. When I'm not
          glued to my keyboard, you'll find me embracing the outdoors. Fun fact:
          I'm terrified of heights, but I still get a kick out of rock climbing.
          It's a toe-curling experience, quite literally! I also enjoy hiking,
          love a good round of golf, and when winter hits, you'll catch me
          shredding the slopes on my snowboard. In the virtual realm, I'm on a
          perpetual quest for the perfect game. Gaming with friends is my go-to
          downtime activity. But, you know, life's all about balance. So, when
          I'm not gaming or out and about, I'm leveling up my web development
          skills. My coding journey kicked off at Altcademy, an online bootcamp
          where I mastered the art of full-stack web development. Now, I'm a
          freelance software developer helping local businesses create, or
          spruce up their websites. Always up for a challenge, I keep my finger
          on the pulse of the latest tools and tech. If you're thinking of a
          collaboration, have a cool project in mind, or just want to shoot the
          breeze about web development, hit me up! Just give that friendly
          contact button at the top of the screen a gentle click, and send me a
          message! Let's bring your digital dreams to life! 🚀
        </p>
        <p>
          Hey there! 👋 If you've landed on this page, you're probably wondering
          who's behind the scenes. Well, wonder no more – it's me! I'm a
          fullstack web developer on a mission to create web apps that are not
          just vissually appealing, but also super user-friendly. When I'm not
          glued to my keyboard, you'll find me embracing the outdoors. Fun fact:
          I'm terrified of heights, but I still get a kick out of rock climbing.
          It's a toe-curling experience, quite literally! I also enjoy hiking,
          love a good round of golf, and when winter hits, you'll catch me
          shredding the slopes on my snowboard. In the virtual realm, I'm on a
          perpetual quest for the perfect game. Gaming with friends is my go-to
          downtime activity. But, you know, life's all about balance. So, when
          I'm not gaming or out and about, I'm leveling up my web development
          skills. My coding journey kicked off at Altcademy, an online bootcamp
          where I mastered the art of full-stack web development. Now, I'm a
          freelance software developer helping local businesses create, or
          spruce up their websites. Always up for a challenge, I keep my finger
          on the pulse of the latest tools and tech. If you're thinking of a
          collaboration, have a cool project in mind, or just want to shoot the
          breeze about web development, hit me up! Just give that friendly
          contact button at the top of the screen a gentle click, and send me a
          message! Let's bring your digital dreams to life! 🚀
        </p>
      </div>
    </div>
  );
}

export default About;
