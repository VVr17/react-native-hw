import { addDoc, collection } from "firebase/firestore";
import { db } from "./config";
import { uploadImage } from "./uploadImage";

export const addPost = async (postData) => {
  try {
    const { userId, pictureUri, locationName, title, location } = postData;
    const imageUrl = await uploadImage(pictureUri);

    // Add a new document with a generated id.
    const imageRef = await addDoc(collection(db, "posts"), {
      userId,
      title,
      location,
      locationName,
      imageUrl,
    });
    console.log("Document written with ID: ", imageRef.id);
  } catch (error) {
    console.error("Error adding post: ", error.message);
  }
};
