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
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZw2wAgY3fzYkqp6o16BZwvA2zp2ZtHu0",
  authDomain: "postsapplication.firebaseapp.com",
  databaseURL: "https://postsapplication-default-rtdb.firebaseio.com",
  projectId: "postsapplication",
  storageBucket: "postsapplication.appspot.com",
  messagingSenderId: "657504983024",
  appId: "1:657504983024:web:e327d474c49c4ebc3aaf35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
