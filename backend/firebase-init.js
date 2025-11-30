// =======================
// firebase-init.js (FINAL CLEAN VERSION)
// =======================

console.log("🔥 firebase-init.js LOADED");

// -----------------------------
// Firebase SDK Imports
// -----------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";


// -----------------------------
// FIREBASE CONFIG
// -----------------------------
const firebaseConfig = {
  apiKey: "AIzaSyDWCG-VBZEkRj7G9zMO8lHXucEYicBD1d8",
  authDomain: "money-management-700df.firebaseapp.com",
  projectId: "money-management-700df",
  storageBucket: "money-management-700df.firebasestorage.app",
  messagingSenderId: "672203393892",
  appId: "1:672203393892:web:bdd948e2f96c00b5420871",
  measurementId: "G-SFNGL2PG5L"
};

// -----------------------------
// INITIALIZE APP
// -----------------------------
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Globals
window._auth = auth;
window._db = db;
window._uid = null;
window.userData = {};


// -----------------------------
// AUTH FUNCTIONS (used in login.js)
// -----------------------------
window.googleLogin = async function () {
  console.log("⚡ Google login clicked");
  
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

window.emailLogin = async function (email, pass) {
  return signInWithEmailAndPassword(auth, email, pass);
};

window.emailSignup = async function (email, pass) {
  return createUserWithEmailAndPassword(auth, email, pass);
};


// -----------------------------
// LOAD / CREATE FIRESTORE USER DOC
// -----------------------------
async function loadUserDoc(uid) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    const newUser = {
      name: "",
      email: "",
      avatar: "",
      transactions: [],
      fixedExpenses: [],
      goals: [],
      loans: [],
      chatGroups: {},
      groupMembers: {},
      monthlyLimit: 0,
      createdAt: Date.now()
    };

    await setDoc(ref, newUser);
    return newUser;
  }

  return snap.data();
}


// -----------------------------
// SAVE USER DATA (from dashboard)
// -----------------------------
window.syncUserData = async function () {
  if (!window._uid) return;

  const ref = doc(db, "users", window._uid);
  await setDoc(ref, window.userData, { merge: true });

  console.log("💾 Firestore Saved Successfully");
};


// -----------------------------
// AUTH STATE LISTENER
// -----------------------------
onAuthStateChanged(auth, async (user) => {
  const path = window.location.pathname;

  if (!user) {
    if (!path.includes("login-page")) {
      window.location.href = "../login-page/login.html";
    }
    return;
  }

  window._uid = user.uid;

  // load Firestore doc
  window.userData = await loadUserDoc(user.uid);

  // notify dashboard.js
  window.dispatchEvent(new Event("firestore-ready"));

  // redirect if logging in
  if (path.includes("login-page")) {
    window.location.href = "../Dashboard/dashboard.html";
  }
});


// -----------------------------
// LOGOUT
// -----------------------------
window.logout = async function () {
  await signOut(auth);
  window._uid = null;
  window.userData = {};
  window.location.href = "../login-page/login.html";
};
console.log("✅ firebase-init.js READY");