import React from "react";
import styles from "./ServiceSheet.module.css";

const WebDesignDevelopmentServiceSheet = () => {
  return (
    <div className={styles.serviceSheet}>
      <h2 className={styles.serviceTitle}>Website Design and Development</h2>
      <p className={styles.description}>
        Elevate your online presence with my Website Design and Development
        services. As a freelance software developer, I combine technical
        expertise with a keen eye for design to create visually appealing and
        functionally robust websites tailored to your business needs.
      </p>
      <div className={styles.keyDetails}>
        <h3>Key Details:</h3>
        <ul>
          <li>
            Custom website design and development to align with your brand and
            business goals.
          </li>
          <li>
            Responsive and user-friendly interfaces ensuring an optimal user
            experience across devices.
          </li>
          <li>
            Integration of modern technologies and frameworks for enhanced
            performance and functionality.
          </li>
        </ul>
      </div>
      <div className={styles.processOverview}>
        <h3>Process Overview:</h3>
        <ol>
          <li>
            Initial consultation to understand your brand, target audience, and
            specific design preferences.
          </li>
          <li>
            Creation of wireframes and design mockups for your approval before
            the development phase.
          </li>
          <li>
            Agile development approach with regular updates and feedback loops
            for iterative improvements.
          </li>
          <li>
            Thorough testing procedures to ensure the website functions
            seamlessly across different browsers and devices.
          </li>
          <li>
            Deployment and ongoing support to address any post-launch
            adjustments or enhancements.
          </li>
        </ol>
      </div>
      <div className={styles.technologiesUsed}>
        <h3>Technologies Used:</h3>
        <p>
          Utilizing cutting-edge technologies such as Next.js, React,
          TypeScript, and Firebase to deliver modern, performant, and secure
          websites.
        </p>
      </div>
      {/* Add more sections as needed (Portfolio Showcase, Client Testimonials, Pricing, etc.) */}
      <div className={styles.contactInformation}>
        <h3>Contact Me:</h3>
        <p>
          If you're ready to enhance your online presence through bespoke
          website design and development, let's discuss your project
          requirements. Reach out for a personalized consultation.
        </p>
        {/* Add your contact details or a CTA button here */}
      </div>
    </div>
  );
};

export default WebDesignDevelopmentServiceSheet;
