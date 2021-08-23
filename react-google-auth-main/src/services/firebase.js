import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC140HBza9H6vFvVMVE0VIYel6zxd_1mEU",
    authDomain: "qr-ffe73.firebaseapp.com",
    projectId: "qr-ffe73",
    storageBucket: "qr-ffe73.appspot.com",
    messagingSenderId: "863882760532",
    appId: "1:863882760532:web:176e7afab71e8e53db38c1",
    measurementId: "G-EBW91CK2Q2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;