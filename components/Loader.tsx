import React from "react";
import styles from "./Loader.module.css"; // Import your stylesheet

const Loader = () => {
  return (
    <div
      className={`flex gap-2 mt-2 justify-center items-center ${styles.loaderContainer}`}
    >
      {[1, 2, 3, 4, 5, 6, 7].map((index) => (
        <div
          key={index}
          className={`${styles.loaderBar} dark:bg-gray-300 ${
            styles[`loaderBar${index}`]
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Loader;
