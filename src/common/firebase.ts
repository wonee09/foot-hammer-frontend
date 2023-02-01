import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// 아래 데이터는 여러분의 정보를 넣으세요!
const firebaseConfig = {
  apiKey: 'AIzaSyDAndxWBkHl1r6-Qy1vJA5K_wx2ASGN1D4',
  authDomain: 'jackpot-43533.firebaseapp.com',
  projectId: 'jackpot-43533',
  storageBucket: 'jackpot-43533.appspot.com',
  messagingSenderId: '32280755254',
  appId: '1:32280755254:web:5b40947d4e998ece8fec97',
  measurementId: 'G-SJLPN61GCQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
