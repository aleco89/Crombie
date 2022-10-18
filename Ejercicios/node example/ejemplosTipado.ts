//Tipado variables primitivas
let variable1: number = 1;

//Tipado objetos

type PersonaType = {
  name: string;
  lastName: string;
  //si agrego ?, indico q el atributo puede no estar
  //childs?: PersonaType
  childs?: Array<PersonaType> | PersonaType | string | number; //puede devolver un array de personas, o una persona, o un string o un numero
};
type ProgramadorType = {
  lenguaje: string;
} & PersonaType; //le aclaro que hereda las propiedades de persona

let persona1: PersonaType = { name: "Ana", lastName: "Leconte" };

type Generico<T> = {
  propiedad: T;
};

let variableGenerica: Generico<string>;

//Tipado en funciones
function getNumber(): number {
  return 2;
}

//import {product} from "./vfdvdfvf"
