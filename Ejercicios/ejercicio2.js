//ejercicio A
const notas = [5, 6, 10, 8, 3, 9];
let notaMenor = notas[0];

for (i = 0; i < notas.length; i++) {
  if (notas[i] < notaMenor) {
    notaMenor = notas[i];
  }
}
console.log("La nota menor es: " + notaMenor);

//ejercicio B

const alumnos = [
  { alumno: "Ana", nota: 8 },
  { alumno:"Martín", nota:10 },
  { alumno:"Clara", nota:10 },
  { alumno: "Pedro", nota: 7 },
  { alumno: "Maria", nota: 3 },
];

let alumnoMayorNota = [{ alumno: "nombre", nota: 0 }];
for (i = 0; i < alumnos.length; i++) {
  if (alumnos[i].nota > alumnoMayorNota[0].nota){   	
    alumnoMayorNota[0]=alumnos[i];     
  }else if ((alumnos[i].nota)== (alumnoMayorNota[0].nota)) {
		alumnoMayorNota.push(alumnos[i]);  
  }
}
console.log("El o los alumnos con mejor nota son:")
console.log(alumnoMayorNota);


//ejercicio C

const arrayNumeros = [5, 6, 22, 9, 13, 8, 3, 10, 2, 7];

for (i=0;i<arrayNumeros.length;i++){
  if(arrayNumeros[i]<arrayNumeros[i-1]){
    let aux=arrayNumeros[i];
    arrayNumeros[i]=arrayNumeros[i-1];
    arrayNumeros[i-1]=aux
    i=0;
  }
}
console.log("Secuencia ordenada:")
console.log(arrayNumeros)

//ejercicio D
const arrayCaracteres= ["C", "r", "o", "N", "o", "P", "i", "o", "S"]
let mayusculas=[]

for (i=0;i<arrayCaracteres.length;i++){
  if (arrayCaracteres[i]<"["){
    mayusculas.push(arrayCaracteres[i]);
  }
}

console.log(mayusculas)
