import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./config";
import { nanoid } from "nanoid";

export const uploadImage = async (image) => {
  try {
    const response = await fetch(image);
    const file = await response.blob(); // change format to Blob
    const postId = nanoid();

    const imageRef = ref(storage, `postImages/${postId}`);

    await uploadBytes(imageRef, file);

    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
  } catch (error) {
    console.error("Error adding image: ", error.message);
  }
};
