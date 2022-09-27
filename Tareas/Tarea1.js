//Casos:
const personA={
    age:20,
    hasDocument:false
}
const personB={
    age:19,
    hasDocument:false
}
const personC={
    age:16,
    hasDocument:false
}
const personD={
    age:22,
    hasDocument:false
}
//Función
function canPass(person){
    if (person.age>=18 && person.age<=20 && person.hasDocument==true){
       return "pudiste pasar con tu documento";  
    }else if(person.age>20){
        return "pudiste pasar";
    }else{
        return "no pudiste pasar";
    }
}
//Resultados
console.log(canPass(personA));
console.log(canPass(personB));
console.log(canPass(personC));
console.log(canPass(personD));