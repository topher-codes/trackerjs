// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDsPPEBHu6G-xQeM-nP5jZyPNwANn96s34',
	authDomain: 'fir-project-48d1a.firebaseapp.com',
	projectId: 'fir-project-48d1a',
	storageBucket: 'fir-project-48d1a.appspot.com',
	messagingSenderId: '812587000254',
	appId: '1:812587000254:web:51857d1e3a2828b7d659ef',
	measurementId: 'G-62MTBS55Z2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
