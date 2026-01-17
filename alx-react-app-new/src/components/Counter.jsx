import { useState } from 'react';


function Counter() {
  const [count, setCount] = useState(0);

  const Increment = () => setCount(count => count + 1);
  const Decrement = () => setCount(count => count - 1);
  const Reset = () => setCount(0);

  return (
    <div>
        <p>Current Count: {count}</p>
        <button onClick={Increment}>Increase</button>
        <button onClick={Decrement}>Decrease</button>
        <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Counter;