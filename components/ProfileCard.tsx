"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ProfileCard.module.css";
import Reveal from "./Reveal";
import { useSession } from "next-auth/react";
import { CircleUserRound } from "lucide-react";
import { getUserData } from "@/utils/firebaseUtils";
import { db } from "@/firebase";

interface ProfileCardProps {
  name?: string | null;
  profession?: string;
  img?: string | null;
  bio?: string;
  triggerFetch: boolean;
  setTriggerFetch: React.Dispatch<React.SetStateAction<boolean>>;
}

function ProfileCard({
  name = "User Name",
  profession = "Profession / Business",
  img,
  bio = "Update your bio with a bit of information about yourself or business!",
  triggerFetch,
  setTriggerFetch,
}: ProfileCardProps) {
  const [userName, setUserName] = useState<string | null>(null);
  const [userImg, setUserImg] = useState<string | null>(null);
  const [userProfession, setUserProfession] = useState<string | null>(null);
  const [userBio, setUserBio] = useState<string | null>(null);
  const { data: session } = useSession();
  console.log(session);

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
      }
    };

    fetchUserData();
    setTriggerFetch(false);
  }, [triggerFetch]);

  return (
    <div
      className={`${styles.card} bg-white dark:bg-gray-800 p-0.5 relative mb-2 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 shadow-md`}
    >
      <div className="bg-white p-4 sm:p-6 rounded-md dark:bg-slate-900">
        <div className={styles.topRow}>
          <div
            className={`${styles.logo} relative p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 shadow-md`}
          >
            <Reveal direction="left" delayTime={0.2}>
              {userImg && (
                <Image
                  loading="lazy"
                  sizes="fill"
                  src={userImg}
                  alt="Profile Image"
                  width={155}
                  height={155}
                  className={`${styles.logoImg} bg-white dark:bg-slate-900 border-b-1 gap-2 rounded-full`}
                />
              )}
              {!userImg && (
                <CircleUserRound
                  size={155}
                  strokeWidth={0.5}
                  className={`${styles.logoImg} bg-white dark:bg-slate-900 p-2`}
                />
              )}
            </Reveal>
          </div>
          <div className={styles.nameTitleGroup}>
            <Reveal direction="right" delayTime={0.3}>
              <h2 className="text-3xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
                {userName || name || "User Name"}
              </h2>
            </Reveal>
            <Reveal color="grey" direction="right" delayTime={0.4}>
              <p className="mb-4">
                {userProfession || profession || "User Profession"}
              </p>
            </Reveal>
          </div>
        </div>
        <Reveal color="grey" direction="top" delayTime={0.4}>
          <p className="mt-3">{userBio || bio || "User Bio"}</p>
        </Reveal>
      </div>
    </div>
  );
}

export default ProfileCard;
