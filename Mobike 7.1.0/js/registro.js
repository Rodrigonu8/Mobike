window.onload = inicializar;
var formRegistro;
var refRegistro;

function inicializar() {
    formRegistro = document.getElementById("formRegistro");
    formRegistro.addEventListener("submit", enviarRegistro, false);
    //llamamos al nodo raíz de la base de datos
    refRegistro = firebase.database().ref().child("Cliente");
    refCuenta = firebase.database().ref().child("Cuenta");
}

function enviarRegistro(event) {
    event.preventDefault();

    //registrar un Cliente
    refRegistro.push({
        Comuna: event.target.comuna.value,
        Contraseña: event.target.contraseña.value,
        Email: event.target.email.value,
        Nombre: event.target.nombre.value,
        Rut: event.target.rut.value,
        Teléfono: event.target.fono.value
    });

    //registrar una Cuenta
    refCuenta.push({
        Banco: event.target.banco.value,
        FechaVencimiento: event.target.fechavencimiento.value,
        NumCuenta: event.target.numcuenta.value,
        NumTarjeta: event.target.numtarjeta.value
    });

    formRegistro.reset();
}

function registrarExitoso() {
    alert("Usuario registrado con éxito");
    location.href = "../pages/index.html";
}

