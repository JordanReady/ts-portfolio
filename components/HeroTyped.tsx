"use client";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function App() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full-Stack Developer",
        "Keyboard Warrior",
        "Software Engineer",
        "Coding Enthusiast",
        "Problem Solver",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 1000,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 500,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el}></span>;
}
