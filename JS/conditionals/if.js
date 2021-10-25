// VARIABLES
let numero1 = 65;
let numero2 = 232;

// EXPRESIONES

console.log("Iguales = ", numero1 == numero2);
console.log("Diferentes = ", numero1 != numero2);
console.log("Estrictamente iguales = ", numero1 === numero2);
console.log("Estrictamente diferentes = ", numero1 !== numero2);
console.log("Mayor que = ", numero1 > numero2);
console.log("Menor que = ", numero1 < numero2);
console.log("Mayor o igual que = ", numero1 >= numero2);
console.log("Menor o igual que = ", numero1 <= numero2);

// EJEMPLO PRACTICO
let canAcces = prompt("Ingrese su edad")
console.log("Edad ingresada: ", canAcces)

if(canAcces >= 18) {
    document.write("Puede ingresar")
    console.log("Puede ingresar")
} else {
    document.write("No puede ingresar")
    console.log("No puede ingresar")
}
