import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";
import { getSession, useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import styles from "./userButton.module.css";
import UserAvatar from "@/components/UserAvatar";
import { CircleUserRound } from "lucide-react";

function UserButton() {
  const [userName, setUserName] = useState<string | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();

      // Check if the user is logged in
      if (session && session.user) {
        // Assuming you have a field for user's name in the session user object
        setUserName(session.user.name || null);
      }
    };

    fetchSession();
  }, []);

  return (
    <DropdownMenu>
      {session ? (
        <DropdownMenuTrigger>
          <UserAvatar />
        </DropdownMenuTrigger>
      ) : (
        // User is not signed in, render the Open button
        <Link href={"/login"}>
          <Button
            className="group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 p-0"
            variant="outline"
          >
            <CircleUserRound className="text-white" strokeWidth={1} />
          </Button>
        </Link>
      )}

      <DropdownMenuContent className={styles.contentContainer}>
        {session ? (
          // Render a link to "/profile" if the user is logged in
          <Link href="/profile" className="text-gray-500 dark:text-gray-400">
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </Link>
        ) : (
          // Render a button that calls signIn if the user is not logged in
          <Link
            className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 font-semibold"
            href={"/login"}
          >
            Login
          </Link>
        )}

        {userName && (
          <>
            <Link
              className=" text-gray-500 dark:text-gray-400"
              href={"/profile"}
            >
              <DropdownMenuItem>Leave Review</DropdownMenuItem>
            </Link>
            <Link
              className=" text-gray-500 dark:text-gray-400"
              href={"/reviews"}
            >
              <DropdownMenuItem>See Reviews</DropdownMenuItem>
            </Link>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              className={
                "text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 font-semibold hover:cursor-pointer"
              }
              onClick={() => signOut()}
            >
              Log out
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
