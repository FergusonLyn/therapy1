import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.Api_Key,
    authDomain: process.env.Auth_Domain,
    projectId: process.env.Project_Id,
    storageBucket:process.env.Storage_Bucket,
    messagingSenderId: process.env.Messaging_SenderId,
    appId: process.env.App_Id,
    measurementId: process.env.Measurement_Id
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app)
  const auth = getAuth(app)

  export {auth,db,analytics}