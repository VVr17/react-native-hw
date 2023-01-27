import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "./config";

export const addComment = async (data) => {
  const { postId, userLogin, userAvatar, comment } = data;

  try {
    // Add a new document with a generated id.
    const postRef = doc(db, "posts", postId); // find post
    const commentsListRef = collection(postRef, "comments"); // find comments collection
    const commentRef = await addDoc(commentsListRef, {
      comment,
      userLogin,
      userAvatar,
    });

    console.log("Document written with ID: ", commentRef.id);
  } catch (error) {
    console.error("Error adding post: ", error.message);
  }
};
