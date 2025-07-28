// Ejercicios condiciones IF - ELSE
console.log("Conexión con js establecida...");

// Ejercicio 1
/* Edad para votar
 Solicita la edad del usuario mediante prompt().
 Muestra con alert() si puede votar (18 años o más) o no. */

function edadVotar() {
    // Input conversión string a número
    let edad = parseInt(prompt("Ingrese su edad: "));
    // Condición IF - ELSE IF - ELSE
    if (edad >= 18) {
        alert("Su edad de " + edad + " años está aprobada para votar.");
    } else if (edad > 0 && edad < 18) { // && Compuerta AND
        alert("Su edad de " + edad + " años no está aprobada para votar.");
    } else {
        alert("Ingrese un valor válido.");
    };
};

// Ejercicio 2
/* Contraseña válida
 Pide una contraseña con prompt().
 Si es igual a "1234", muestra un mensaje de acceso permitido. 
 En caso contrario, muestra acceso denegado. */

function validarContrasena() {
    // Contraseña
    let clave = "1234";
    // Input string
    let contrasena = prompt("Ingrese su contraseña: ");
    // Condición IF - ELSE
    if (contrasena == clave) {
        alert("Acceso permitido.");
    } else {
        alert("Acceso denegado.");
    };
};

// Ejercicio 3
/* Verificar par o impar
 Pide un número por prompt().
 Evalúa si el número es par o impar y muestra el resultado con alert(). */

function verificarParImpar() {
    // input conversión string a número
    let num = parseInt(prompt("Ingrese un número: "));
    // Condición IF - ELSE IF - ELSE
    if (num % 2 == 0) {
        alert("El número es par");
    } else if (num > 0) { // || Compuerta OR
        alert("El número es impar");
    } else {
        alert("Ingrese un valor numérico válido");
    };
};

// Ejercicio 4
/* Temperatura ambiental
 Solicita la temperatura actual. 
 Si es mayor o igual a 30, muestra “Hace calor”,
 de lo contrario muestra “Clima agradable”. */

function medirTemperatura() {
    // Input conversión string a número
    let temperatura = parseInt(prompt("Ingrese la temperatura: "));
    // Condición IF - ELSE IF - ELSE IF - ELSE
    if (temperatura >= 30) {
        alert("Hace calor");
    } else if (temperatura < 30 && temperatura > 15) {
        alert("Clima agradable");
    } else if (temperatura <= 15) {
        alert("Hace frío");
    } else {
        alert("Ingrese un valor numérico válido");
    };
};

// Ejercicio 5
/* Comparar dos números
 Solicita dos números al usuario. 
 Compara ambos y muestra cuál es mayor o si son iguales. */

function compararNumeros() {
    // Input conversión string a número
    let num1 = parseInt(prompt("Ingrese un número: "));
    // Otro input conversión string a número
    let num2 = parseInt(prompt("Ingrese otro número: "));
    // Condición IF - ELSE IF - ELSE IF - ELSE
    if (num1 > num2) {
        alert("El número " + num1 + " es mayor que el número " + num2);
    } else if (num1 < num2) {
        alert("El número " + num1 + " es menor que el número " + num2);
    } else if (num1 == num2) {
        alert("El número " + num1 + " es igual que el número " + num2);
    } else {
        alert("Ingrese números válidos");
    };
};

// Ejercicio 6
/* Calificación escolar
 Pide una nota entre 1 y 7. 
 Si es 4 o más, muestra “Aprobado”, si es menor, muestra “Reprobado”. */

function aprobarCalificacion() {
    // Input conversión string a número
    let nota = parseInt(prompt("Ingrese su nota: "));
    // Condición IF - ELSE IF - ELSE
    if (nota >= 4 && nota <= 7) {
        alert("Aprobado");
    } else if (nota < 4 && nota > 0) {
        alert("Reprobado");
    } else {
        alert("Ingrese una nota válida");
    };
};

// Ejercicio 7
/* Nombre de usuario válido
 Pide un nombre de usuario. 
 Si el valor ingresado es "admin", muestra “Bienvenido, administrador”. 
 Si no, muestra “Usuario no reconocido”. */

function verificarUsername() {
    // Username
    let username = "admin";
    // Input string
    let inputUsuario = prompt("Ingrese su nombre de usuario: ");
    // Condición IF - ELSE
    if (inputUsuario == username) {
        alert("Bienvenido, administrador.");
    } else {
        alert("Usuario no reconocido.");
    };
};

