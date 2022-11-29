import React, { useState } from "react";

const Container = ({ children }) => <div>{children}</div>;

const AddOneButton = ({ setCounter }) => (
  <div>
    <button onClick={() => setCounter((v) => v + 1)}>Add One</button>
  </div>
);

const Counter = ({ counter }) => <div>Counter: {counter}</div>;

const CounterUseState = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Container>
        <AddOneButton setCounter={setCounter} />
      </Container>
      <Counter counter={counter} />
    </div>
  );
};

export default CounterUseState;
