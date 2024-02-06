"use client";
import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import EditProfileForm from "@/components/EditProfileForm";
import ProfileCard from "@/components/ProfileCard";
import Review from "@/components/Review";
import Reveal from "@/components/Reveal";
import LeaveReviewForm from "@/components/LeaveReviewForm";
import { useSession } from "next-auth/react";
import { getUserData, getUserReviews } from "@/utils/firebaseUtils";
import { db } from "@/firebase";

// Define TypeScript interface for user data
interface UserData {
  name: string | null;
  image: string | null;
  profession: string | null;
  bio: string | null;
}

interface ReviewData {
  name: string;
  rating: number;
  review: string;
  profession: string;
  date: string;
}

// Your ProfilePage component
function Profile() {
  const [userName, setUserName] = useState<string | null>(null);
  const [userImg, setUserImg] = useState<string | null>(null);
  const [userProfession, setUserProfession] = useState<string | null>(null);
  const [userBio, setUserBio] = useState<string | null>(null);
  const [triggerFetch, setTriggerFetch] = useState(true);
  const { data: session } = useSession();
  const [userReviews, setUserReviews] = useState<ReviewData[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      // Assuming you have a way to get the user ID
      const userId = session?.user.id;

      // Call the getUserData function to get user data
      const userData = await getUserData(db, userId);

      if (userData) {
        setUserName(userData.name || null);
        setUserImg(userData.image || null);
        setUserProfession(userData.profession || null);
        setUserBio(userData.bio || null);

        // Fetch user reviews
        const reviews = await getUserReviews(db, userId);
        if (reviews) {
          // Extract reviews from the objects with numeric keys
          const extractedReviews = Object.values(reviews) as ReviewData[];

          // Set the state with the extracted reviews
          setUserReviews(extractedReviews);
        }
      }
    };

    fetchUserData();
    setTriggerFetch(false);
  }, [triggerFetch]);

  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left column - Profile Card */}
      <div className="md:col-span-1">
        <Reveal direction="top" delayTime={0}>
          <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
            Profile Card
          </h2>
        </Reveal>

        <Reveal direction="right" delayTime={0}>
          <ProfileCard
            name={userName}
            img={userImg}
            profession={userProfession}
            bio={userBio}
          />
        </Reveal>
      </div>

      {/* Right column - Edit Profile Form */}
      <div className="md:col-span-1">
        <Reveal direction="top" delayTime={0}>
          <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
            Edit Profile Card
          </h2>
        </Reveal>
        <Reveal width="100%" direction="left" delayTime={0}>
          <EditProfileForm
            triggerFetch={triggerFetch}
            setTriggerFetch={setTriggerFetch}
          />
        </Reveal>
      </div>

      {/* Left Column - Reviews Section */}
      <div className="col-span-1 mt-8 mb-8">
        <Reveal direction="top" delayTime={0.5}>
          <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
            Your Reviews
          </h2>
        </Reveal>
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-8">
          {userReviews.map((review, index) => (
            <Reveal key={index} direction="top" color="grey" delayTime={0.5}>
              <Review
                name={review.name}
                profession={review.profession}
                rating={review.rating}
                review={review.review}
                date={review.date}
                img={userImg}
              />
            </Reveal>
          ))}
        </div>
      </div>
      {/* Left Column - Reviews Section */}
      <div className="col-span-1 mt-8 mb-8">
        <Reveal direction="top" delayTime={0.5}>
          <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">
            Leave Review
          </h2>
        </Reveal>
        <Reveal direction="left" delayTime={0} width="100%">
          <LeaveReviewForm
            triggerFetch={triggerFetch}
            setTriggerFetch={setTriggerFetch}
          />
        </Reveal>
      </div>
    </div>
  );
}

export default Profile;
