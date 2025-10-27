// 01. Tabla de multiplicar
/* Pide un número al usuario e imprime su tabla 
de multiplicar del 1 al 10 en un solo alert.*/
function tablasMulti() {
    let num = parseInt(prompt("Ingrese un número:"));
    let result = `Tabla de ${num}:`;

    // Verifica que el valor ingresado sea un número
    if (isNaN(num)) {
        alert("Ingrese valores válidos.");
    } else {
        // Inicio del bucle for
        for (let i = 1; i <= 10; i++) {
            result += `\n${num} x ${i} = ${num * i}`;
        }
        alert(result);
    };
};

// 02. Números pares hasta n
/* Solicita un número n e imprime todos los números 
pares desde 1 hasta n usando un bucle for. */
function imprimirPares() {
    let num = parseInt(prompt("Ingrese un número:"));

    // Verifica que el valor ingresado sea un número
    if (isNaN(num)) {
        alert("Ingrese valores válidos.");
    } else {
        // Inicio del bucle for
        for (let i = 1; i <= 10; i++) {
            result += `\n${num} x ${i} = ${num * i}`;
        }
        alert(result);
    };
};