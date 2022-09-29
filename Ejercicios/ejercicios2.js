//ejercicio 1
let notas = [5, 6, 10, 8, 3, 9];
notaMenor = notas[0];

for (i = 0; i < notas.length; i++) {
  if (notas[i] < notaMenor) {
    notaMenor = notas[i];
  }
}
console.log("La nota menor es: " + notaMenor);

//ejercicio 2
let alumnos = [
  { alumno: "Ana", nota: 8 },
  { alumno: "Pedro", nota: 7 },
  { alumno: "Maria", nota: 3 },
];
let alumnoMayorNota = [];
for (i = 0; i < alumnos.length; i++) {
  if (alumnos[i].nota > alumnoMayorNota.nota) {
    alumnoMayorNota[0] = alumnos[i];
  } //else{
  // if ();
  //}
}
console.log("El alumno con la mayor nota es: " + alumnoMayorNota);

//ejercicio 3
numeros = [5, 6, 22, 5, 13, 8, 3, 10, 2, 7];
