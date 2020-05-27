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
  const valorContrasena = document.getElementById("imputContrasena");
  const inicarBtn = document.getElementById("iniciarBtn");
  const database = firebase.database();
  const storage = window.localStorage;

  inicarBtn.addEventListener("click", function(event){
    event.preventDefault();
    database.ref().child("usuario").on("child_added", function(snapshot){

      var objeto = snapshot.val();
      let nombre = usuario.value;
      let contrasena = valorContrasena.value;
      

      if (objeto.usuario==nombre && objeto.contraseña==contrasena){
        console.log("funciona");
        storage.setItem("nombreUsuario", objeto.nombre);
        window.location.href = "/iniciada.html";
    }
    if(objeto.usuario!=nombre || objeto.contraseña !=contrasena){
      alert("usuario o contraseña incorrectos");
    }
      
    });
  });