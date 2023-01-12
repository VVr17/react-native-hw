export const uploadImageToStorage = async (image) => {
  try {
    const response = await fetch(image);
    const file = await response.blob(); // change format to Blob
    const uniquePostId = Date.now().toString();

    const storageRef = ref(storage, `postImage/${uniquePostId}`);

    const data = await uploadBytes(storageRef, file);
    console.log("data upload", data);
    console.log("Uploaded a blob or file!");
    // return data.name; // id
  } catch (error) {
    console.error("Error adding image: ", error);
  }
};
