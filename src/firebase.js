import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'fb-lamadev-tutorial.firebaseapp.com',
  projectId: 'fb-lamadev-tutorial',
  storageBucket: 'fb-lamadev-tutorial.appspot.com',
  messagingSenderId: '380776496811',
  appId: '1:380776496811:web:cff3bcfaca710ab04381ee',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
