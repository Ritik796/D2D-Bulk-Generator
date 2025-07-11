import { ref, get, update, set, remove, onValue, child } from 'firebase/database';
import { deleteObject, getDownloadURL, ref as ref_storage, uploadBytes, uploadBytesResumable, } from "firebase/storage";
import { database } from '../Firebase.jsx';
import { storage } from '../Firebase.jsx';
import { getCityWiseDatabase } from './firebaseService.js';


export const uploadFileToStorage = async (imageUri, filepath) => {
  return new Promise(async (resolve) => {
    try {
      //HERE WE ARE SPLITING THE FILE EXTENSION FROM USING FILE NAME TP CREATE FILE PATH
      let path = filepath;
      //ref_storage METHOD WE ARE USING HERE TO CREATE STROAGE REFERENCE TP UPLOAD FILE
      let storageref = ref_storage(storage, path);
      //uploadBytes WE ARE USING HERE TO UPLOAD FILE TO THE STORAGE REFERENCE
      const uploadTask = uploadBytesResumable(storageref, imageUri);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error("Upload failed:", error);
          return resolve("failed");
        },
        async () => {
          try {
            // ✅ Correct way to get download URL
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("File available at:", downloadUrl);
            return resolve({ status: "success", url: downloadUrl });
          } catch (error) {
            console.error("Error getting download URL:", error);
            return resolve("failed");
          }
        }
      );

      // const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
      // console.log("File available at:", downloadUrl);

      //IN CASE NO ERROR OCCURS DURING FILE UPLOAD,WE WE WILL RESOLVE A FILE CUSTOM FILE NAME WITH FILE EXTENSION
      // resolve(`success`);
    } catch (error) {
      //IF ANY ERROR OCCURS THEN WE WILL RESOLVE EMPTY STRING
      console.warn(error);
      resolve('failed');
    }
  });
};

export const getData = (path) => {

  return new Promise((resolve) => {
    getCityWiseDatabase().then(resp=>{
      get(ref(resp.db, path)).then((snapshot) => {
        let data = snapshot.val();
        resolve(data);
      });
    });
    
  });
}

export const saveData = (path, data) => {
  return new Promise((resolve) => {
    getCityWiseDatabase().then(resp=>{
    update(ref(resp.db, path), data);
    resolve("success");
    });
  });
}

export const setData = (path, value) => {
  return new Promise((resolve) => {
    getCityWiseDatabase().then(resp=>{
    set(ref(resp.db, path), value);
    resolve("success");
    })
  });
}

export const RemoveData = (path) => {
  return new Promise((resolve) => {
    getCityWiseDatabase().then(resp=>{
    remove(ref(resp.db, path));
    resolve("success");
    });
  });
}

export const fetchRealTimeData = (path, setState, userStatus) => {
  if (path) {
    const unsubscribe = onValue(
      ref(database, path),
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setState(data);
        } else {
          setState(null);
        }
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
    return unsubscribe;
  } else {
    return "fail";
  }
};