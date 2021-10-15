import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTW2eoJU7amwpp0qB_h349ss1dBB7cWa4",
  authDomain: "react-deploy-8f887.firebaseapp.com",
  projectId: "react-deploy-8f887",
  storageBucket: "react-deploy-8f887.appspot.com",
  messagingSenderId: "631262933837",
  appId: "1:631262933837:web:972f8e6a542816fc813d04",
  measurementId: "G-QLF927N4VX"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()
const auth = app.auth()

export {auth, firebaseConfig,db}

// const analytics = getAnalytics(app);
// export default firebaseConfig;