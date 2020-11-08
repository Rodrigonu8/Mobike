window.onload = inicializar;
var formAutenticacion;

function inicializar(){
    formAutenticacion = document.getElementById("formAutenticacion");
    formAutenticacion.addEventListener("submit", autentificar, false);
}

function autentificar(event){
    event.preventDefault();

    var usuario = event.target.email.value;
    var contraseña = event.target.contraseña.value;

    firebase.auth().signInWithEmailAndPassword(usuario, contraseña)
        .then(function(result){
            alert("Autenticación correcta");

            if (event.target.email.value=="Admin"){
                location.href = "../Templates/admin.html";
            }else{
                location.href = "../Template/index.html";
            } 
        })
        .catch(function(error){
        alert("Autenticación incorrecta. Verifique sus credenciales e intente nuevamente");
        });
}



