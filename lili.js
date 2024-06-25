// var mensaje = "Hola";
// var precio = 14.56;
// var resultado = 0;

var mensaje = "Hola",
  precio = 14.56,
  resultado = 0;

function hola() {
  console.log(mensaje);
  console.log(resultado);
  console.log(precio);
}
hola();

//arreglos y objetos
var liliArreglo = ["lili", 28, 1.54];
liliArreglo.push(123);
var lili = {
  name: "lili",
  age: 28,
};
lili.estatura = 355.5;
lili.age = 29;
function imprimirPersonaObj() {
  console.log(lili);
}
imprimirPersonaObj();

function imprimirPersonaArray() {
  console.log(liliArreglo);
}

imprimirPersonaArray();

//adios
