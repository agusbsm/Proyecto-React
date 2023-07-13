import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  return <Counter counter={counter} stock={stock} setCounter={setCounter} />;
};

export default CounterContainer;
