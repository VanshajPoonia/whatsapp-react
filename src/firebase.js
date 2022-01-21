// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDi0vGhtjxvZS5FjAGACJrrbq71t2hUM-U",
  authDomain: "whatsapp-fdb50.firebaseapp.com",
  databaseURL: "https://whatsapp-fdb50.asia-southeast2.firebasedatabase.app",
  projectId: "whatsapp-fdb50",
  storageBucket: "whatsapp-fdb50.appspot.com",
  messagingSenderId: "818607143640",
  appId: "1:818607143640:web:c434deb9df7fc31fecf5ad",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAPBj9J_Ze_sC6g6oKDFsjgaz0_cf6OnHI",
//   authDomain: "whatsapp-clone-e9425.firebaseapp.com",
//   databaseURL:
//     "https://whatsapp-clone-e9425-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "whatsapp-clone-e9425",
//   storageBucket: "whatsapp-clone-e9425.appspot.com",
//   messagingSenderId: "156522599350",
//   appId: "1:156522599350:web:4dc0ab1c808868bd72e717",
//   measurementId: "G-7LL937YHZT",
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentication = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { database, authentication, provider };
