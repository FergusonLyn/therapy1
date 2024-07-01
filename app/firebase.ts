import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCxzkx2PRR2e6OKAZqbHSrWCT8iU0Sa4zA",
    authDomain: "ai-counselling-dc16a.firebaseapp.com",
    projectId: "ai-counselling-dc16a",
    storageBucket: "ai-counselling-dc16a.appspot.com",
    messagingSenderId: "244146500292",
    appId: "1:244146500292:web:6dcf180568371c309bcf91",
    measurementId: "G-1K0RFQ7ZDH"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app)
  const auth = getAuth(app)

  export {auth,db,analytics}