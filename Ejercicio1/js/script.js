let diaSemana = prompt("Rutinas de Ejercicio. (Ingrese el dia de hoy).");

switch (diaSemana) {
    case "lunes":
        alert("hoy es lunes. Caminata de 8 Km. (Ida y Vuelta)");
        break;

    case "martes":
        alert("hoy es martes. Ejercicios de elongacion y Trote de 4 Km.");
        break;

    case "miercoles":
        alert("hoy es miercoles. Caminata de 10 Km. (Ida y vuelta)");
        break;

    case "jueves":
        alert("hoy es jueves. 18 Km en bicicleta. (Ida y vuelta)");
        break;

    case "viernes":
        alert("hoy es viernes. Ejercitacios de elongacion y Trote de 4 Km.");
        break;

    case "sabado":
        alert("hoy es sabado. Caminata de 5 Km.");
        break;

    case "domingo":
        alert("hoy es domingo. Descanso semanal.");
        break;

    default:
        alert("Escribe el dia de la semana con letras minusculas.");
}