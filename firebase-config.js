import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAqQ59WQN0Srzk0EAUrdp0qeKiNfHHNCKs",
  authDomain: "appmoviltickets.firebaseapp.com",
  databaseURL: "https://appmoviltickets-default-rtdb.firebaseio.com",
  projectId: "appmoviltickets",
  storageBucket: "appmoviltickets.appspot.com",
  messagingSenderId: "549655236347",
  appId: "1:549655236347:web:098a5e5ff59ca51d806a5e",
  measurementId: "G-P7879R6RJD"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = firebase.getAnalytics(app);
const database = firebase.getDatabase(app);

// Exportar las variables
export { database };
