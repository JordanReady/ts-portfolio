import React from "react";
import Image from "next/image";
import styles from "./ProfileCard.module.css";
import Reveal from "./Reveal";
import { CircleUserRound } from "lucide-react";

interface ProfileCardProps {
  name: string | null;
  profession: string | null;
  img: string | null;
  bio: string | null;
}

function ProfileCard({ name, profession, img, bio }: ProfileCardProps) {
  return (
    <div
      className={`${styles.card} bg-white dark:bg-gray-800 p-0.5 relative mb-2 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 shadow-md`}
    >
      <div className="bg-white p-2 md:p-4 sm:p-6 rounded-md dark:bg-slate-900">
        <div className={styles.topRow}>
          <div
            className={`${styles.logo} relative p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 shadow-md`}
          >
            <Reveal direction="left" delayTime={0.2}>
              {img && (
                <Image
                  loading="lazy"
                  sizes="fill"
                  src={img}
                  alt="Profile Image"
                  width={155}
                  height={155}
                  className={`${styles.logoImg} bg-white dark:bg-slate-900 border-b-1 gap-2 rounded-full`}
                />
              )}
              {!img && (
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
                {name || "User Name"}
              </h2>
            </Reveal>
            <Reveal color="grey" direction="right" delayTime={0.4}>
              <p className="mb-4">{profession || "User Profession"}</p>
            </Reveal>
          </div>
        </div>
        <Reveal color="grey" direction="top" delayTime={0.4}>
          <p className="mt-3">
            {bio ||
              "Update your bio with a bit of information about yourself or business!"}
          </p>
        </Reveal>
      </div>
    </div>
  );
}

export default ProfileCard;
