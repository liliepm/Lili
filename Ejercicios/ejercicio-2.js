var objeto = {
  nombre: "Lili",
  calcular: function (_valor1, _valor2) {
    return _valor1 + _valor2;
  },
  saludar: function () {
    var mensaje = "Hola";
    console.log("mensaje desde la funcion");
  },
};

var objeto2 = {
  calcularResta: function (_valor1, _valor2) {
    return _valor1 - _valor2;
  },
};

const btn = document.getElementById("boton");
btn.addEventListener("click", function () {
  objeto.saludar();
  var calculo = objeto.calcular(2, 3);
  console.log(calculo);
  console.log(objeto.nombre);
});

const btn2 = document.getElementById("boton2");
btn2.addEventListener("click", function () {
  var calculo2 = objeto2.calcularResta(5, 2);
  console.log(calculo2);
});
