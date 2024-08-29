// 7.	Concatenación de arreglos: Crea dos arreglos de 
// strings y luego concatenarlos en un solo arreglo.

const arregloUno = ["Manzana", "Pera", "Fresa"];
const arregloDos = ["Galletas", "Sabritas", "Maruchan"];
var arregloResultante = [];

for(var i = 0; i < arregloUno.length; i++) {
    arregloResultante.push(arregloUno[i]);
    arregloResultante.push(arregloDos[i]);
}

console.log("Resultado: " + arregloResultante);