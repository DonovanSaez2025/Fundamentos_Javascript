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
        alert("Acceso permitido.");
    } else {
        alert("Acceso denegado.");
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
        alert(`${num1} y ${num2} son números iguales.`);
    } else if (num1 > num2) {
        alert(`${num1} es mayor que ${num2}.`);
    } else if (num1 < num2) {
        alert(`${num1} es menor que ${num2}.`);
    } else {
        alert("Ingrese números válidos.");
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
        alert(`El número ${num} es un número par.`);
    } else if (num % 2 != 0) {
        alert(`El número ${num} es un número impar.`);
    } else {
        alert("Ingrese un número válido.");
    };
}

// 06. Revisar letra inicial
/* Pide una palabra.
- Si empieza con la letra “A” o “a” → “Empieza con A”.
- Si no → “No empieza con A”.
*/

// Función sin parámetros que revisa cuál letra es la inicial
function letraInicial() {
    // Variable que guardará la palabra ingresada
    let palabra = prompt("Escribe una palabra: ");

    // Condicional IF-Else IF-Else que verifica si la primera letra es la A
    if (palabra[0].toLowerCase() == "a") {
        alert(`La palabra ${palabra} empieza con la letra a.`);
    } else {
        alert(`La palabra ${palabra} no empieza con A.`);
    };
}

// 07. Temperatura ambiente
/* Pide una temperatura.
- Si es menor a 10 → “Hace frío”.
- Si es entre 10 y 25 → “Clima templado”.
- Si es mayor o igual a 26 → “Hace calor”.
*/

// Función sin parámetros que comprueba la temperatura del ambiente
function comprobarTemp() {
    // Variable que guardará la temperatura ambiente
    let temperatura = parseInt(prompt("Ingresa la temperatura: "));

    // Condicional IF-Else IF-Else que comprobará la temperatura ambiente
    if (temperatura < 10) {
        alert(`Con ${temperatura} hace frío.`);
    } else if (temperatura >= 10 && temperatura <= 25) {
        alert(`Con ${temperatura} hace un clima templado.`);
    } else if (temperatura >= 26) {
        alert(`Con ${temperatura} hace un calor.`);
    } else {
        alert("Ingrese una temperatura válida.");
    };
}

// 08. Nombre reconocido
/* Pide un nombre.
- Si el nombre es “Dany” → “Hola, profesor 👋”.
- Si el nombre es “Ely” → “Hola, mamá 🌷”.
- En cualquier otro caso → “Hola, visitante”.
*/

// Función sin parámetros que reconocerá el nombre ingresado
function nombreReconocer() {
    // Variable que guardará el nombre ingresado
    let nombre = prompt("Ingresa tu nombre: ");

    // Condicional IF-Else IF-Else que reconocerá el nombre y dará un saludo personalizado
    if (nombre.toLowerCase() == "dany") {
        alert("Hola, profesor 👋")
    } else if (nombre.toLowerCase() == "ely") {
        alert("Hola, mamá 🌷");
    } else {
        alert("Hola, visitante.");
    };
}

// 09. Nota de evaluación
/* Pide una nota entre 1 y 7.
- Si es 4 o más → “Aprobado”.
- Si es menor que 4 → “Reprobado”.
- Si está fuera del rango 1–7 → “Nota inválida”.
*/

// Función sin parámetros que evaluará la nota ingresada
function evaluarNota() {
    // Variable que guardará la nota ingresada
    let nota = parseFloat(prompt("Ingrese su nota: "));

    // Condicional IF-Else IF-Else que dará un mensaje según el rango de la nota
    if (nota >= 4) {
        alert(`Con ${nota} estás aprobado.`);
    } else if (nota < 4) {
        alert(`Con ${nota} estás reprobado.`);
    } else {
        alert("Ingrese una nota válida.");
    };
}

// 10. Verificar si contiene una palabra clave
/* Pide una frase.
- Si incluye la palabra “Jesús” (mayúscula o minúscula) → “Tu frase tiene la palabra clave 🙌”.
- Si no → “No contiene la palabra clave”.
*/

// Función sin parámetros que verificará que haya una palabra clave en la frase
function palabraClave() {
    // Variable que guardará la frase ingresada
    let frase = prompt("Ingrese una frase: ");

    // Condicional IF-Else IF-Else que verificará que exista la palabra clave en la frase
    if (frase.toLowerCase().includes("jesús")) {
        alert(`La frase ${frase} contiene la palabra clave 🙌`)
    } else {
        alert(`La frase ${frase} no contiene la palabra clave.`)
    }
}