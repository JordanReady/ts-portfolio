import React from "react";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import AirBnb from "@/public/MainPageNews.png";

function Project() {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
          {/* First column */}
          <div className="col-span-2 md:col-span-1">
            <Reveal>
              <h2
                style={{
                  color: "var(--primary-color)",
                }}
                className="text-6xl"
              >
                AirBnb News
              </h2>
            </Reveal>
            <Reveal delayTime={0.25} color="gray">
              <h3 className="text-2xl text-slate-700 dark:text-gray-100">
                AirBnb News
              </h3>
            </Reveal>
            <Reveal delayTime={0.5} color="gray">
              <Image src={AirBnb} alt="Logo" width={1000}></Image>
            </Reveal>
          </div>

          {/* Second column */}
          <div className="col-span-2 md:col-span-1">
            {/* Text content */}
            <p className="text-gray-700">
              Your text content goes here. You can add multiple paragraphs or
              customize the styling.
            </p>

            {/* Additional text */}
            <p className="text-gray-700 mt-4">
              More text content or additional information.
            </p>

            {/* Add more text blocks as needed */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
