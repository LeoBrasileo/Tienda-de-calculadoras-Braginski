import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyC1n67dVP7gdYDTuHTPJlf9zJcxAtlG1q0",
  authDomain: "calculator-store.firebaseapp.com",
  projectId: "calculator-store",
  storageBucket: "calculator-store.appspot.com",
  messagingSenderId: "689966960609",
  appId: "1:689966960609:web:9eb143ee0321a5aff78ca0",
  measurementId: "G-CWB8WLRMKV"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}