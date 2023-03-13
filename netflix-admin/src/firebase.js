import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBWLd4UqWZcx6hiWHYHdTMVOMsOIiUuq5Y",
  authDomain: "mern-stack-netflix-clone.firebaseapp.com",
  projectId: "mern-stack-netflix-clone",
  storageBucket: "mern-stack-netflix-clone.appspot.com",
  messagingSenderId: "661522842700",
  appId: "1:661522842700:web:569120e95adae0ad45e0e9",
  measurementId: "G-B9RYKPXSMV"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export default storage;