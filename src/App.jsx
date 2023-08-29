import "./App.css";
import "./style.css";
import React, { useState } from "react";


function App() {
  const [enteredNumber, setEnteredNumber] = useState(0);

  const changeNumber = () => {
    setEnteredNumber(enteredNumber + 1);
  };
  return (
    <div className="App">
      <div>
        <p id="counter">{enteredNumber}</p>
        <button onClick={changeNumber}>Increment</button>
      </div>
    </div>
  );
}

export default App;
