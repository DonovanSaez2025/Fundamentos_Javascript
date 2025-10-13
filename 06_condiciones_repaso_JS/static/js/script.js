// Comprobar conexión entre HTML y JS
console.log("Conexión con JS!");

// 01. Edad y etapa de vida
/* Pide la edad de una persona.
- Si es menor a 13 → “Eres un niño”.
- Si tiene entre 13 y 17 → “Eres adolescente”.
- Si tiene 18 o más → “Eres adulto
*/

// Función sin parámetros para verificar la edad
function verificarEtapa() {
    // Variable que guardará la edad ingresada
    let edad = parseInt(prompt("Ingresa tu edad: "));

    // Conficional IF-Else IF-Else para cada rango de edad ye tapa de la vida
    if (edad < 2) {
        alert(`Con ${edad} año, eres un bebé.`);
    } else if (edad >= 2 && edad < 13) {
        alert(`Con ${edad} años, eres un niño.`);
    } else if (edad >= 13 && edad <= 17) {
        alert(`Con ${edad} años, eres un adolescente.`);
    } else if (edad >= 18 && edad <= 64) {
        alert(`Con ${edad} años, eres un adulto.`);
    } else if (edad >= 65) {
        alert(`Con ${edad} años, eres un anciano.`);
    } else {
        alert("Ingresa un número válido.");
    };
}

// 02. Validar contraseña exacta
/* Pide una contraseña.
- Si el texto ingresado es exactamente "12345", muestra “Acceso permitido”.
- Si no, muestra “Acceso denegado”.
*/

// Función sin parámetros para verificar la contraseña
function verificarContrasena() {
    // Variable que guarda la contraseña actual
    let contrasena = "12345";
    // Variable que guardará la contraseña ingresada por tí
    let contrasenaIngresada = prompt("Ingresa la contraseña: ");

    // Condicional IF-Else para comprobar si la contraseña es correcta o incorrecta.
    if (contrasenaIngresada === contrasena) {
        alert("Acceso permitido");
    } else {
        alert("Acceso denegado");
    };
}

// 03. Verificar letra en palabra
/* Pide una palabra.
- Si contiene la letra “e” (mayúscula o minúscula) → “La palabra contiene la letra E”.
- Si no → “No contiene la letra E”.
*/

// Función sin parámetros para verificar la letra E en una palabra
function verificarLetraE() {
    // Variable que guardará la palabra ingresada
    let palabra = prompt("Ingrese una palabra: ")

    // Condicional IF-Else para comprobar si hay una letra E en la palabra
    if (palabra.toLowerCase().includes("e")) {
        alert(`La palabra ${palabra} contiene la letra E.`)
    } else {
        alert(`La palabra ${palabra} no tiene la letra E.`)
    };
}

// 04. Comparar dos números
/* Pide dos números con prompt().
- Si el primero es mayor → “El primer número es mayor”.
- Si el segundo es mayor → “El segundo número es mayor”.
- Si son iguales → “Son iguales”.
*/

// Función sin parámetros para comparar cuál número es mayor, menor o si son iguales
function compararNumeros() {
    // Variable que guardará el primer número.
    let num1 = parseInt(prompt("Ingrese un número: "));
    // Variable que guardará el segundo número.
    let num2 = parseInt(prompt("Ingrese otro número: "));

    // Condicional IF-Else IF-Else para verificar los números en cada caso
    if (num1 == num2) {
        alert(`${num1} y ${num2} son números iguales`);
    } else if (num1 > num2) {
        alert(`${num1} es mayor que ${num2}`);
    } else if (num1 < num2) {
        alert(`${num1} es menor que ${num2}`);
    } else {
        alert("Ingrese números válidos");
    };
}


// 05. Determinar si el número es par o impar
/* Pide un número.
- Si el resto al dividir por 2 (% 2) es 0 → “Número par”.
- Si no → “Número impar”.
*/

// Función sin parámetros que verifica si el número es par o impar
function parImpar() {
    // Variable que guardará el número ingresado
    let num = parseInt(prompt("Ingrese un número: "));

    // Condicional IF-Else IF-Else para verificar si el número es par o impar
    if (num % 2 == 0) {
        alert(`El número ${num} es un número par`);
    } else if (num % 2 != 0) {
        alert(`El número ${num} es un número impar`);
    } else {
        alert("Ingrese un número válido");
    };
}