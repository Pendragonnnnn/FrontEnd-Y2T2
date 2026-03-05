import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [numA , setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [sum, setSum] = useState(0);
  const [isNum, setBool] = useState(true);
 
  /* You will need some function to handle the key pressed and button events */
  function onA(event){
    setNumA(Number(event.target.value));
  }

  function onB(event){
    setNumB(Number(event.target.value));
  }

  function compute(){
    setSum(numA + numB);
    if(Number.isInteger(numA) && Number.isInteger(numB) ){
      setBool(true);
    }
    else {
      setBool(false);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A = </label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value = {(isNum == true) ? sum : "A and B must be a number"} className= {(isNum == true) ? "" : "error"} />
      <button onClick={compute} >Compute</button>
    </main>
  );
}

export default App;
