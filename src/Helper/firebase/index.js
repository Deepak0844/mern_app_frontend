import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkblZDizi0ryb42Z6C4qmF-I7vRc9iSYY",
  authDomain: "mern-app-48ef6.firebaseapp.com",
  projectId: "mern-app-48ef6",
  storageBucket: "mern-app-48ef6.appspot.com",
  messagingSenderId: "1005396934970",
  appId: "1:1005396934970:web:dcf4a9189430c7835d9003",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
