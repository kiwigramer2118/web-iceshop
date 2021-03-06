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
const listaProductos = document.getElementById("listaProductos");
const database = firebase.database();
const storage = window.localStorage;

const nombreEm = storage.getItem("nombreEmpresa");
const nombrePro = storage.getItem("nombreProducto");


database.ref().child("empresas").child(nombreEm).child("productos").child(nombrePro).on("chlid_added", function (snapshot){
    var estObj = snapshot.val();
    console.log(estObj.producto);

    
        var item = document.createElement("li");

        item.innerHTML = estObj.nombrePro + " " + estObj.precio;

        listaProductos.appendChild(item);
})