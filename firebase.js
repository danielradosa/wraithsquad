import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB8xqlNTWcU6feo50WVT93v6NKNzfRABuA",
    authDomain: "wraithsquad-test.firebaseapp.com",
    databaseURL: "https://wraithsquad-test.firebaseio.com",
    projectId: "wraithsquad-test",
    storageBucket: "wraithsquad-test.appspot.com",
    messagingSenderId: "154708062144",
    appId: "1:154708062144:web:ac5e8f9f776ffdd8e72225"
  };
  
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  export const dbMenuAdd = db.collection('avaibleProducts');