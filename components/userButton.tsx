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
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getSession, useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import styles from "./userButton.module.css";

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
      <DropdownMenuTrigger>
        <Button
          className="shadow-purple-300 dark:shadow-purple-700 shadow-sm border border-b-1 gap-2 dark:text-purple-300"
          variant={"outline"}
        >
          Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={styles.contentContainer}>
        <DropdownMenuLabel
          className={` ${styles.title} text-purple-400 dark:text-purple-600`}
        >
          {userName ? `${userName}` : "Create Account"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {session ? (
            // Render a link to "/profile" if the user is logged in
            <Link href="/profile" className="text-gray-500 dark:text-gray-400">
              Profile
            </Link>
          ) : (
            // Render a button that calls signIn if the user is not logged in
            <button
              className="text-gray-500 dark:text-gray-400"
              onClick={() => signIn()}
            >
              Login
            </button>
          )}
        </DropdownMenuItem>
        {userName && (
          <>
            <DropdownMenuItem>
              <Link
                className=" text-gray-500 dark:text-gray-400"
                href={"/review"}
              >
                Leave Review
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="text-gray-500 dark:text-gray-400"
                href={"/support"}
              >
                Support Me
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className={styles.title}
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
