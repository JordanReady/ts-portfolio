import React from "react";
import styles from "./ServiceSheet.module.css";
import CustomButton from "./CustomButton";
import Reveal from "./Reveal";

const ContractWorkServiceSheet = () => {
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
              Contract Work
            </h3>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.4} color="grey">
            <p className="mb-4 text-base font-normal ">
              As a freelance software developer, I offer Contract Work services
              to meet your specific development needs. Whether you need
              individual expertise or assistance for your development team, I'm
              here to help you achieve your project goals efficiently.
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
              Customized solutions based on your project requirements.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.5} color="grey">
            <p className="text-base font-normal ">
              Freelance expertise available for both individual tasks and
              collaborative projects.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.6} color="grey">
            <p className="text-base font-normal ">
              Flexible engagement models for seamless collaboration with your
              existing team.
            </p>
          </Reveal>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-3 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <Reveal direction="right" delayTime={0.2} color="#9333ea">
            <h3 className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
              General Process Overview
            </h3>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.4} color="grey">
            <p className="text-base font-normal ">
              Initial consultation to understand your project's unique
              requirements and challenges.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.5} color="grey">
            <p className="text-base font-normal ">
              Proposal and agreement on the scope of work, timeline, and
              collaboration model.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.6} color="grey">
            <p className="text-base font-normal ">
              Development phase with regular updates and feedback loops to
              ensure alignment with your goals.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.7} color="grey">
            <p className="text-base font-normal ">
              Quality assurance and testing procedures to deliver a polished and
              reliable product.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.8} color="grey">
            <p className="text-base font-normal ">
              Delivery of the final product with ongoing support if required.
            </p>
          </Reveal>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-3 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <Reveal direction="right" delayTime={0.2} color="#9333ea">
            <h3 className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
              Technologies
            </h3>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.4} color="grey">
            <p className="text-base font-normal ">
              My current tech stack of choice is Next.js, React, TypeScript, and
              Firebase, ensuring modern and efficient solutions for your
              projects.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.5} color="grey">
            <p className="text-base font-normal ">
              I have created projects with many other languages and technologies
              and I am always up for learning new tech to meet your teams
              requirements!
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
              If you're interested in my Contract Work services, feel free to
              reach out. Let's discuss your project needs and how I can
              contribute to its success.
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

export default ContractWorkServiceSheet;
