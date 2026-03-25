// firebase.js
// Firebase configuration and initialization

const firebaseConfig = {
  apiKey: "AIzaSyAvA5oPRRWiikK02f7F4TLKdjbyhjwB_qo",
  authDomain: "real-estate-management-de7d5.firebaseapp.com",
  databaseURL: "https://real-estate-management-de7d5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "real-estate-management-de7d5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Realtime Database reference
const database = firebase.database();

// Optional: shorthand for properties collection/table
const propertiesRef = database.ref("properties");

console.log("Firebase initialized successfully");