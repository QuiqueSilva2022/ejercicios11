const equipo = "Independiente";
var ganado = 0;
var empatado = 0;
var parperdido = 0;
var parganado = 0;
var parempatado = 0;

for (let i = 0; i <= 12; i++) {
    var resultado = prompt("ingrese el resultado del partido");

    if (resultado == "ganado") {
        ganado = ganado + 3;
        parganado = parganado + 1;
    }
    else if (resultado == "empatado") {
        empatado = empatado + 1;
        parempatado = parempatado + 1;
    }
    if (resultado == "perdido") {
        parperdido = parperdido + 1;
    }
}
document.write('El equipo ' + equipo + ' logro un total de ' + (ganado + empatado) + 'puntos ')
document.write(' Ganaron un total de ' + parganado + ' partidos. Perdieron un total de ' + parperdido + ' partidos, y empataron un total de ' + parempatado + 'partidos.')