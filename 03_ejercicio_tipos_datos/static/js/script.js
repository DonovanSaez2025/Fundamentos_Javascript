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
};

function mostrarValorEuler() {
  alert("Número Euler: " + numeroEuler);
};

function mostrarMascota() {
  alert("Nombre de la mascota: " + mascota);
};

function mostrarEstadoAmoroso() {
  alert("Estado amoroso: " + enamorado);
};

function mostrarColores() {
  alert("Colores favoritos: " + coloresFavoritos);
};

function mostrarUsuario() {
  alert("Usuario: " + JSON.stringify(usuario));
};

function mostrarPromedioFinal() {
  alert("Promedio final: " + promedioFinal);
};

function mostrarPareja() {
  alert("Pareja: " + pareja);
};

function mostrarMesNacimiento() {
  alert("Mes de nacimiento: " + mesCumpleanios);
};