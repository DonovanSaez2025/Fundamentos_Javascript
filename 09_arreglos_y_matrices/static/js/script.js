function fraseArreglo() {
    let palabras = ["Juan", "corre", "rápidamente", "feliz", "parque"];
    alert(`${palabras[0]} ${palabras[1]} ${palabras[3]} y ${palabras[2]} por el ${palabras[4]}`);
};

function fraseVaria() {
    let datos = [3, "gatos", "negros", "duermen", "tranquilamente"];
    alert(`Los ${datos[0]} ${datos[1]} ${datos[2]} ${datos[3]} muy ${datos[4]}`);
};

function sumarMatriz() {
    let matriz = [
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90]
    ];

    alert(`${matriz[0]}\n${matriz[1]}\n${matriz[2]}\nSuma de los valores en la posición [0][2] y [2][1]: ${matriz[0][2]} + ${matriz[2][1]} = ${matriz[0][2] + matriz[2][1]}`);
};

function sumarMatrizTres() {
    let datos = [
        [1, 2, 3, 4],
        [5, 6, [7, 8, [9, 10]]]
    ];

    alert(`${datos[0]}\n${datos[1][0]},${datos[1][1]},[${datos[1][2][0]},${datos[1][2][1]},[${datos[1][2][2]}]]\nSuma de los valores en la posición [1][2][1] y [1][2][2][1]: ${datos[1][2][1]} + ${datos[1][2][2][1]} = ${datos[1][2][1] + datos[1][2][2][1]}`);
};

