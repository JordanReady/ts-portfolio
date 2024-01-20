import React from "react";
import styles from "./ServiceSheet.module.css"; // Adjust the stylesheet import as per your project structure
import CustomButton from "./CustomButton";
import Reveal from "./Reveal";

const PersonalProjectDevelopmentServiceSheet = () => {
  return (
    <div className={styles.serviceSheet}>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-4 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="right" delayTime={0.2} color="#9333ea">
            <h3
              className={` ${styles.service} text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500`}
            >
              Personal Projects & SaaS
            </h3>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.4} color="grey">
            <p className="mb-4 text-base font-normal ">
              Turn your ideas into reality with my expertise in developing
              personal projects and Software as a Service (SaaS) solutions. I
              bring a hands-on approach to ensure the success of your project.
            </p>
          </Reveal>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-3 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="right" delayTime={0.2} color="#9333ea">
            <h3 className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
              Key Details
            </h3>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.4} color="grey">
            <p className="text-base font-normal ">
              Customized development solutions tailored to your specific project
              requirements.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.5} color="grey">
            <p className="text-base font-normal ">
              Collaborative approach with regular updates and feedback sessions
              throughout the development process.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.6} color="grey">
            <p className="text-base font-normal ">
              Integration of cutting-edge technologies and best practices for
              optimal performance and scalability.
            </p>
          </Reveal>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-3 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="right" delayTime={0.2} color="#9333ea">
            <h3 className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
              Process Overview
            </h3>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.4} color="grey">
            <p className="text-base font-normal ">
              Initial consultation to understand the scope, goals, and technical
              requirements of your personal project or SaaS idea.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.5} color="grey">
            <p className="text-base font-normal ">
              Development of a comprehensive project plan outlining milestones,
              timelines, and deliverables.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.6} color="grey">
            <p className="text-base font-normal ">
              Agile development methodology with iterative testing and
              continuous improvements based on your feedback.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.7} color="grey">
            <p className="text-base font-normal ">
              Thorough testing and quality assurance to ensure a robust and
              reliable end product.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.8} color="grey">
            <p className="text-base font-normal ">
              Deployment and ongoing support to address any post-launch
              adjustments or enhancements.
            </p>
          </Reveal>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-3 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="right" delayTime={0.2} color="#9333ea">
            <h3 className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
              Technologies Used
            </h3>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.4} color="grey">
            <p className="text-base font-normal ">
              Utilizing a stack of technologies such as Next.js, React,
              TypeScript, and Firebase to ensure the development of secure,
              scalable, and innovative solutions.
            </p>
          </Reveal>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-3 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="right" delayTime={0.2} color="#9333ea">
            <h3 className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
              Contact Me
            </h3>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.4} color="grey">
            <p className="text-base font-normal ">
              If you have a personal project or SaaS idea that you're passionate
              about, let's discuss how we can bring it to life. Reach out for a
              personalized consultation and turn your vision into a successful
              reality.
            </p>
          </Reveal>
          <div className="flex flex-row">
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
