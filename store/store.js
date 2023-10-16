import { postsReducer } from "./postsReducer";
import { authReducer } from "./authReducer";
import { configureStore } from "@reduxjs/toolkit";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    authenticate: authReducer,
  },
});

export default store;
