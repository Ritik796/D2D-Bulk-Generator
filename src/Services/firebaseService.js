import * as dbConnect from "../Firebase.jsx";

export const getCityWiseDatabase = () => {
  return new Promise((resolve) => {
    let city = localStorage.getItem("city");
    // console.log(city);
    let db = dbConnect.database;
    if (city === "Sikar") {
      db = dbConnect.dbSikar;
    } else if (city === "Test") {
      db = dbConnect.database;
    } else if (city === "Behror") {
      db = dbConnect.dbBehror;
    }else if (city === "Tonk") {
      db = dbConnect.dbBehror;
    }

    resolve({ db: db });
  });
};
