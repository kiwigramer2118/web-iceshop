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

const nombrePro = document.getElementById("nombrePro");
const precioPro = document.getElementById("precioPro");
const publicar = document.getElementById("publicar");

const database = firebase.database();
const storage = window.localStorage;
const storage2 = window.localStorage;

const nombreEm = storage.getItem("nombreEmpresa");


publicar.addEventListener("click", registrarProducto);
function registrarProducto() {

    let nombre = nombrePro.value;
    let precio = precioPro.value;
    let url = "";

    let producto = new Producto(nombre, precio, url);

    database.ref().child("empresas").child(nombreEm).child("productos").child(nombre).setValue(producto);

    storage.setItem("nombreEmpresa", nombreEm);
    storage2.setItem("nombreProducto", nombrePro);
    
}










