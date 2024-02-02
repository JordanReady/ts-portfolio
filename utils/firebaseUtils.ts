import {
  doc,
  getDoc,
  Firestore,
  DocumentData,
  updateDoc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
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

export const addReview = async (
  db: Firestore,
  rating: number,
  reviewText: string,
  userId: string
): Promise<void> => {
  try {
    // Get the current user data (await is added here)
    const currentUser = await getUserData(db, userId);

    if (!currentUser) {
      throw new Error("User not logged in");
    }

    // Create a new review object with user information, including the image and date
    const reviewData = {
      userId,
      name: currentUser.name || "Anonymous",
      profession: currentUser.profession || "Unknown Profession",
      rating,
      review: reviewText,
      image: currentUser.image || null,
      date: new Date().toISOString(), // Add the date property
    };

    // Add the review to the "reviews" collection
    const reviewsRef = collection(db, "reviews");
    await setDoc(doc(reviewsRef), reviewData);

    console.log("Review added successfully!");
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};

export interface ReviewData {
  name: string;
  rating: number;
  review: string;
  profession: string;
  image: string | null; // Add the image property
  date: string;
}

export const getUserReviews = async (
  db: Firestore,
  userId: string
): Promise<ReviewData[]> => {
  try {
    // Create a query to get all reviews for the specified user
    const reviewsQuery = query(
      collection(db, "reviews"),
      where("userId", "==", userId)
    );

    // Execute the query and get the documents
    const reviewsSnapshot = await getDocs(reviewsQuery);

    // Extract review data from each document
    const userReviews = reviewsSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        name: data.name || "Anonymous",
        profession: data.profession || "Unknown Profession",
        rating: data.rating,
        review: data.review,
        image: data.image || null, // Add the image property
        date: data.date ? data.date.toLocaleString() : "Unknown Date",
      };
    });

    return userReviews;
  } catch (error) {
    console.error("Error getting user reviews:", error);
    throw error;
  }
};

export const getReviews = async (db: Firestore): Promise<ReviewData[]> => {
  try {
    const reviewsRef = collection(db, "reviews");
    const reviewsSnapshot = await getDocs(reviewsRef);

    const reviews = reviewsSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        name: data.name || "Anonymous",
        profession: data.profession || "Unknown Profession",
        rating: data.rating,
        review: data.review,
        image: data.image || null,
        date: data.date
          ? data.date.toLocaleString()
          : data.date || "Unknown Date",
      };
    });

    return reviews;
  } catch (error) {
    console.error("Error getting reviews:", error);
    throw error;
  }
};
