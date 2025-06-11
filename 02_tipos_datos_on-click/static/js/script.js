// Declaración de variables
let numeroEntero = 25; // Numérico - INT
let numeroDecimal = 3.14; // Décimal - FLOAT
let cadenaTexto = "Hola, mundo"; // Texto - STRING 
let valorBooleano = true; // verdadero/falso (1, 0) - BOOLEAN
let arregloNumeros = [1, 2, 3, 4]; // Lista de elementos - ARRAY
let objetoPersona = { nombre: "Ana", edad: 30 }; // Objeto clave: valor - OBJECT
let valorIndefinido; // Sin valor asignado - UNDEFINED
let valorNulo = null; // Valor nulo - NULL
const mes = "Junio"; // variable constante - CONST

// Funciones para mostrar cada valor con alert()
function mostrarNumeroEntero() {
  alert("Número entero: " + numeroEntero);
};

function mostrarNumeroDecimal() {
  alert("Número decimal: " + numeroDecimal);
};

function mostrarCadenaTexto() {
  alert("Cadena de texto: " + cadenaTexto);
};

function mostrarBooleano() {
  alert("Valor booleano: " + valorBooleano);
};

function mostrarArreglo() {
  alert("Arreglo de números: " + arregloNumeros);
};

function mostrarObjeto() {
  alert("Objeto persona: " + JSON.stringify(objetoPersona));
};

function mostrarIndefinido() {
  alert("Valor indefinido: " + valorIndefinido);
};

function mostrarNulo() {
  alert("Valor nulo: " + valorNulo);
};

function mostrarConstante() {
  alert("Constante mes: " + mes);
};

