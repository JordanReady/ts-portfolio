"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getSession, useSession } from "next-auth/react";
import styles from "./Profile.module.css";
import EditProfileForm from "@/components/EditProfileForm";
import ProfileCard from "@/components/ProfileCard";
import Review from "@/components/Review";
import Reveal from "@/components/Reveal";
import LeaveReviewForm from "@/components/LeaveReviewForm";

function Profile() {
  const [userName, setUserName] = useState<string | null>(null);
  const [userImg, setUserImg] = useState<string | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      console.log(session);

      // Check if the user is logged in
      if (session && session.user) {
        // Assuming you have a field for user's name in the session user object
        setUserName(session.user.name || null);
        setUserImg(session.user.image || null);
        // create in firebase
        // get users proffession and bio
      }
    };

    fetchSession();
  }, []);
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
          {userName !== null && userImg !== null && (
            <ProfileCard name={userName} img={userImg} />
          )}
          {userName !== null && userImg === null && (
            <ProfileCard name={userName} />
          )}
          {userName === null && userImg === null && <ProfileCard />}
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
          <EditProfileForm />
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
        <div className="grid grid-cols-1   gap-8">
          <Reveal direction="top" color="grey" delayTime={0.5}>
            <Review />
          </Reveal>
          <Reveal direction="top" color="grey" delayTime={0.5}>
            <Review />
          </Reveal>
          <Reveal direction="top" color="grey" delayTime={0.5}>
            <Review />
          </Reveal>
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
          <LeaveReviewForm />
        </Reveal>
      </div>
    </div>
  );
}

export default Profile;
