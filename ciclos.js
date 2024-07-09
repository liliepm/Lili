var nombrePersonas = ["Lili", "Jona", "Jenny", "Ana", "Paco"];
console.log("ciclos");
var i;
var size = nombrePersonas.length;
for (i = 0; i < size; i++) {
  if (nombrePersonas[i] == "Jenny") {
    console.log("Nombre encontrado");
    break;
  } else {
    console.log(nombrePersonas[i]);
  }
}

var objeto = {
  nombre: "Lili",
  edad: 28,
  apellido: "Padilla",
};

var auxiliar;
for (auxiliar in objeto) {
  //console.log(auxiliar); //PROPIEDADES
  console.log(objeto[auxiliar]); //VALORES
}
console.log(objeto.nombre);
