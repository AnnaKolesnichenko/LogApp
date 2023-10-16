// // Для роботи із firebase обовʼязково треба ініціалізувати проект
// import { initializeApp } from "firebase/app";
// // Функція для підключення авторизації в проект
// import { getAuth } from "firebase/auth";
// // Функція для підключення бази даних у проект
// import { getFirestore } from "firebase/firestore";
// // Функція для підключення сховища файлів в проект
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "api-key",
//   authDomain: "project-id.firebaseapp.com",
//   databaseURL: "https://project-id.firebaseio.com",
//   projectId: "project-id",
//   storageBucket: "project-id.appspot.com",
//   messagingSenderId: "sender-id",
//   appId: "app-id",
//   measurementId: "G-measurement-id",
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf7TigVBJOjAQOcvXrJPCl7LuYx_0f2aE",
  authDomain: "appposts-a5dbd.firebaseapp.com",
  databaseURL:
    "https://appposts-a5dbd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "appposts-a5dbd",
  storageBucket: "appposts-a5dbd.appspot.com",
  messagingSenderId: "837024893458",
  appId: "1:837024893458:web:69df62e9b95028e05ae6cb",
};

const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push("cjs");

module.exports = defaultConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
