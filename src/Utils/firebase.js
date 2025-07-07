// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDtT8pDQVbav_Pv39rZ1uSe5tI2iuOE6D8',
  authDomain: 'netflixgpt-13469.firebaseapp.com',
  projectId: 'netflixgpt-13469',
  storageBucket: 'netflixgpt-13469.firebasestorage.app',
  messagingSenderId: '114531729705',
  appId: '1:114531729705:web:b5e4c6343587364ff3b738',
  measurementId: 'G-RWD3RFZ9X5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
