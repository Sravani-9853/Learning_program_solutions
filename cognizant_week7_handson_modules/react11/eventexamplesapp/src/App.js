import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    sayHello();
    incrementCount();
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const sayHello = () => {
    alert('Hello! You clicked Increase button.');
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleSynthetic = (event) => {
    alert("I was clicked");
    console.log("Synthetic event object:", event);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Event Handling Examples</h1>

      <h2>Counter: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrease}>Increase</button>

      <br /><br />
      <button onClick={() => sayWelcome('Welcome!')}>Say Welcome</button>

      <br /><br />
      <button onClick={handleSynthetic}>Synthetic Event Button</button>

      <br /><br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;