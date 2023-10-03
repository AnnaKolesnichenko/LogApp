import { postsReducer } from "./postsReducer";
import { authReducer } from "./authReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    authenticate: authReducer,
  },
});

export default store;
