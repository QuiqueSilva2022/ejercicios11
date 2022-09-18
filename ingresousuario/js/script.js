var usuario = "cristian";
var contraseña = "1234";
var intentos = 3;
while (intentos > 0) {
    var usuario1 = prompt("ingrese el Usuario");
    var contraseña1 = prompt("Ingrese la Contraseña");
    if (usuario == usuario1 && contraseña == contraseña1) {
        alert("Ingreso Aceptado");
        break;
    }
    else {
        { "Usuario y/o contraseña incorrecto" }
        intentos = intentos - 1;
    }
}
if (intentos == 0) {
    alert("cuenta bloqueada")
}