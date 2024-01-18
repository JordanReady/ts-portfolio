import React from "react";
import styles from "./ServiceSheet.module.css";

const ContractWorkServiceSheet = () => {
  return (
    <div className={styles.serviceSheet}>
      <h2 className={styles.serviceTitle}>Contract Work</h2>
      <p className={styles.description}>
        As a freelance software developer, I offer Contract Work services to
        meet your specific development needs. Whether you need individual
        expertise or assistance for your development team, I'm here to help you
        achieve your project goals efficiently.
      </p>
      <div className={styles.keyDetails}>
        <h3>Key Details:</h3>
        <ul>
          <li>Customized solutions based on your project requirements.</li>
          <li>
            Freelance expertise available for both individual tasks and
            collaborative projects.
          </li>
          <li>
            Flexible engagement models for seamless collaboration with your
            existing team.
          </li>
        </ul>
      </div>
      <div className={styles.processOverview}>
        <h3>Process Overview:</h3>
        <ol>
          <li>
            Initial consultation to understand your project's unique
            requirements and challenges.
          </li>
          <li>
            Proposal and agreement on the scope of work, timeline, and
            collaboration model.
          </li>
          <li>
            Development phase with regular updates and feedback loops to ensure
            alignment with your goals.
          </li>
          <li>
            Quality assurance and testing procedures to deliver a polished and
            reliable product.
          </li>
          <li>
            Delivery of the final product with ongoing support if required.
          </li>
        </ol>
      </div>
      <div className={styles.technologiesUsed}>
        <h3>Technologies Used:</h3>
        <p>
          I specialize in technologies such as Next.js, React, TypeScript, and
          Firebase, ensuring modern and efficient solutions for your projects.
        </p>
      </div>
      {/* Add more sections as needed (Timeline, Client Testimonials, Pricing, etc.) */}
      <div className={styles.contactInformation}>
        <h3>Contact Me:</h3>
        <p>
          If you're interested in my Contract Work services, feel free to reach
          out. Let's discuss your project needs and how I can contribute to its
          success.
        </p>
        {/* Add your contact details or a CTA button here */}
      </div>
    </div>
  );
};

export default ContractWorkServiceSheet;
