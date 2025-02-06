import React, { useState } from "react";
import { CounterProps } from "./types";
import { CounterWrapper, CounterTitle, CounterButtons, CounterButton } from "./styles";

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <CounterWrapper>
      <CounterTitle>Counter: {count}</CounterTitle>
      <CounterButtons>
        <CounterButton onClick={decrement}>-</CounterButton>
        <CounterButton onClick={increment}>+</CounterButton>
      </CounterButtons>
    </CounterWrapper>
  );
};

export default Counter;
