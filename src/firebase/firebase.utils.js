import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyABNmqMmsPVfQXJE17m0Xl7q2mhrM3D2vM",
    authDomain: "ecommercedb-4c319.firebaseapp.com",
    databaseURL: "https://ecommercedb-4c319.firebaseio.com",
    projectId: "ecommercedb-4c319",
    storageBucket: "ecommercedb-4c319.appspot.com",
    messagingSenderId: "212489193855",
    appId: "1:212489193855:web:0cca7c88db186946fb724a"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${ userAuth.uid }`);
    const snapShot = await userRef.get;

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
