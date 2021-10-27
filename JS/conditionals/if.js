
// ENTRADA DE CINE

let edad = prompt ("Ingrese su edad");
let valorEntrada = 400;
let pochoclo = 200;
let gaceosa = 400;

let socio = false;

let valorMenor = 50 * valorEntrada / 100;
let valorAdolescente = 80 * valorEntrada / 100;
let valorAdulto = 100 * valorEntrada / 100;
let valorMayor = 70 * valorEntrada / 100;

if (socio) {
    valorTotal = valorTotal + 100
}

if (edad > 54){
    valorTotal = valorMayor + pochoclo + gaceosa
} else if (edad > 17) {
    valorTotal = valorAdulto + pochoclo + gaceosa
} else if (edad > 12){
    valorTotal = valorAdolescente + pochoclo + gaceosa
} else {
    valorTotal = valorMenor + pochoclo + gaceosa
}
    document.write("El importe final es: $" + valorTotal)

// ELEMENTOS DE LOS SIGNOS

let signo = prompt("Ingrese signo")

signo = signo.toLowerCase();
// Transforma el texto a minúscula

if (signo == "Aries" || signo == "Leo" || signo == "Sagitario"){
    document.write("Su signo es de Fuego");
} else if (signo == "Tauro" || signo == "Virgo" || signo == "Capricornio"){
    document.write("Su signo es de Tiera");
} else if (signo == "Gémines" || signo == "Libra" || signo == "Acuario"){
    document.write("Su signo es de Aire");
} else if (signo == "Cáncer" || signo == "Escorpio" || signo == "Piscis"){
    document.write("Su signo es de Agua");
}
