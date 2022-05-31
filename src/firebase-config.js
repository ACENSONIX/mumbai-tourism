import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getAuth} from 'firebase/auth' ;
const firebaseConfig = {
    apiKey: "AIzaSyAdN1ywrrNhbP-JsPyxutR9TUXZOcjLry4",
    authDomain: "mumbai-tourism.firebaseapp.com",
    projectId: "mumbai-tourism",
    storageBucket: "mumbai-tourism.appspot.com",
    messagingSenderId: "231410739230",
    appId: "1:231410739230:web:97b14aeb3493c3b345a60f",
    measurementId: "G-71Z6Q3C8E4"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);