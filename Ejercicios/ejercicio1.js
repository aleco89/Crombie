let soyYo = { nombre: "Ana", apellido: "Leconte" };
console.log("Me llamo " + soyYo.nombre + " " + soyYo.apellido);

let alumnos = ["Ana", "Eugenia", "Pedro", "Juan"];
console.log("Alumnos: " + alumnos);
console.log("El tercer alumno es " + alumnos[2]);

let edadesAlumnos = [25, 33, 20, 29];
let suma =
  edadesAlumnos[0] + edadesAlumnos[1] + edadesAlumnos[2] + edadesAlumnos[3];
console.log(
  "El promedio de edad de los alumnos es " + suma / edadesAlumnos.length
);
