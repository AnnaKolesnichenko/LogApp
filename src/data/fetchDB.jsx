import axios from "axios";

const URL = "https://favplaces-app-default-rtdb.firebaseio.com/";

export const sendPosts = (postData) => {
  axios.post(`${URL}/posts.json`, postData);
};
