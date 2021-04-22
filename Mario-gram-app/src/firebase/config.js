 import firebase from "firebase"
 import 'firebase/storage'
 import 'firebase/firestore'
 
 var firebaseConfig = {
    apiKey: "AIzaSyBCgAu_MNmCU4KgBhgaf8urGWhdYuog0dA",
    authDomain: "mario-gram-app.firebaseapp.com",
    projectId: "mario-gram-app",
    storageBucket: "mario-gram-app.appspot.com",
    messagingSenderId: "449216581455",
    appId: "1:449216581455:web:60089eb15160c926ac7f3a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp= firebase.firestore.FieldValue.serverTimestamp
  export {projectFirestore,projectStorage,timestamp}