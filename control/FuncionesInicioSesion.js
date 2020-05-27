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

  const usuario = document.getElementById("imputUsuario");
  const contrasena = document.getElementById("imputContrasena");
  const inicarBtn = document.getElementById("iniciarBtn");


inicarBtn.addEventListener("click",iniciar());
function inciar(){
let usuario = usuario.value;
let contrasena = contrasena.value;


if(usuario == null){
  console.log("el usuario no existe");
}
database.ref().child("usuario").on("value",function (snapshot){

if(){

}

});

 /* FirebaseDatabase.getInstance().getReference()
  .child("usuario").child(usuario)
  .addListenerForSingleValueEvent(new ValueEventListener() {*/
}


 
  