import React from "react";
import styles from "./ServiceSheet.module.css"; // Adjust the stylesheet import as per your project structure

const PersonalProjectDevelopmentServiceSheet = () => {
  return (
    <div className={styles.serviceSheet}>
      <h2 className={styles.serviceTitle}>Personal Project Development</h2>
      <p className={styles.description}>
        Turn your personal projects and SaaS ideas into reality with my
        specialized development services. As a freelance software developer, I
        offer hands-on expertise to bring your vision to life, ensuring the
        success of your project.
      </p>
      <div className={styles.keyDetails}>
        <h3>Key Details:</h3>
        <ul>
          <li>
            Customized development solutions tailored to your specific project
            requirements.
          </li>
          <li>
            Collaborative approach with regular updates and feedback sessions
            throughout the development process.
          </li>
          <li>
            Integration of cutting-edge technologies and best practices for
            optimal performance and scalability.
          </li>
        </ul>
      </div>
      <div className={styles.processOverview}>
        <h3>Process Overview:</h3>
        <ol>
          <li>
            Initial consultation to understand the scope, goals, and technical
            requirements of your personal project or SaaS idea.
          </li>
          <li>
            Development of a comprehensive project plan outlining milestones,
            timelines, and deliverables.
          </li>
          <li>
            Agile development methodology with iterative testing and continuous
            improvements based on your feedback.
          </li>
          <li>
            Thorough testing and quality assurance to ensure a robust and
            reliable end product.
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
          Utilizing a stack of technologies such as Next.js, React, TypeScript,
          and Firebase to ensure the development of secure, scalable, and
          innovative solutions.
        </p>
      </div>
      {/* Add more sections as needed (Portfolio Showcase, Client Testimonials, Pricing, etc.) */}
      <div className={styles.contactInformation}>
        <h3>Contact Me:</h3>
        <p>
          If you have a personal project or SaaS idea that you're passionate
          about, let's discuss how we can bring it to life. Reach out for a
          personalized consultation and turn your vision into a successful
          reality.
        </p>
        {/* Add your contact details or a CTA button here */}
      </div>
    </div>
  );
};

export default PersonalProjectDevelopmentServiceSheet;
