// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2-dHVhMsIJR2lQTDsU4WQX6G4OCmf3Io",
    authDomain: "covid-vaccination-1becf.firebaseapp.com",
    databaseURL: "https://covid-vaccination-1becf-default-rtdb.firebaseio.com",
    projectId: "covid-vaccination-1becf",
    storageBucket: "covid-vaccination-1becf.appspot.com",
    messagingSenderId: "1002900737291",
    appId: "1:1002900737291:web:44d4e91efc16b5307d260e",
    measurementId: "G-DDF055E3MZ"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

export const auth = firebase.auth()
export const db = firebase.firestore()
    
export default firebase;