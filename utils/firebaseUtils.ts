import {
  doc,
  getDoc,
  Firestore,
  DocumentData,
  updateDoc,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebase";

export async function getUserData(
  db: Firestore,
  userId: string
): Promise<DocumentData | null> {
  try {
    const userRef = doc(db, "users", userId);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      return userSnapshot.data();
    } else {
      throw new Error("User data not found");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

interface UserProfile {
  bio: string;
  profession: string;
  name: string;
}

export const updateProfile = async (
  db: Firestore,
  userId: string,
  { bio, profession, name }: UserProfile
): Promise<void> => {
  try {
    const userRef = doc(db, "users", userId);
    const userData = await getDoc(userRef);

    if (userData.exists()) {
      // Build the update object based on provided non-empty and non-null values
      const updateObject: Record<string, any> = {};

      if (bio !== null && bio !== "") {
        updateObject.bio = bio;
      }

      if (profession !== null && profession !== "") {
        updateObject.profession = profession;
      }

      if (name !== null && name !== "") {
        updateObject.name = name;
      }

      // User document exists, update the fields
      await setDoc(userRef, updateObject, { merge: true });
    } else {
      // User document doesn't exist, create a new one
      await setDoc(userRef, {
        bio,
        profession,
        name,
      });
    }

    console.log("Profile updated successfully!");
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
