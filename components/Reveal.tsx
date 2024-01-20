"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delayTime?: number;
  color?: string;
  direction?: "top" | "bottom" | "left" | "right";
  duration?: number;
}

function Reveal({
  children,
  width = "fit-content",
  delayTime,
  color,
  direction,
  duration = 0.5,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, controls, slideControls]);

  const getSlideDirection = () => {
    switch (direction) {
      case "top":
        return { top: "100%" };
      case "bottom":
        return { bottom: "100%" };
      case "left":
        return { left: "100%" };
      case "right":
        return { right: "100%" };
      default:
        return { top: "100%" };
    }
  };

  const getTextDirectionHid = () => {
    switch (direction) {
      case "top":
        return { y: 75 };
      case "bottom":
        return { y: -75 };
      case "left":
        return { x: 75 };
      case "right":
        return { x: -75 };
      default:
        return { rotate: 0 };
    }
  };

  const getTextDirectionVis = () => {
    switch (direction) {
      case "top":
        return { y: 0 };
      case "bottom":
        return { y: 0 };
      case "left":
        return { x: 0 };
      case "right":
        return { x: 0 };
      default:
        return { y: 0 };
    }
  };

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={{
          visible: { opacity: 1, ...getTextDirectionVis() },
          hidden: { opacity: 0, ...getTextDirectionHid() },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: duration,
          delay: delayTime !== undefined ? 0.2 + delayTime : 0,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, left: 0 },
          visible: { opacity: 1, ...getSlideDirection() },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: duration, ease: "easeIn", delay: delayTime }}
        style={{
          position: "absolute",
          top: 0,
          bottom: 4,
          right: 0,
          background: color !== undefined ? color : "var(--primary-color)",
          zIndex: 10,
        }}
      />
    </div>
  );
}

export default Reveal;
