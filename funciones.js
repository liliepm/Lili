console.log("Funciones");
var alto = 0;
var ancho = 0;
var area = 0;
function calcularArea() {
  alto = 100;
  ancho = 50;
  var area = alto * ancho;

  console.log("calcularArea", area);
  return area;
}

area = calcularArea();
console.log("area desde afuera", area);

//Segunda manera
var areaGlobal;
function calcularArea2() {
  alto = 100;
  ancho = 50;
  areaGlobal = alto * ancho;

  console.log("calcularArea", area);
}
calcularArea2();
console.log("Area Global", areaGlobal);

//Parametros
var alto = 100,
  ancho = 50;
function calcularAreaConParametros(_alto, _y) {
  var area = _alto * _y;

  console.log("Area con Parametros", area);
}
calcularAreaConParametros(alto, 2);
