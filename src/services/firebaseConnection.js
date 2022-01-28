import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyBnF4g7T755vQiGAmphk-Eike_5L_B_R5M",
    authDomain: "sistema-ecb8b.firebaseapp.com",
    projectId: "sistema-ecb8b",
    storageBucket: "sistema-ecb8b.appspot.com",
    messagingSenderId: "847551878457",
    appId: "1:847551878457:web:00e4f16427a1ee427d84e8",
    measurementId: "G-ELHW21TYHW"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
  
export default firebase;