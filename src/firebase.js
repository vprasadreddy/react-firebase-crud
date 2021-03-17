import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDaz9FKKsldq7kcdoM5KRWzNMsAt5iXH9o",
  authDomain: "react-crud-4ffce.firebaseapp.com",
  databaseURL: "https://react-crud-4ffce-default-rtdb.firebaseio.com",
  projectId: "react-crud-4ffce",
  storageBucket: "react-crud-4ffce.appspot.com",
  messagingSenderId: "304355629199",
  appId: "1:304355629199:web:7384fa8e7861a94f0bf8fa"
};
// Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);
export default firebaseDB.database().ref();
