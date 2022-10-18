import React, { useState } from "react";
import "./App.css";
//la function app renderiza el html intercalado con typescript
function App() {
  /*invocar un hook (useState: es una variable, puede cambiar usando setvalue, designarle valor, etc.)
  el type va despues del setvalue*/
  const [value, setValue] = useState<number>(0);
  /*primera posicion del array es el nombre, con el cual traemos el valor; y la segunda, es la funcion q setea el valor.
  una manera de cambiar el valor es mediante funcion flecha q invoco mas abajo, la otra es con seetvalue en el html.*/

  const incrementarValor = () => {
    //recibe como parametro el último valor de value. Cada vez q invoco la función, react vuelve a pasar el codigo
    setValue((prev) => prev + 1);
  };
  const decrementarValor = () => {
    //recibe como parametro el último valor de value. Cada vez q invoco la función, react vuelve a pasar el codigo
    setValue((prev) => prev - 1);
  };
  return (
    <div className="App">
      <h1>Este es un contador especial...</h1>
      <h3>solo puede tomar valores de 0 y 10 (inclusive)</h3>

      <h1>{value}</h1>
      <div>
        {/* puedo agregar el condicional para mostrar los botones si cumplen cierta condicion usando una condicion ternaria */}
        {value > 0 ? (
          <button onClick={decrementarValor}>-1</button>
        ) : (
          <button disabled>-1</button>
        )}
        {/* con valor true/false*/}
        {value < 10 ? (
          <button onClick={incrementarValor}>+1</button>
        ) : (
          <button disabled>+1</button>
        )}
        {/* con valor true*/}
      </div>
    </div>
  );
  //sumar y restar, no puede pasar de 10 ni cero
  //para cambiar una sola propiedad del objeto o array del usestate, tengo q desestructurarlo
}

export default App;
