import React from "react";
import styles from "./ServiceSheet.module.css";

const ContractWorkServiceSheet = () => {
  return (
    <div className={styles.serviceSheet}>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-4 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <h3
            className={` ${styles.service} text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500`}
          >
            Contract Work
          </h3>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <p className="mb-4 text-base font-normal ">
            As a freelance software developer, I offer Contract Work services to
            meet your specific development needs. Whether you need individual
            expertise or assistance for your development team, I'm here to help
            you achieve your project goals efficiently.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-3 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <h3 className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
            Key Details
          </h3>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <p className="text-base font-normal ">
            Customized solutions based on your project requirements.
          </p>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <p className="text-base font-normal ">
            Freelance expertise available for both individual tasks and
            collaborative projects.
          </p>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <p className="text-base font-normal ">
            Flexible engagement models for seamless collaboration with your
            existing team.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-3 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <h3 className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
            General Process Overview
          </h3>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <p className="text-base font-normal ">
            Initial consultation to understand your project's unique
            requirements and challenges.
          </p>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <p className="text-base font-normal ">
            Proposal and agreement on the scope of work, timeline, and
            collaboration model.
          </p>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <p className="text-base font-normal ">
            Development phase with regular updates and feedback loops to ensure
            alignment with your goals.
          </p>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <p className="text-base font-normal ">
            Quality assurance and testing procedures to deliver a polished and
            reliable product.
          </p>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <p className="text-base font-normal ">
            Delivery of the final product with ongoing support if required.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-3 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <h3 className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
            Technologies
          </h3>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <p className="text-base font-normal ">
            My current tech stack of choice is Next.js, React, TypeScript, and
            Firebase, ensuring modern and efficient solutions for your projects.
          </p>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <p className="text-base font-normal ">
            I have created projects with many other languages and technologies
            and I am always up for learning new tech to meet your teams
            requirements!
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-3 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <h3 className=" text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
            Contact Me
          </h3>
          <div className="absolute w-3 h-1 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <p className="text-base font-normal ">
            If you're interested in my Contract Work services, feel free to
            reach out. Let's discuss your project needs and how I can contribute
            to its success.
          </p>
          <button className="relative mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Contact
            </span>
          </button>
          <button className="relative mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              LinkedIn
            </span>
          </button>
        </li>
      </ol>
    </div>
  );
};

export default ContractWorkServiceSheet;
