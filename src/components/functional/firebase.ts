//import { collection, getDocs } from "firebase/firestore";
//import { Product } from "../model/product";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_MESSAGING_APP_ID,
};

/*
export type Product = {
  category: string;
  name: string;
  price: string;
  stocked: boolean;
};
*/

/*
export const getProducts = async () => {
  db.collection("product")
    .get()
    .then((result) => {
      const data = result.docs.map((d) => ({
        category: d.data().category,
        name: d.data().name,
        price: d.data().price,
        stocke: d.data().name,
      }));
    });
  return data;
};
*/

/*
export const getProducts = () => {
  const db = firebase.firestore();
  const ref = db.collection("product").orderBy("updateAt", "desc");
  return ref;
};
*/

/*
export const getProducts = () => {
  const db = firebase.firestore();
  db.collection("product")
    .get()
    .then((result) => {
      const data = result.docs.map((d) => ({
        // 本当にnameがある？
        name: d.data().name,
        // 本当にageがある？
        age: d.data().age,
      }));
      setState(data);
    });
};
*/
