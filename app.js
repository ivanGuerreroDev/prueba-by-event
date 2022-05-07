import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js"
import { obtencionDeDatos } from "./modulos/obtencionDeDatos.js";
//Docuemntacion de proyecto
const firebaseConfig = {
    apiKey: "AIzaSyBloNFnJLYK42AYaadMMvDeH18Wp14TN8k",
    authDomain: "pruebaby-d9a70.firebaseapp.com",
    projectId: "pruebaby-d9a70",
    storageBucket: "pruebaby-d9a70.appspot.com",
    messagingSenderId: "357378461179",
    appId: "1:357378461179:web:5a1d3d2bcbc2908ab30f5e",
    measurementId: "G-RCXJ6R0D46"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// modulos
obtencionDeDatos()