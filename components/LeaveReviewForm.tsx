import React, { useState } from "react";
import styles from "./EditProfileForm.module.css";
import Reveal from "./Reveal";
import CustomButton from "./CustomButton";
import { Star } from "lucide-react";
import { addReview } from "@/utils/firebaseUtils";
import { useSession } from "next-auth/react";
import { db } from "@/firebase";

interface StarsData {
  value: number;
  color: string;
}

interface FormProps {
  triggerFetch: boolean;
  setTriggerFetch: React.Dispatch<React.SetStateAction<boolean>>;
}

function LeaveReviewForm({ triggerFetch, setTriggerFetch }: FormProps) {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");
  const { data: session } = useSession();

  // Function to handle star click and update the rating
  const handleStarClick = (index: number) => {
    setRating(index);
  };

  const handleSubmit = async () => {
    try {
      console.log("Rating:", rating);
      console.log("Review Text:", reviewText);

      // Check if user is logged in
      if (session && session.user) {
        const userId = session.user.id;
        console.log("User is logged in:", session.user);
        console.log("User ID:", userId);

        // Call the addReview function with Firestore instance, rating, review text, and user ID
        await addReview(db, rating, reviewText, userId);

        console.log("Review submitted successfully!");
      } else {
        console.error("User not logged in");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
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
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
            setTriggerFetch(!triggerFetch);
          }}
        >
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
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
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

export default LeaveReviewForm;
