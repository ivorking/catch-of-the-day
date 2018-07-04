import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyA2y3VJumuUi8lDP1lVdNwW7-nPPEqF4WI",
   authDomain: "catch-of-the-day-ivor-52637.firebaseapp.com",
   databaseURL: "https://catch-of-the-day-ivor-52637.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// this is a default export
export default base;