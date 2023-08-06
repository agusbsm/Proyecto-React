import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({
  stock,
  agregarAlCarrito,
  cantidadEnCarrito = 1,
}) => {
  const [counter, setCounter] = useState(cantidadEnCarrito);

  return (
    <Counter
      counter={counter}
      stock={stock}
      setCounter={setCounter}
      agregarAlCarrito={agregarAlCarrito}
    />
  );
};

export default CounterContainer;
