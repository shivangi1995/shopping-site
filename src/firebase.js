import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQCAhEQWxDLyyuwb_bG2wpZIGP78VhFL0",
    authDomain: "shopping-site-2ecf2.firebaseapp.com",
    databaseURL: "https://shopping-site-2ecf2.firebaseio.com",
    projectId: "shopping-site-2ecf2",
    storageBucket: "shopping-site-2ecf2.appspot.com",
    messagingSenderId: "733193703609",
    appId: "1:733193703609:web:288eb2763fd2a052c9cb68",
    measurementId: "G-WF3J0MDV0Q"
}
);

const auth = firebase.auth();

export { auth };