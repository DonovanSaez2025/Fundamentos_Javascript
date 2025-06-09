// Ejemplos de string
function usarString() {
    // Variable tipo texto que permite ingresar cualquier nombre
    let nombre = prompt("Ingrese su nombre: ");
    // Asignamos valor a primeraLetra con posición 0 de variable nombre
    let primeraLetraNombre = nombre[0];
    // Uso de length --> largo de una variable
    let ultimaLetraNombre = nombre[nombre.length - 1];
    // mostrando resultado
    alert("Primera letra del nombre es: " + primeraLetraNombre +
        "\nÚltima letra es: " + ultimaLetraNombre
    );
}

// Tarea: Imprimir segunda letra y penúltima de el apellido
function manipularApellido() {
    // Variable que permite ingresar cualquier apellido
    let apellido = prompt("Ingrese su apellido: ");
    // Obtenemos la letra que está en la posición 1 en la variable apellido
    let segundaLetraApellido = apellido[1];
    // Usando length para obtener la penúltima letra
    let penultimaLetraApellido = apellido[apellido.length - 2];
    // mostrando resultado
    alert("Segunda letra del apellido es: " + segundaLetraApellido +
        "\nPenúltima letra del apellido es: " + penultimaLetraApellido
    );
}