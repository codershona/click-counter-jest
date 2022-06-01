import './App.css';

import React, { useState } from 'react';

function App() {
 
  const [count, setCount] = useState(0);

  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">
        This is Simple Click Counter which is currently&nbsp;
        <span data-test="count">{ count }</span>
        </h1>
      <button 
      data-test="increment-button"
      onClick={() => setCount(count + 1)}
      >
        Increment Counter
      </button>
      <br/>
      <br/>
      <button 
      data-test="decrement-button"
      onClick={() => {
        (count === 0) ? setCount(0) : setCount(count - 1)}
      }
      >
        Decrement Counter
      </button>
      <br/>
      <br/>
      <button 
      data-test="decrement-button-2"
      onClick={() => {
        (count === 1) ? setCount(1) : setCount(count - 1)}
      }
      >
        Decrement Counter 2
      </button>
    </div>
  );
}

export default App;
