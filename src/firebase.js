

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); */
import * as firebase from 'firebase';
import 'firebase/firestore';
const firebaseApp=firebase.initializeApp({
   //add ur firebase project config details
});

const db=firebaseApp.firestore();
export default db;
