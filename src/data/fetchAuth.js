import axios from "axios";

const AUTH_SIGN_UP =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?";

const SIGN_IN =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?";
const API_KEY = "AIzaSyCrxADWaKCwvg0EQ44Byvj0DCrSKPFWAlk";

export const createUser = async (email, password) => {
  const res = await axios.post(`${AUTH_SIGN_UP}key=${API_KEY}`, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = res.data.idToken;
  return token;
};

export const signInUser = async (email, password) => {
  const res = await axios.post(`${SIGN_IN}key=${API_KEY}`, {
    email: email,
    password,
    password,
    returnSecureToken: true,
  });
  const token = res.data.idToken;
  return token;
};
