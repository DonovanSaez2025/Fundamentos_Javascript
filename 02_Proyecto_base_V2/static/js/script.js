// Declaración de variables
let viviendas = 1;
let numeroEuler = 2.71828;
let mascota = "junior";
let enamorado = false;
let coloresFavoritos = ["amarillo", "negro", "verde", "azul"];
let usuario = {
  nombre: "Donovan",
  correo: "donovansaez@liceovvh.cl",
  edad: 16,
  notas: 6.4,
  esEstudiante: true
};
let promedioFinal;
let pareja = null;
const mesCumpleanios = "Octubre";

// Funciones para mostrar cada valor con alert()
function mostarViviendas() {
  alert("Cantidad de viviendas: " + viviendas);
}

function mostrarNumeroDecimal() {
  alert("Número decimal: " + numeroDecimal);
}

function mostrarCadenaTexto() {
  alert("Cadena de texto: " + cadenaTexto);
}

function mostrarBooleano() {
  alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
  alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
  alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
  alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
  alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
  alert("Constante mes: " + mes);
}