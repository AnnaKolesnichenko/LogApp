import axios from "axios";

const URL = "https://favplaces-app-default-rtdb.firebaseio.com/";

export const sendPosts = (postData) => {
  axios.post(`${URL}/posts.json`, postData);
};

export const getPostData = async () => {
  const res = await axios.get(`${URL}/posts.json`);

  const posts = [];
  for (const item in res.data) {
    const postItem = {
      id: item,
      image: res.data[item].image,
      location: res.data[item].location,
      title: res.data[item].title,
      comments: res.data[item].comments,
      country: res.data[item].country,
      likes: res.data[item].likes,
      locationDataInfo: res.data[item].locationDataInfo,
    };
    posts.push(postItem);
  }
  return posts;
};
