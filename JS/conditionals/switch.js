let total = 0;
let fruta;
do{
    let subtotal = 0;
    fruta = prompt("Ingrese la fruta que desea comprar");
    console.log(fruta);
    if(typeof fruta === 'string') fruta.toLowerCase();
    else break;

    let kg = 0;
    do {
        kg = parseInt(prompt("Ingrese la cantidad que desea comprar")); //NaN
    } while (isNaN(kg));
    
    let precioKg = 0;

    switch (fruta) {
        case 'naranja':
            precioKg = 150;
            document.write(`El kg de la ${fruta} vale $ ${precioKg} el subtotal: ${precioKg * kg}<br/>`);
            subtotal = precioKg * kg;
            break;
        case 'frutilla':
            precioKg = 1100;
            document.write(`El kg de la ${fruta} vale $ ${precioKg} el subtotal: ${precioKg * kg}<br/>`);
            subtotal = precioKg * kg;
            break;
        case 'kiwi':
            precioKg = 200;
            document.write(`El kg de la ${fruta} vale $ ${precioKg} el subtotal: ${precioKg * kg}<br/>`);
            subtotal = precioKg * kg;
            break;
        case 'palta':
            precioKg = 700;
            document.write(`El kg de la ${fruta} vale $ ${precioKg} el subtotal: ${precioKg * kg}<br/>`);
            subtotal = precioKg * kg;
            break;
        case 'uva':
            precioKg = 100;
            document.write(`El kg de la ${fruta} vale $ ${precioKg} el subtotal: ${precioKg * kg}<br/>`);
            subtotal= precioKg * kg;
            break;
        default:
            console.log('La fruta ingresada no es correcta');
    }
    total += subtotal;
}while(fruta !== null)

document.write(`<h1>Total a pagar $ ${total}</h1>`)