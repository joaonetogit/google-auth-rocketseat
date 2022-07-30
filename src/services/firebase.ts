import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBoPrNlfCptI4PGYCAjuPdz48XKp9yxXYY',
  authDomain: 'auth-rocketseat.firebaseapp.com',
  projectId: 'auth-rocketseat',
  storageBucket: 'auth-rocketseat.appspot.com',
  messagingSenderId: '300610497230',
  appId: '1:300610497230:web:20a67d3b8337d0f2343e9f',
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
