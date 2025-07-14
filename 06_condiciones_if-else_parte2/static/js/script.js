// Ejercicios condiciones IF - ELSE
console.log("Conexión con js establecida por segunda vez...");

// Ejercicio 11
/* Comparar longitud de dos palabras
 Solicita dos palabras mediante prompt().
 Muestra con alert() cuantas letras tiene cada palabra y cual tiene más. */

function longitudDosPalabras() {
    // Pedir dos palabras al usuario.
    let pal1 = prompt("Ingrese una palabra");
    let pal2 = prompt("Ingrese otra palabra");
    // Condición IF - ELSE IF - ELSE
    if (pal1 == "" && pal2 == "") {
        alert("Ingrese algún valor para trabajar...")
    } else if (pal1.length > pal2.length) {
        alert(`
                Primera palabra: ${pal1.length}\n
                Segunda palabra: ${pal2.length}\n
                La primera palabra es más larga que la segunda.`);
    } else if (pal1.length < pal2.length) {
        alert(`
                Primera palabra: ${pal1.length}\n
                Segunda palabra: ${pal2.length}\n
                La segunda palabra es más larga que la primera.`);
    } else {
        alert(`
            Cantidad de letras de la primera palabra: ${pal1.length}\n
            Cantidad de letras de la segunda palabra: ${pal2.length}\n
            Ambas palabras tienen la misma cantidad de letras.`);
    };
};

// Ejercicio 12
/* Email válido
 Pide un correo electrónico con prompt().
 Si el correo contiene un @ dirá que es un correo válido
 Si el correo no contiene ningún @ dirá que es inválido. */

function validarEmail() {

};

// Ejercicio 13
/* Verificar positivo o negativo
 Pide un número al usuario y muestra si es positivo o negativo. */

function negativoPositivo() {
    let num = parseInt(prompt("Ingrese un número: "));
    if (num < 0) {
        alert(`${num} es un número negativo`)
    } else if (num >= 0) {
        alert(`${num} es un número positivo`)
    } else {
        alert("Ingrese valores válidos.")
    }
};

// Ejercicio 14
/* Saludo personalizado según hora
 Te pide la hora actual en el formato de 24 horas).
 Si es antes de las 12, dirá "Buenos días".
 Si es entre las 12 y las 18 dirá "Buenas tardes" */

function saludoHora() {

};

// Ejercicio 15
/* Verifica si una palabra contiene la letra e
 Solicita una palabra al usuario.
 Compara ambos y muestra cuál es mayor o si son iguales. */

function compararNumeros() {

};
