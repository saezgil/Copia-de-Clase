let numero1 = 65;
let numero2 = 232;
let numero3 = 60 + 5;
let numeroString = '65';
let numero4 = 66;

// let active = false;
// let nombre1 = "Jose";
// let nombre2 = "Malcom";
// let nombre3 = "jose";

// Iguales o distintos
console.log('numero1 == numero2', numero1 == numero2);
console.log('numero1 != numero2', numero1 != numero4);
console.log('numero1 == numeroString', numero1 == numeroString); //true
console.log('Estrictamente igual numero1 === numero3', numero1 === numero3);
console.log('Estrictamente distintos numero1 !== numero3', numero1 !== numero3);
console.log('Estrictamente distintos numero1 !== numeroString', numero1 !== numeroString);

// Mayor que, menor que, igual que
console.log('Numero1 es mayor numero4', numero1 > numero4); //false
console.log('Numero2 es mayor numero1', numero2 > numero1); //true
console.log('Numero4 es menor que numero2', numero4 < numero2); //true
console.log('Numero1 es mayor que numero3', numero1 > numero3); //false

let edad = 18;
console.log(edad >= 18); //true
let edad2 = 17.999;
console.log(edad2 >= 18); //false
let edad3 = 18.000001;
console.log(edad3 > 18); //true
let edad4 = 18.1;
console.log(edad4 <= 18); //false
let edad5 = 22;
console.log(edad5 > '23');
    //false

// console.log('Edad ingresada por el usuario: ', canAccess);

let canAccess = prompt("Ingrese su edad");
console.log('Edad ingresada por el usuario: ', canAccess);

if(canAccess >= 18) {
    document.write("Puede ingresar a el boliche");
} else if(canAccess > 50) {
    document.write("Tiene un descuento por mayor")
} else {
    document.write("No puede ingresar")
}

document.write("No puede ingresar")
document.write("No puede ingresar")
document.write("No puede ingresar")
document.write("No puede ingresar")



