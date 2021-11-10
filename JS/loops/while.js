// let i = 0
// let personas = prompt("ingrese la cantidad")

// while (personas < 100){
//     document.write("son menos de 100");
//     personas = personas + 1;
// }

// let age = prompt("ingrese la edad")
// age = parseInt()
// // transforma en número

// while (age == false){
//     prompt("ingrese la edad");
// }


////////////////////////////////////

let i = 0
let totalAlumnos = prompt("ingrese la cantidad");

while (i =< TotalAlumnos){
    let matematicas = parseInt(prompt("ingrese nota de matemáticas"));
    let lengua = parseInt(prompt("ingrese la nota de lengua"));
    let csSociales = parseInt(prompt("ingrese la notas de ciencias sociales"));
    promedio = matemáticas+lengua+csSociales/3
    document.write("El promedio del alumno es " + promedio);
    i = i + 1;
} if (promedio => 7){
    document.write("APROBADO");
} else {
    document.write("DESAPROBADO")
}