// Ejercicio 8
/* Verificar si una palabra empieza con "A"
 Pide una palabra al usuario. 
 Verifica si empieza con la letra “A” mayúscula y muestra un mensaje acorde. */

function letraMayuscula() {
    // Input string
    let texto = prompt("Ingresa una palabra: ");
    // Condición IF - ELSE IF - ELSE
    if (texto[0] == "A") {
        alert("La palabra empieza con la letra A");
    } else {
        alert("La palabra no empieza con la letra A mayúscula");
    };
};


// Ejercicio 9
/* Precio con descuento
 Solicita el precio de un producto. 
 Si el precio es mayor a 10000, muestra que aplica descuento. 
 Si no, indica precio normal. */

function precio() { // Creación de la función
    //Añadir un porcentaje de descuento e IVA y mostrar.
    const iva = 0.19;
    let descuento = parseFloat(prompt("Ingrese el valor de descuento: Ejemplo 20"));
    descuento /= 100; // operación para llevar a decimal
    let precio = parseFloat(prompt("Ingrese el precio del producto"));
    if (precio > 10000) {
        alert(`El valor ingresado fue: ${precio}\n
          IVA: ${precio * iva}\n
          Precio Total:${precio * 1.19}\n
          `);
    } else {
        alert("Precio normal");
    }
};

// Ejercicio 10
/* Verificar si una persona puede conducir
 Solicita la edad del usuario y si tiene licencia (por ejemplo, respondiendo "sí" o "no").
 Si tiene 18 o más y respondió que tiene licencia, muestra “Puede conducir”. 
 Si no, muestra “No puede conducir”. */

function licenciaEdad() {
    // Input conversión string a número
    let edad = parseInt(prompt("Ingrese su edad: "));
    // Condición IF - ELSE IF - ELSE
    if (edad >= 18 && edad < 100) {
        // Input string
        let licencia = prompt('¿Tienes licencia de conducir? (Ingresa "si" o "no" sin mayúsculas ni espacios)');
        // Anidamiento IF
        if (licencia == "si") {
            alert("Usted puede conducir.");
        } else if (licencia == "no") {
            alert("No puede conducir.")
        } else {
            alert("Ingrese valores válidos.")
        }
    } else {
        alert("Ingrese valores válidos.");
    };
};

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
        alert("Ingrese algún valor para trabajar...");
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
    let email = prompt("Ingrese su email: ");

    if (email.includes("@") && email.includes(".") && email.length >= 10) {
        alert(`${email} es un correo válido`);
    } else {
        alert(`${email} es un correo inválido`);
    };
};

// Ejercicio 13
/* Verificar positivo o negativo
 Pide un número al usuario y muestra si es positivo o negativo. */

function negativoPositivo() {
    // Ingresar el número
    let num = parseInt(prompt("Ingrese un número: "));
    // Condicional IF-ELSE IF-ELSE IF-ELSE
    if (num < 0) {
        alert(`${num} es un número negativo`);
    } else if (num === 0) {
        alert(`${num} es un número inválido`);
    } else if (num >= 0) {
        alert(`${num} es un número positivo`);
    } else {
        alert("Ingrese valores válidos.");
    };
};

// Ejercicio 14
/* Saludo personalizado según hora
 Te pide la hora actual en el formato de 24 horas).
 Si es antes de las 12, dirá "Buenos días".
 Si es entre las 12 y las 18 dirá "Buenas tardes" */

function saludoHora() {
    // Ingresar la hora
    let hora = parseInt(prompt("Ingrese la hora actual (sin minuto)"));
    // Condicional IF-ELSE IF-ELSE IF-ELSE
    if (hora >= 7 && hora <= 11) {
        alert(`Buenos días, son las ${hora} horas`);
    } else if (hora >= 12 && hora <= 18) {
        alert(`Buenas tardes, son las ${hora} horas`);
    } else if (hora >= 19 && hora <= 23 || hora >= 0 && hora <= 6) {
        alert(`Buenas noches, son las ${hora} horas, que sueño`);
    } else {
        alert("Ingrese valores válidos");
    };
};

// Ejercicio 15
/* Verifica si una palabra contiene la letra e minúscula
 Solicita una palabra al usuario.
 Verificar si la palabra contiene la letra e minúscula. */

function verificarLetraE() {
    // Ingresar una palabra
    let palabra = prompt("Ingrese una palabra");
    // Condicional IF-ELSE
    if (palabra.includes("e")) {
        alert(`La palabra ${palabra} incluye la letra e minúscula`);
    } else {
        alert(`La palabra ${palabra} no contiene la letra e minúscula`);
    };
};