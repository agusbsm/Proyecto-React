import { useState } from "react";
import Counter from "./Counter";

const itemCounterContainer = () => {
  const [counter, setCounter] = useState(1);

  return <Counter counter={counter} setCounter={setCounter} />;
};

export default itemCounterContainer;
