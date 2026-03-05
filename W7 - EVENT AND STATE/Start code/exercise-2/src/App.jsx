import React from "react";
import { useState } from "react";


function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [string, stringVal] = useState("");


  /* You will need a function to handle a key pressed on the first input and update the state*/
  function handleKeyPress(event){
    stringVal(event.target.value.toUpperCase());
  }

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input onKeyUp={handleKeyPress}/>

      <p>
        <label>Here is the text in upper case</label>
        

        {/* This input will need to display the text entered in lower case */}
        <input disabled value={string} />
      </p>
    </main>
  );
}

export default App;
