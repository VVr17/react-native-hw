import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "./config";
import { uploadImage } from "./uploadImage";

export const uploadComment = async ({ postId, userId, comment }) => {
  try {
    // Add a new document with a generated id.
    const postRef = doc(db, "posts", postId);
    const commentsListRef = collection(postRef, "comments");
    const commentRef = await addDoc(commentsListRef, { comment, userId });

    console.log("Document written with ID: ", commentRef.id);
  } catch (error) {
    console.error("Error adding post: ", error.message);
  }
};
