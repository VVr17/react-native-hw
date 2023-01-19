import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "./config";

export const addComment = async ({ postId, userLogin, comment }) => {
  try {
    // Add a new document with a generated id.
    const postRef = doc(db, "posts", postId); // find post
    const commentsListRef = collection(postRef, "comments"); // find comments collection
    const commentRef = await addDoc(commentsListRef, {
      comment,
      userLogin,
    });

    console.log("Document written with ID: ", commentRef.id);
  } catch (error) {
    console.error("Error adding post: ", error.message);
  }
};
