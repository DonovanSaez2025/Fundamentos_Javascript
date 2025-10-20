// Comprobar conexión con HTML
console.log("¡Conexión exitosa!");

// A. Ejemplo While: Contar del 10 al 1
// Función sin parámetros que contiene el ejemplo de bucle while
function ejecutarWhile() {
    let resultado = "El resultado es: ";
    let count = 10;

    while (count > 0) {
        resultado += ` ${count}`;
        console.log(count);
        count--;
    };

    alert(resultado);
}

// B. Ejemplo For: Contar del 10 al 1
// Función sin parámetros que contiene el ejemplo de bucle while
function ejecutarFor() {
    let resultado = "El resultado es: "

    for (let i = 10; i > 0; i--) {
        resultado += ` ${i}`;
        console.log(i);
    };

    alert(resultado);
};

/* 01. Imprimir del 1 a n (n es ingresado por teclado).
- Escribe un programa que utilice un bucle while para imprimir los números del 1 al n con un solo Alert.
*/
// Función sin parámetros para contar desde 1 hasta un número límite insertado por el usuario
function contadorPos() {
    let resultado = "El resultado es: ";
    let count = 1;
    let limit = parseInt(prompt("Ingrese un número límite: "));

    while (count <= limit) {
        resultado += ` ${count}`;
        console.log(count);
        count++;
    };

    alert(resultado);
};

/* 02. Cuenta regresiva del n al 1 (n es ingresado por teclado)
- Crea un programa que muestre una cuenta regresiva desde n hasta 1 utilizando un bucle while.
*/
// Función sin parámetros para contar desde un número insertado por el usuario hasta 1
function contadorRev() {
    let resultado = "El resultado es: ";
    let count = parseInt(prompt("Ingrese un número inicial: "));

    while (count > 0) {
        resultado += ` ${count}`;
        console.log(count);
        count--;
    };

    alert(resultado);
}

/* 03. Sumar los n primeros números 
- Usando un bucle for, calcula la suma de los números n primeros números  muestra el resultado en la consola.
*/
// Función sin parámetros para sumar todos los números que van antes de la variable limit
function sumarNum() {
    let = resultado = "El resultado es: ";
    let count = 1;
    let limit = parseInt(prompt("Ingrese un número límite: "));
    let suma = 0;

    while (count <= limit) {
        suma = suma + count;
        resultado += ` ${suma}`
        count++;
    };

    alert(resultado);
}

/* 04. Imprimir múltiplos de 2 del 1 al n (n es el límite de números a encontrar)
- Escribe un programa que use un bucle for para imprimir los múltiplos de 2 que hay entre 1 y 10 (inclusive).
*/
// Función sin parámetros para encontrar los números pares del 1 hasta un número ingresado por el usuario
function encontrarPar() {
    let resultado = "El resultado es: ";
    let count = 1;
    let limit = parseInt(prompt("Ingrese un número límite: "));
    let modulo;

    while (count <= limit) {
        mode = count % 2;

        if (count = 0) {
            resultado += ` ${count}`;
        }
        count++
    }

    alert(resultado);
};