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

const nombreEmpresa = document.getElementById("nombreEmpresa");
const nombreEstudiante = document.getElementById("nombreEstudiante");
const codigo = document.getElementById("codigo");
const tipoProducto = document.getElementById("tipoProducto");
const registrarBtn = document.getElementById("registrarBtn");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");

const database = firebase.database();
const storage = window.localStorage;

var imagenSeleccionada = "";

registrarBtn.addEventListener("click", registrar);
function registrar() {

    let nombreEm = nombreEmpresa.value;
    let nombreEst = nombreEstudiante.value;
    let codigoEst = codigo.value;
    let tipoPro = tipoProducto.value;


    let empresa = new Empresa(nombreEst, codigoEst, nombreEm, tipoPro, imagenSeleccionada);

    database.ref().child("empresas").child(nombreEm).set(empresa);
}
img1.addEventListener("click", cogerUrl1);
img2.addEventListener("click", cogerUrl2);
img3.addEventListener("click", cogerUrl3);
img4.addEventListener("click", cogerUrl4);
img5.addEventListener("click", cogerUrl5);
img6.addEventListener("click", cogerUrl6);
function cogerUrl1(){
    imagenSeleccionada = img1.src;
}
function cogerUrl2(){
    imagenSeleccionada = img2.src;
}
function cogerUrl3(){
    imagenSeleccionada = img3.src;
}
function cogerUrl4(){
    imagenSeleccionada = img4.src;
}
function cogerUrl5(){
    imagenSeleccionada = img5.src;
}
function cogerUrl6(){
    imagenSeleccionada = img6.src;
}

