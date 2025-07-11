import { getDatabase } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// const city = localStorage.getItem("city") || "";
// console.log("city=> " + city);
let firebaseConfig = {
  apiKey: "AIzaSyBGZ_IB4y5Ov1nuqIhWndGU8hfJadlE85I",
  authDomain: "dtdnavigator.firebaseapp.com",
  databaseURL: "https://dtdnavigatortesting.firebaseio.com/",
  projectId: "dtdnavigator",
  storageBucket: "dtdnavigator.appspot.com",
  messagingSenderId: "381118272786",
  appId: "1:381118272786:web:7721ceb096f806bcec0fcb",
  measurementId: "G-XJW1MRQ481"
};
let firebaseConfig1 = {
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
export const database = getDatabase(app);
export const storage = getStorage(app);
export const dbSikar = getDatabase(app,"https://dtdnavigator.firebaseio.com");
export const dbAjmer = getDatabase(app,"https://dtdajmer.firebaseio.com");
export const dbBehror = getDatabase(app,"https://dtdbehror.firebaseio.com");
export const dbBharatpur = getDatabase(app,"https://dtdbharatpur.firebaseio.com");
export const dbBhiwadi = getDatabase(app,"https://dtdbhiwadi.firebaseio.com");
export const dbChhapar = getDatabase(app,"https://dtdchhapar.firebaseio.com");
export const dbChuru = getDatabase(app,"https://dtdchuru.firebaseio.com");
export const dbDehradun = getDatabase(app,"https://dtddehradun.firebaseio.com");
export const dbEtmadpur = getDatabase(app,"https://dtdetmadpur.firebaseio.com");
export const dbTonk = getDatabase(app,"https://dtdtonk.firebaseio.com/");

