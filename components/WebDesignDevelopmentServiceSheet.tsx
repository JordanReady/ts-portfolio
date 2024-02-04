import React from "react";
import styles from "./ServiceSheet.module.css";
import CustomButton from "./CustomButton";
import Reveal from "./Reveal";

const WebDesignDevelopmentServiceSheet = () => {
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
              Web Design & Development
            </h3>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.4} color="grey">
            <p className="mb-4 text-base font-normal ">
              Your personalized web solution starts here. I specialize in
              crafting tailored solutions that transform your ideas into
              captivating digital experiences. From initial concept to the final
              execution, I am dedicated to delivering a seamless and
              user-friendly journey for your audience.
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
              Crafting customized solutions, I have the flexibility to either
              bring your Figma or Canva design to life or create a design for
              you. We can fine-tune every detail to match your vision before
              diving into development.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.5} color="grey">
            <p className="text-base font-normal ">
              Offering versatile communication options, whether it's hopping on
              a call, exchanging emails, or quick text updates. Fast
              communication times are a priority, ensuring we stay synchronized
              throughout the project.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.6} color="grey">
            <p className="text-base font-normal ">
              Constant updates and transparency are ingrained in my process.
              You'll be informed at every stage, promoting collaboration and
              alignment with your expectations.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.7} color="grey">
            <p className="text-base font-normal ">
              Hosting flexibility is a cornerstone of my service. I can either
              host on the platform of your choice or provide recommendations for
              the most cost-effective and efficient solution tailored to your
              site's needs.
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
              Initial consultation to understand the purpose of your site, your
              target audience, and your unique requirements. This phase ensures
              a clear vision before we proceed.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.5} color="grey">
            <p className="text-base font-normal ">
              Proposal and agreement on crucial aspects such as the project's
              scope, pricing, the number of pages, and whether full-stack
              development, databases, or APIs are necessary. We establish a
              timeline that aligns with your expectations.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.6} color="grey">
            <p className="text-base font-normal ">
              Depending on your preference, we either start with your provided
              Canva or Figma designs, or I initiate the design process. This
              stage allows us to fine-tune the visual aspects before moving into
              development.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.7} color="grey">
            <p className="text-base font-normal ">
              The development phase is marked by constant updates. You'll have
              access to a live hosted URL where you can see the project taking
              shape. This iterative process ensures your involvement and allows
              for real-time feedback.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.8} color="grey">
            <p className="text-base font-normal ">
              Rigorous testing is a non-negotiable step. Before moving forward,
              we conduct thorough testing to ensure the project functions
              flawlessly and aligns with your expectations.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.8} color="grey">
            <p className="text-base font-normal ">
              As we wrap up development, we move to hosting. You have the
              flexibility to choose your preferred hosting platform, or I can
              provide recommendations for the most effective and cost-efficient
              solution. Domain settings are configured to complete the project.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.8} color="grey">
            <p className="text-base font-normal ">
              Beyond the initial project completion, I am committed to
              supporting any additional development needs you may have. We can
              work out a plan for ongoing improvements, updates, or expansions
              to ensure your website evolves with your growing requirements.
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
              project.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.5} color="grey">
            <p className="text-base font-normal ">
              I have created projects with many other languages and technologies
              and I am always up for learning new tech to meet your site
              requirements!
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.6} color="grey">
            <p className="text-base font-normal ">
              Whether you're well-versed in these technologies or not, I am here
              to handle everything for you – from the development process to
              hosting and domain configuration.
            </p>
          </Reveal>
          <div className="absolute w-3 h-1 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-2.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Reveal direction="top" delayTime={0.7} color="grey">
            <p className="text-base font-normal ">
              I will seamlessly guide you through each step, providing clarity
              and simplifying the technical aspects. Your focus can remain on
              the vision for your website while I take care of the intricate
              technological details.
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
              If you're interested in my Web Design & Development services, feel
              free to reach out through the contact form on this site or
              LinkedIn. Let's discuss your project needs and how I can
              contribute to its success.
            </p>
          </Reveal>
          <div className="flex flex-row">
            <div className="absolute w-3 h-3 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mt-14 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <Reveal direction="top" delayTime={0.4} color="#9333ea">
              <CustomButton link="/contact" text="Contact" />
            </Reveal>
            <Reveal direction="top" delayTime={0.5} color="#9333ea">
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

export default WebDesignDevelopmentServiceSheet;
