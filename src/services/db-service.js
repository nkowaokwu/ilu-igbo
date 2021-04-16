import firebase from "firebase/app";
import "firebase/database";
import { normalizedContains } from "./helpers";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

const db = firebase.database();
const proverbs = [];

export function fetchProverbs(done) {
  db.ref("proverbs")
    .once("value")
    .then((data) => {
      console.log("got value:", data);
      console.log("data value:", data.val());
      // const proverb = data.val();
      // proverb.id = data.key;
      // proverbs.push(proverb);
      // console.log("about to call done. on child_added");
      // done();
    });
}

export function createNewProverb(payload) {
  // Get a key for a new Post.
  var newPostKey = db.ref().child("proverbs").push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates["/proverbs/" + newPostKey] = payload;
  payload.tags.forEach((tag) => {
    updates["/tags/" + tag + "/proverbs/" + newPostKey] = true;
  });

  return firebase.database().ref().update(updates);
}

export function updateProverb(payload) {}

export function queryProverbs(query, proverbs) {
  if (!query) return proverbs;

  const keyWords = query.split(/\s/).filter((w) => w !== "");

  return proverbs.filter((prov) => {
    const isMatch = keyWords.some((word) => {
      return (
        normalizedContains(prov.text, word) ||
        (prov.literalTranslation &&
          normalizedContains(prov.literalTranslation, word)) ||
        (prov.meaning && normalizedContains(prov.meaning, word))
      );
    });
    return isMatch;
  });
}
