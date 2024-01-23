import React, { useState } from "react";
import styles from "./EditProfileForm.module.css";
import Reveal from "./Reveal";
import CustomButton from "./CustomButton";
import { Star } from "lucide-react"; // Assuming you have a Star component from Lucid library

interface StarsData {
  value: number;
  color: string;
}

function EditProfileForm() {
  const [rating, setRating] = useState<number>(0); // State to hold the rating

  // Function to handle star click and update the rating
  const handleStarClick = (index: number) => {
    setRating(index);
  };

  const starsData: StarsData[] = [
    { value: 1, color: "#9333ea" },
    { value: 2, color: "#7540ee" },
    { value: 3, color: "#615cfb" },
    { value: 4, color: "#4d74fa" },
    { value: 5, color: "#3b82f6" },
  ];

  return (
    <div className="flex">
      <div
        className={`relative p-0.5 mb-2  overflow-hidden text-sm font-medium rounded-lg ${styles.formContainer} bg-gradient-to-br from-purple-600 to-blue-500 `}
      >
        <form
          className={`max-w-md mx-auto relative px-5 py-2.5 ${styles.form} bg-white dark:bg-slate-900 rounded-md group-hover:bg-opacity-0`}
        >
          {/* ... Existing form inputs ... */}

          {/* Rating Section */}
          <div className="mb-4">
            <Reveal direction="top" delayTime={0.2} color="#9333ea">
              <label className="block text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl mb-2 font-semibold">
                Rating
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl font-semibold">
                  *
                </span>
              </label>
            </Reveal>
            <div className="flex items-center space-x-1">
              {starsData.map(({ value, color }) => (
                <Star
                  key={value}
                  color={value <= rating ? color : "rgb(148 163 184)"}
                  onClick={() => handleStarClick(value)}
                />
              ))}
            </div>
          </div>

          {/* Review Section */}
          <div className="mb-4">
            <Reveal direction="top" delayTime={0.4} color="#9333ea">
              <label className="block text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl mb-2 font-semibold">
                Review
              </label>
            </Reveal>
            <Reveal width="100%" direction="top" delayTime={0.45} color="grey">
              <textarea
                className={` ${styles.input} dark:bg-slate-800 border rounded-md p-2`}
                rows={4}
                placeholder="Leave your review here..."
              ></textarea>
            </Reveal>
          </div>

          <Reveal direction="top" delayTime={0.5} color="#9333ea">
            <CustomButton text="Submit" />
          </Reveal>
        </form>
      </div>
    </div>
  );
}

export default EditProfileForm;
