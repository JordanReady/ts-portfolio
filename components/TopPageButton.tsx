"use client";
import React, { useState, useEffect } from "react";
import SpaceShip from "@/public/SpaceShipIcon.png";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const TopPageButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll: EventListener = () => {
    // Set showButton to true when the user has scrolled down, otherwise false
    setShowButton(window.scrollY > 100); // Adjust the scroll threshold as needed
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    // Render the button only when showButton is true
    showButton && (
      <Reveal color="grey" direction="right">
        <button
          onClick={scrollToTop}
          className="w-16 md:w-24 fixed bottom-1 right-1 bg-transparent text-white"
        >
          <Image src={SpaceShip} alt="Top of page button" />
          <span className="sr-only">Top of page</span>
        </button>
      </Reveal>
    )
  );
};

export default TopPageButton;
