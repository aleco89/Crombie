//Recibir dos strings como parámetros y devolver el de más letras.
function longestString(s1, s2) {
  if (s1.length > s2.length) {
    return "La palabra más larga es: " + s1;
  } else {
    return "La palabra más larga es: " + s2;
  }
}

//Recibir un arreglo y un string, devolver el índice en que se encuentra la palabra. Si no la encuentra retornar -1
function exists({ a, s }) {
  if (a.includes(s)) {
    return "La palabra se encuentra en el índice: " + a.indexOf(s);
  } else {
    return -1;
  }
}

//Recibir como parámetro un objeto con los atributos firstName y lastName.Consologuear nombre completo.
function sayFullName(obj) {
  return "El nombre completo es: " + obj[0].firstName + " " + obj[0].lastName;
}

//EXPORT:
module.exports = { longestString, exists, sayFullName };
