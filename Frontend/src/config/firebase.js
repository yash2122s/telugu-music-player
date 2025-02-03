import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDDBuqtEfmDsDsi-Gppn95fpadOdmaDiUs",
  authDomain: "yash-music-5c797.firebaseapp.com",
  projectId: "yash-music-5c797",
  storageBucket: "yash-music-5c797.firebasestorage.app",
  messagingSenderId: "1050791304497",
  appId: "1:1050791304497:web:dbb0c72c79fa6b61afa410"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 