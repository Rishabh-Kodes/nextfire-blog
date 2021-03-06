import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDj83mk8yKEWMzGNbl_lQrstMYU-p7xtOs",
  authDomain: "nextjsfire-blog.firebaseapp.com",
  projectId: "nextjsfire-blog",
  storageBucket: "nextjsfire-blog.appspot.com",
  messagingSenderId: "971787989426",
  appId: "971787989426:web:fcf70a508ba0944660f4ab",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

// Helper funtions

// Gets a users/{uid} document with username
// @param {string} username

export async function getUserWithUsername(username) {
  const userRef = firestore.collection("users");
  const query = userRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];

  return userDoc;
}

// Converts a firestore document to JSON
// @param {DocumentSnapshot} doc

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}
