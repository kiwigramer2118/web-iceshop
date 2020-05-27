var firebaseConfig = {
    apiKey: "AIzaSyBB4S8CUmloz8kKrkVuWRrE52dwv-Mt-4U",
    authDomain: "ice-shop-ed5dd.firebaseapp.com",
    databaseURL: "https://ice-shop-ed5dd.firebaseio.com",
    projectId: "ice-shop-ed5dd",
    storageBucket: "ice-shop-ed5dd.appspot.com",
    messagingSenderId: "36284404690",
    appId: "1:36284404690:web:b90b1896f4289c83f36e0b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const añadirProducto = document.getElementById("añadirProducto");

const database = firebase.database();
const storage = window.localStorage;

const nombreEm = storage.getItem("nombreEmpresa");

añadirProducto.addEventListener("click", mandarDato);

function mandarDato(){
    storage.setItem("nombreEmpresa", nombreEm);
}


