import './App.css';

import React, { useState } from 'react';

function App() {
 
  const [count, setCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState(false);

  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">
        This is Simple Click Counter which is currently&nbsp;
        <span data-test="count">{ count }</span>
        </h1>

       <div data-test="showErrors" className={`errorMsg ${errorMsg ? '' : 'hidden'}`}>
         Oops! This counter cannot drop below 
       </div>
       
      <button 
      data-test="increment-button"
      onClick={() => {
        setCount(count + 1) && setErrorMsg(false)
      }
    }
      >
        Increment Counter
      </button>
      <br/>
      <br/>
      <button 
      data-test="decrement-button"
      onClick={() => {
        (count === 0) ? setCount(0) : setCount(count - 1) && setErrorMsg(errorMsg)}
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
      <br/>
      <br/>
      <button 
      data-test="decrement-button-3"
      onClick={() => {
        if (count > 2) {
          setCount(count - 1)
        } else {
          setErrorMsg(true);
        }
        } 
      }
      >
        Decrement Counter 3
      </button>
    </div>
  );
}

export default App;
