// import firebase from 'firebase/app'; // Importa el módulo principal de Firebase
import 'firebase/auth'; // Importa el módulo de autenticación de Firebase (si lo necesitas)
import 'firebase/firestore'; // Importa el módulo de Firestore de Firebase (si lo necesitas)
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Tu configuración de Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyBoNJ-pcm9Ozyeb15FuTmHlND73ya8rTUk",
  authDomain: "sprint8-7ce0f.firebaseapp.com",
  projectId: "sprint8-7ce0f",
  storageBucket: "sprint8-7ce0f.appspot.com",
  messagingSenderId: "445007539618",
  appId: "1:445007539618:web:30e36485206f666710d6fb",
  // measurementId: "G-YPLCC5GND5"
};

// Inicializa Firebase con la configuración
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)