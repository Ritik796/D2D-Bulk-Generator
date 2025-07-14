import { getDatabase } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// const city = localStorage.getItem("city") || "";
// console.log("city=> " + city);
// let firebaseConfig1 = {
//   apiKey: "AIzaSyBGZ_IB4y5Ov1nuqIhWndGU8hfJadlE85I",
//   authDomain: "dtdnavigator.firebaseapp.com",
//   databaseURL: "https://dtdnavigatortesting.firebaseio.com/",
//   projectId: "dtdnavigator",
//   storageBucket: "dtdnavigator.appspot.com",
//   messagingSenderId: "381118272786",
//   appId: "1:381118272786:web:7721ceb096f806bcec0fcb",
//   measurementId: "G-XJW1MRQ481"
// };
let firebaseConfig = {
  apiKey: "AIzaSyBGZ_IB4y5Ov1nuqIhWndGU8hfJadlE85I",
  authDomain: "dtdnavigator.firebaseapp.com",
  databaseURL: "https://dtdnavigator.firebaseio.com",
  projectId: "dtdnavigator",
  storageBucket: "dtdnavigator.appspot.com",
  messagingSenderId: "381118272786",
  appId: "1:381118272786:web:7721ceb096f806bcec0fcb",
  measurementId: "G-XJW1MRQ481"
};
/*
if (city === 'SIK') {
  firebaseConfig = {
    apiKey: "AIzaSyA1ZU5hI7Fho0B4ZJO2w8-fsCKMbq95m4c",
    authDomain: "dtdnavigator.firebaseapp.com",
    databaseURL: "https://dtdnavigator.firebaseio.com",
    projectId: "dtdnavigator",
    storageBucket: "dtdnavigator.appspot.com",
    messagingSenderId: "381118272786"
  };
}
else if (city === 'TES') {

  firebaseConfig = {
    apiKey: "AIzaSyBGZ_IB4y5Ov1nuqIhWndGU8hfJadlE85I",
    authDomain: "dtdnavigator.firebaseapp.com",
    databaseURL: "https://dtdnavigatortesting.firebaseio.com",
    projectId: "dtdnavigator",
    storageBucket: "dtdnavigator.appspot.com",
    messagingSenderId: "381118272786"
  };
  
}
*/

const app = initializeApp(firebaseConfig);
export const getCurrentDatabase = (url) => {
  return getDatabase(app, url);
};
export const storage = getStorage(app);


