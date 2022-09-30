
let funciones = require("./helpers/funciones")

//Solución A
str1="escritorio"
str2="silla"
console.log(funciones.longestString(str1, str2));

//Solución B

arr=["Esto", "es", "un", "hola", "mundo"];
str="hola";
console.log(funciones.exists({ a: arr, s: str }));

//Solución C

let p = [{ firstName: "Ana", lastName: "Leconte" }];
console.log(funciones.sayFullName(p));