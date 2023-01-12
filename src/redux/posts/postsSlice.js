import { createSlice } from "@reduxjs/toolkit";

const initialPostsState = [];

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  reducers: {
    // getPosts: () => ({

    // }),
    addPost: (state, { payload }) => ({
      ...state,
      payload,
    }),
  },
});

export const posts = postsSlice.name;
export const { addPost } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
