import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqc6Sbr4DB_VR0IQIDnnuUZTFMyJiQYdw",
  authDomain: "voterapp-bde2d.firebaseapp.com",
  projectId: "voterapp-bde2d",
  storageBucket: "voterapp-bde2d.appspot.com",
  messagingSenderId: "299314868582",
  appId: "1:299314868582:web:4d3e49fb0723047fcad8a7",
  measurementId: "G-XSNYWHG7GH"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();