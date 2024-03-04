"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Icon1 from "@/public/ServiceIconSPA.png";
import Icon2 from "@/public/ServiceIconMPA.png";
import Icon3 from "@/public/ServiceIconSEO.png";
import Icon4 from "@/public/ServiceIconEcom.png";
import Icon5 from "@/public/ServiceIconDB.png";
import Icon6 from "@/public/ServiceIconMaintenance.png";
import Icon7 from "@/public/ServiceIconContract.png";
import Reveal from "@/components/Reveal";

const content = [
  {
    title: "Single Page Application",
    price: "$100 - $1,000+",
    description:
      "Includes design and development of a single-page application with interactive features. Additional charges may apply for complex animations or custom functionalities.",
    lowExample: `Low-End Example: 
    Development of a straightforward single-page application with a basic design. 
    Suitable for personal projects or small businesses looking for a simple online presence. 
    Limited interactive features and standard layout. `,

    highExample: `High-End Example:
    Full-scale design and development of a single-page application with a visually appealing and modern interface. 
    Ideal for businesses or individuals requiring complex animations, custom functionalities, and a highly interactive user experience.
    Integration of advanced features, such as real-time updates, dynamic content loading, and seamless transitions. `,

    icon: Icon1,
  },
  {
    title: "Multipage Application",
    price: "$500 - $2,500+",
    description:
      "Development of a multi-page website with a structured navigation system. The pricing may vary based on the number of pages and complexity.",
    lowExample: `Low-End Example:
    Development of a basic multi-page website with a simple navigation structure. 
    Suitable for small businesses or personal portfolios requiring a few pages. 
    Standard design and minimal interactive features. `,
    highExample: `High-End Example:
    Comprehensive development of a multi-page website with a sophisticated navigation system. 
    Tailored for large enterprises or content-heavy platforms with complex requirements. 
    Customized design, advanced interactive features, and integration with external APIs. `,
    icon: Icon2,
  },
  {
    title: "Database / User Authentication Integration",
    price: "$500 - $2,500+",
    description:
      "Involves setting up and integrating databases, user authentication systems, and secure login functionalities. Costs may increase for advanced security measures.",
    lowExample: `Low-End Example:
    Basic setup and integration of a database with standard user authentication features. 
    Suitable for small-scale projects or websites requiring a secure login system without advanced security measures. 
    Limited customization and additional functionalities. `,
    highExample: `High-End Example:
    Comprehensive database integration with advanced user authentication systems, including multi-factor authentication and role-based access control. 
    Implementation of robust security measures, such as encryption and secure password storage. 
    Tailored solutions for businesses or applications handling sensitive user data, providing a highly secure and scalable user authentication experience. `,
    icon: Icon5,
  },
  {
    title: "Ecommerce Integration",
    price: "$2000 - $10,000+",
    description:
      "Development of an e-commerce platform with features like product listings, shopping cart, and secure payment integration. Pricing varies based on the complexity of the e-commerce solution.",
    lowExample: `Low-End Example:
    Implementation of a basic e-commerce platform with essential features such as product listings, a simple shopping cart, and secure payment integration. 
    Suitable for small businesses or startups entering the online market with a limited number of products. `,
    highExample: `High-End Example:
    Development of a comprehensive and scalable e-commerce platform with advanced features. 
    Customized product listings, dynamic search functionalities, and a sophisticated shopping cart experience. 
    Integration with multiple payment gateways, advanced security measures, and robust inventory management. 
    Tailored e-commerce solution for large-scale businesses with a diverse product range, complex shipping requirements, and a high volume of transactions. `,
    icon: Icon4,
  },
  {
    title: "SEO and Google Analytics Integration",
    price: "$500 - $2,500+",
    description:
      "Implementation of SEO best practices, meta tags, and Google Analytics integration for comprehensive website tracking. Pricing may depend on the depth of SEO analysis and customization.",
    lowExample: `Low-End Example :
    Basic implementation of SEO best practices, including meta tags and basic keyword optimization. 
    Standard integration of Google Analytics for basic website tracking. 
    Suitable for smaller websites or businesses looking for essential SEO and analytics features. `,
    highExample: `High-End Example :
    In-depth SEO analysis and optimization, including advanced keyword research and content strategy. 
    Customized meta tags, structured data, and comprehensive on-page SEO enhancements. 
    Advanced Google Analytics integration with custom event tracking, goal setup, and detailed analytics reporting. 
    Tailored SEO strategy for businesses aiming to achieve a strong online presence, compete in competitive markets, and maximize website performance. `,
    icon: Icon3,
  },
  {
    title: "Maintenance and Support",
    price: "Monthly 5-15% Initial Project Cost",
    description:
      "Ongoing support, bug fixes, and updates to ensure the website's functionality and security. Monthly retainer may include a set number of hours for maintenance tasks.",
    lowExample: `Low-End Example:
    Monthly retainer for ongoing support and maintenance. 
    Up to 5 hours of dedicated support per month. 
    Regular bug fixes, minor updates, and security checks to ensure the website's stability. `,
    highExample: `High-End Example:
    Comprehensive monthly retainer for proactive maintenance and robust support. 
    Up to 20 hours of dedicated support per month. 
    Priority bug resolution, continuous monitoring, and implementation of security measures. 
    Regular updates to improve website performance, add new features, and ensure compatibility with the latest technologies. 
     `,
    icon: Icon6,
  },
  {
    title: "Customization and Contract Work",
    description: `Tailored solutions are available for personalized projects. Whether you need modifications to the existing packages or require custom development, I am here to help. Additionally, I am open to contract work for agencies or teams in need of a skilled developer. Please feel free to reach out to me with any questions or concerns you may have with anything related to the website services I provide! `,
    price: "Contact Me",
    contact: true,
    icon: Icon7,
  },
];
export default function WebsitePackageOverview() {
  return (
    <>
      <Reveal direction="top" style="flex justify-center" width="100%">
        <h2 className="text-3xl mb-0 md:text-4xl mt-8 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 md:mb-8">
          Website Services Package Overview
        </h2>
      </Reveal>
      <div className="flex flex-col items-between ">
        <Reveal color="" delayTime={0.1}>
          <StickyScroll content={content} />
        </Reveal>
      </div>
    </>
  );
}
