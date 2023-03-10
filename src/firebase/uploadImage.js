import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./config";

export const uploadImage = async (image) => {
  try {
    const response = await fetch(image);
    const file = await response.blob(); // change format to Blob
    const postId = Date.now();

    const imageRef = ref(storage, `postImages/${postId}`);

    await uploadBytes(imageRef, file); //upload image

    const imageUrl = await getDownloadURL(imageRef); // get image Url
    return imageUrl;
  } catch (error) {
    console.error("Error adding image: ", error.message);
  }
};
