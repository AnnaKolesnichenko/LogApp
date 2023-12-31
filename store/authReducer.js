import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authSlice = createSlice({
  name: "authenticate",
  initialState: {
    token: "",
    isAuthenticated: false,
    user: [],
  },
  reducers: {
    authenticate: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
      state.user = action.payload;
      AsyncStorage.setItem("token", state.token);
    },
    logout: (state, action) => {
      state.token = "";
      state.isAuthenticated = false;
      AsyncStorage.removeItem("token");
    },
  },
});

export const { authenticate, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
