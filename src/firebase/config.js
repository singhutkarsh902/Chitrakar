import * as firebase from 'firebase/app';
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDCaFXoA0BXCzCyaf25kriBfl0LFIfAf9Q",
    authDomain: "chitrakar-45004.firebaseapp.com",
    databaseURL: "https://chitrakar-45004.firebaseio.com",
    projectId: "chitrakar-45004",
    storageBucket: "chitrakar-45004.appspot.com",
    messagingSenderId: "65615016654",
    appId: "1:65615016654:web:3ab936272f7a22c5b9969f"
}

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };