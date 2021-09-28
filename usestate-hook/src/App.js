import React, { useState } from 'react';
import './App.css';

// ? hooks can only be used in function and cannot be used in class component

/* function App() {
  return (
    <div>hey</div>
  );
}
 */
// ? hooks can also be used using arrow function such as
const App = () => {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);
  return (
    <div>
      <button onClick={() => {
        setCount(c => c + 1)
        setCount2(c => c + 1)
      }}>+</button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
    </div>
  );
};


export default App;
