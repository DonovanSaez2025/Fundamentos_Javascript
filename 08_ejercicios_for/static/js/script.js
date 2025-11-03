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
    let result = "El resultado es: ";

    // Verifica que el valor ingresado sea un número
    if (isNaN(num)) {
        alert("Ingrese valores válidos.");
    } else {
        // Inicio del bucle for
        for (let i = 1; i <= num; i++) {
            if (i % 2 == 0) {
                result += ` ${i}`;
            };
        };

        alert(result);
    }
};

// 03. Contar letras de una palabra
/* Pide una palabra al usuario y muestra cuántas letras tiene 
usando un bucle for para recorrerla. */
function letrasNum() {
    let palabra = prompt("Ingrese un número:");
    let result = "La palabra tiene:";

    // Inicio del bucle for
    for (let i = 1; i <= palabra.length; i++) {
        result += ` ${i}`;
    };

    alert(`${result} letras`);
};

// 04. Calcular factorial
/* Solicita un número n e imprime el factorial 
de ese número (n × n-1 × n-2 × … × 1) usando un bucle for.*/
function factorialCalc() {
    let num = parseInt(prompt("Ingrese un número:"));
    let result = `El factorial de ${num} es: 1 `;
    let factorial = 1;

    // Verifica que el valor ingresado sea un número
    if (isNaN(num)) {
        alert("Ingrese valores válidos.");
    } else {
        // Inicio del bucle for
        for (let i = 2; i <= num; i++) {
            result += ` * ${i}`;
            factorial *= i;
        };

        alert(`${result} = ${factorial}`);
    }
};

// 05. Suma de números impares hasta n
/* Pide un número n y suma todos los 
números impares desde 1 hasta n. */
function sumarImpar() {
    let num = parseInt(prompt("Ingrese un número:"));
    let result = "El resultado es:";
    let suma = 0;

    // Verifica que el valor ingresado sea un número
    if (isNaN(num)) {
        alert("Ingrese valores válidos.");
    } else {
        // Inicio del bucle for
        for (let i = 1; i <= num; i++) {
            if (i % 2 != 0) {
                result += ` \n ${suma} + ${i} = ${suma + i}`;
                suma += i;
            };
            console.log(`num: ${num} result: ${result} suma: ${suma} i: ${i}`)
        };

        alert(`${result}`);
    };
};