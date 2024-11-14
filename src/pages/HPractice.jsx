import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const increaseCounter = () => {
    setCount((c) => c + 1);
  };
  return { increaseCounter, count };
};
const HPractice = () => {
  const { increaseCounter, count } = useCounter();
  return (
    <div>
      {count}
      <button onClick={increaseCounter}>increase</button>
    </div>
  );
};

export default HPractice;
