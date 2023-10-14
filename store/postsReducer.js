import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    comments: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
    addCommentToPost: (state, action) => {
      const { postId, comment } = action.payload;

      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        state.comments.push({ postId, comment });
        post.commentsCount++;
      }
    },

    removePost: (state, action) => {
      state.posts = state.posts.filter((item) => item.id !== action.payload);
    },
    renderPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { addPost, addCommentToPost, removePost, renderPosts } =
  postsSlice.actions;
export const postsReducer = postsSlice.reducer;
