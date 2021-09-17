import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDUvSrUlbphLKEc22f91kwD6J84bkQp6LE",
    authDomain: "crown-db-2ab48.firebaseapp.com",
    projectId: "crown-db-2ab48",
    storageBucket: "crown-db-2ab48.appspot.com",
    messagingSenderId: "759121949289",
    appId: "1:759121949289:web:3b3d24e9eb782642ffa8f8",
    measurementId: "G-JLSR3WNY0K"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get(); 
    if(!snapShot.exist) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message);
      }
    }  
    return userRef;
  }

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  })
  return await batch.commit();
}

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;