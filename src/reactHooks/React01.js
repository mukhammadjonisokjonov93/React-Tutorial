// --- useState --- //

import React, { useState } from "react";

const React01 = () => {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

export default React01;

// Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

// The React useState Hook allows us to track state in a function component.

// useState accepts an initial state and returns two values:
// * The current state.
// * A function that updates the state.
