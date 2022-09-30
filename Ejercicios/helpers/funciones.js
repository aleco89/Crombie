//pasar dos strings como parametro y devolver el de más letras
function stringMasLargo(s1, s2) {
  if (s1.length > s2.length) {
    return s1;
  } else {
    return s2;
  }
}

console.log(stringMasLargo("escritorio", "silla"));

//recibir un rreglo y un string, devolver en que indice se encuentra la palabra. si no la encuentra retorna '1
function existe({ a, s }) {
  if (a.includes(s)) {
    return a.indexOf(s);
  } else {
    return -1;
  }
}

console.log(existe({ a: ["Esto", "es", "un", "hola", "mundo"], s: "hola" }));

//funcion sayFullName, recibe como param un objeto con los atributos firstName lastName y consologuea nombre completo
function sayFullName(obj) {
  return `${obj.firstName} ${obj.lastName}`;
}
let p = [{ firstName: "Ana", lastName: "Leconte" }];
console.log(sayFullName(p));

module.exports = { stringMasLargo, existe, sayFullName };
