import firebase from "firebase/app";
import "firebase/database";
import { normalizedContains } from "./helpers";

let db;
let allProverbs;

export function initializeFirebase() {
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
  db = firebase.database();
}

export function fetchProverbs(done) {
  db.ref("proverbs").on("value", (data) => {
    console.log("got value:", data);
    console.log("data value:", data.val());
    allProverbs = Object.entries(data.val()).map(([k, v]) => ({ id: k, ...v }));
    console.log("allProverbs:", allProverbs);
    done();
  });
}

export function createProverb(payload) {
  // Get a key for a new Post.
  var newPostKey = db.ref().child("proverbs").push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates["/proverbs/" + newPostKey] = payload;
  if (payload.tags && Array.isArray(payload.tags)) {
    payload.tags.forEach((tag) => {
      updates["/tags/" + tag + "/proverbs/" + newPostKey] = true;
    });
  }

  return firebase.database().ref().update(updates);
}

export function updateProverb(payload) {}

export function queryProverbs(query) {
  if (!query) return allProverbs;

  const keyWords = query.split(/\s/).filter((w) => w !== "");

  return allProverbs.filter((prov) => {
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

export function batchUpload(provArray) {
  Promise.all(provArray.map((p) => createProverb(p)))
    .then(console.log)
    .catch(console.error);
}
