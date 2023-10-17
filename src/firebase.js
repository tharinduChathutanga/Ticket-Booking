
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs99x1uKcJPfkgiZc_aU9dqq1FSqFkB6g",
  authDomain: "hospitalbooking-b82dd.firebaseapp.com",
  projectId: "hospitalbooking-b82dd",
  storageBucket: "hospitalbooking-b82dd.appspot.com",
  messagingSenderId: "997431514867",
  appId: "1:997431514867:web:ce086e94d4738f0a514986",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);