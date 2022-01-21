import firebase from "firebase";



var firebaseConfig = {
    apiKey: "AIzaSyBzWtLfmMB79X1Ghn0J3VUw55WeqXp-I10",
    authDomain: "friendshub-3ddfc.firebaseapp.com",
    projectId: "friendshub-3ddfc",
    storageBucket: "friendshub-3ddfc.appspot.com",
    messagingSenderId: "857999910339",
    appId: "1:857999910339:web:907685b9c536a031680976",
    measurementId: "G-37V5E8J92T"
  };

// var firebaseConfig = {
//     apiKey: "AIzaSyDvN3gEv8Fte7hoAFNq98oad1h9F30FMPg",
//     authDomain: "facebook-clone-e8f34.firebaseapp.com",
//     projectId: "facebook-clone-e8f34",
//     storageBucket: "facebook-clone-e8f34.appspot.com",
//     messagingSenderId: "784890696432",
//     appId: "1:784890696432:web:5e7fc1581853f5a1486835"
// };
firebase.initializeApp(firebaseConfig);

export {firebase};