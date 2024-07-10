var stado = "Puebla";
// if (stado == "Queretaro") {
//   console.log("Todo bien");
// } else {
//   console.log("Error");
// }

//var guardarEstado = stado ? "Todo bien" : "Error";//Variables boolean
var guardarEstado = stado != "Queretaro" ? 10 : "Error"; //Variables con strings
//----------------------------------------------------------------------------------
var arregloAnimales = ["perro", "gato", "delfin"];
var frutas = ["manzana", "pera", "platano"];
var concatenando = arregloAnimales.join(",");
var concatenandoDos = arregloAnimales.concat(frutas);

console.log(concatenando);
console.log(concatenandoDos);
