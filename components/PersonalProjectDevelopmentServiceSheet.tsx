import React from "react";
import styles from "./ServiceSheet.module.css"; // Adjust the stylesheet import as per your project structure
import CustomButton from "./CustomButton";
import Reveal from "./Reveal";

const PersonalProjectDevelopmentServiceSheet = () => {
  return (
    <div className={styles.serviceSheet}>
      <ol
        className={`relative border-s border-gray-200 dark:border-gray-700 ${styles.fadeListIn}`}
      >
        <li className="mb-10 ms-4">
          <div className="absolute w-4 h-4 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-3.5 -start-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <div
            className={`${styles.circle} absolute w-2 h-2 bg-white rounded-full mt-4 -start-1 border border-white dark:border-gray-900 dark:bg-gray-700`}
          ></div>
          <Reveal direction="right" delayTime={0.2} color="#9333ea">
            <h3
              className={` ${styles.service} text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500`}
            >
              Personal Projects & SaaS
            </h3>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.4} color="grey">
            <p className="mb-4 text-base font-normal ">
              Explore the possibilities of bringing your ideas to life with my
              diverse range of services tailored for personal projects and
              Software as a Service (SaaS). Whether it's a homework assignment
              that needs a helping hand or a visionary idea for a full-stack
              SaaS business, I'm here to guide you through every step.
            </p>
          </Reveal>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-3 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="right" delayTime={0.2} color="#9333ea">
            <h3 className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
              Key Details
            </h3>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.4} color="grey">
            <p className="text-base font-normal ">
              From conceptualization to execution, I offer assistance for a wide
              range of projects. Whether you need help refining an existing idea
              or building an entire project from scratch, I've got you covered.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.5} color="grey">
            <p className="text-base font-normal ">
              My expertise extends across the spectrum, from simple tasks to
              complex, full-stack SaaS development. Whatever your project
              demands, I am ready to adapt and provide the support you need.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.6} color="grey">
            <p className="text-base font-normal ">
              Flexible engagement models ensure that you get precisely the level
              of assistance required, whether it's occasional guidance or
              comprehensive project development.
            </p>
          </Reveal>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-3 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="right" delayTime={0.2} color="#9333ea">
            <h3 className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
              Process Overview
            </h3>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.4} color="grey">
            <p className="text-base font-normal ">
              Initial consultation to understand the scope, goals, and technical
              requirements of your personal project or SaaS idea.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.5} color="grey">
            <p className="text-base font-normal ">
              Depending on your needs, I can assist with refining your existing
              project or take the lead in building it entirely. The process is
              adaptable to your preferences and the complexity of the project.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.6} color="grey">
            <p className="text-base font-normal ">
              Flexible engagement models ensure that you have the freedom to
              choose the level of involvement that suits your project. I can
              provide occasional guidance or take charge of the entire
              development process.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.7} color="grey">
            <p className="text-base font-normal ">
              Thorough testing and quality assurance to ensure a robust and
              reliable end product.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.8} color="grey">
            <p className="text-base font-normal ">
              Deployment and ongoing support to address any post-launch
              adjustments or enhancements.
            </p>
          </Reveal>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-3 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="right" delayTime={0.2} color="#9333ea">
            <h3 className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
              Technologies Used
            </h3>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.4} color="grey">
            <p className="text-base font-normal ">
              Utilizing a stack of technologies such as Next.js, React,
              TypeScript, and Firebase to ensure the development of secure,
              scalable, and innovative solutions.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.4} color="grey">
            <p className="text-base font-normal ">
              Whether your project requires a simple solution or a complex
              full-stack architecture, I can adapt to the technological demands
              of your vision.
            </p>
          </Reveal>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-3 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="right" delayTime={0.2} color="#9333ea">
            <h3 className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
              Contact Me
            </h3>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.4} color="grey">
            <p className="text-base font-normal ">
              If you have a personal project or SaaS idea that you're passionate
              about, let's discuss how we can bring it to life. Reach out either
              through this sites contact form or LinkedIn for a personalized
              consultation and turn your vision into a successful reality.
            </p>
          </Reveal>
          <div className="flex flex-row">
            <div className="absolute w-3 h-3 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-14 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <Reveal direction="top" delayTime={0.2} color="#9333ea">
              <CustomButton link="/contact" text="Contact" />
            </Reveal>
            <Reveal direction="top" delayTime={0.3} color="#9333ea">
              <CustomButton
                link="https://www.linkedin.com/in/jordan-ready-a97021268"
                text="LinkedIn"
              />
            </Reveal>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default PersonalProjectDevelopmentServiceSheet;
