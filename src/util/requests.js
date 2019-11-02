import { useState, useEffect } from "react";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to us
import "firebase/database";

export const useClassList = () => {
  const [classList, setClassList] = useState([]);
  const isFetched = !!classList.length;
  useEffect(() => {
    firebase
      .database()
      .ref("/classes")
      .once("value")
      .then(snapshot => {
        setClassList(snapshot.val());
      });
  }, []);

  return [classList, isFetched, setClassList];
};
