import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((item) => item.id !== action.payload);
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { addPost, removePost, setPosts } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
