import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6jYUFwi2DQ1HS2Y9-0qJpaWEbFac0cCs",
  authDomain: "programmingu-tsumiage-app.firebaseapp.com",
  projectId: "programmingu-tsumiage-app",
  storageBucket: "programmingu-tsumiage-app.appspot.com",
  messagingSenderId: "106558832715",
  appId: "1:106558832715:web:6bac35f7d786292bde8dce",
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export { db };