export const addPost = (post) => async (dispatch) => {
  try {
    dispatch(addPost(post));
  } catch (error) {
    console.log(error.message);
  }
};
