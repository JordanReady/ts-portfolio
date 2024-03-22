"use client";
import React, { useState } from "react";
import styles from "./Review.module.css";
import Image, { StaticImageData } from "next/image";
import { CircleUserRound, Star } from "lucide-react";
import Reveal from "./Reveal";
import { deleteReview } from "@/utils/firebaseUtils";
import { db } from "@/firebase";

interface ReviewProps {
  name: string | null;
  profession: string | null;
  rating: number;
  review: string;
  img: string | StaticImageData | null;
  date: string;
  allowDelete?: boolean;
  reviewId: string;
  triggerFetch?: boolean;
  setTriggerFetch?: React.Dispatch<React.SetStateAction<boolean>>;
}

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const formattedDate = new Date(dateString).toLocaleDateString(
    undefined,
    options
  );

  return formattedDate;
};

function Review({
  name,
  profession,
  rating,
  review,
  img,
  date,
  allowDelete,
  reviewId,
  triggerFetch,
  setTriggerFetch,
}: ReviewProps) {
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  // Define star colors here
  const starColors = ["#9333ea", "#7540ee", "#615cfb", "#4d74fa", "#3b82f6"];

  // Display only the specified number of stars based on the rating
  const displayedStars = starColors.slice(0, rating);

  const handleDeleteClick = async () => {
    try {
      // Call deleteReview function with the reviewId prop
      await deleteReview(db, reviewId);
      setIsDeleteClicked(true);
      // Update the triggerFetch state to trigger a fetch after deleting the review
      if (setTriggerFetch) {
        setTriggerFetch(!triggerFetch);
      }
    } catch (error) {
      console.error("Error deleting review:", error);
      // Handle error if needed
    }
  };

  return (
    <div
      className={`${styles.card} bg-white dark:bg-gray-800 p-0.5 relative  mb-2  overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 shadow-md`}
    >
      {allowDelete && !isDeleteClicked && (
        <button
          className="absolute top-2 right-2 p-2 rounded-full bg-red-500 text-white hover:bg-red-600"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      )}
      <div className="bg-white p-2 md:p-5 rounded-md dark:bg-slate-900">
        <div className={`${styles.topRow} gap-3`}>
          <Reveal direction="left" delayTime={0.4}>
            <div
              className={`${styles.logo} relative p-0.5 mb-2  overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 shadow-md`}
            >
              {/* You can customize the Image component based on your props */}
              {img && (
                <Image
                  loading="lazy"
                  sizes="fill"
                  src={img}
                  alt="Profile Image"
                  width={150}
                  height={150}
                  className={`${styles.logoImg} bg-white dark:bg-slate-900 border-b-1 rounded-full`}
                />
              )}
              {!img && (
                <CircleUserRound
                  size={155}
                  strokeWidth={0.5}
                  className={`${styles.logoImg} bg-white dark:bg-slate-900 p-2`}
                />
              )}
            </div>
          </Reveal>
          <div className={styles.nameTitleGroup}>
            <Reveal direction="right" delayTime={0.5}>
              <h2 className="text-3xl font-semibold mb-1 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
                {name}
              </h2>
            </Reveal>
            <Reveal color="grey" direction="right" delayTime={0.6}>
              <p className=" mb-2">{profession}</p>
            </Reveal>
            <div className={`${styles.stars} mb-2 flex`}>
              {/* Map through the displayedStars array to dynamically generate stars with different colors */}
              {displayedStars.map((color, index) => (
                <Reveal
                  key={index}
                  color={color}
                  direction="top"
                  delayTime={0.625 + index * 0.025}
                >
                  <Star color={color} fill={color} />
                </Reveal>
              ))}
            </div>
            <Reveal color="grey" direction="top" delayTime={0.7}>
              <p className=" text-sm text-gray-500 dark:text-gray-400">
                {formatDate(date)}
              </p>
            </Reveal>
          </div>
        </div>
        <Reveal color="grey" direction="top" delayTime={0.7}>
          <p className="mt-3 pb-1">{review}</p>
        </Reveal>
      </div>
    </div>
  );
}

export default Review;
