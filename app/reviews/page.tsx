"use client";
import React, { useEffect, useState } from "react";
import Review from "@/components/Review";
import { getReviews, ReviewData } from "@/utils/firebaseUtils";
import { db } from "@/firebase";
import Reveal from "@/components/Reveal";

function ReviewsPage() {
  const [reviews, setReviews] = useState<ReviewData[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Assuming you have access to the Firestore instance
        const fetchedReviews = await getReviews(db);
        setReviews(fetchedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="container">
      <div className="grid grid-cols-1 mt-4 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {reviews.map((review, index) => (
          <Reveal direction="top" delayTime={0.2} color="#9333ea">
            <Review
              key={index}
              img={review.image}
              name={review.name}
              profession={review.profession}
              rating={review.rating}
              review={review.review}
              date={review.date}
              reviewId={review.reviewId}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default ReviewsPage;
