"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

function UserAvatar() {
  const { data: session } = useSession();
  const imgUrl = session?.user?.image;

  return (
    <>
      {imgUrl && (
        <Image
          alt="User Image"
          src={imgUrl}
          width={50}
          height={50}
          className="shadow-purple-300 dark:shadow-purple-700  shadow-sm border border-b-1 gap-2 rounded-full"
          loading="lazy"
        />
      )}
    </>
  );
}

export default UserAvatar;
