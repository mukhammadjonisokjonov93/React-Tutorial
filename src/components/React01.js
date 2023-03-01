// --- Function Component ---//

import React from 'react';

function Car() {
    return <h2>I am a Car!</h2>;
  }
  
function Garage() {
    return (
      <>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </>
    );
  }

export default Garage;

// When creating a React component, the component's name MUST start with an upper case letter.
// Components are like functions that return HTML elements.
// In older React code bases, you may find Class components primarily used.
// It is now suggested to use Function components along with Hooks.

// React's goal is in many ways to render HTML in a web page.
// React renders HTML to the web page by using a function called ReactDOM.render().

// The ReactDOM.render() function takes two arguments, HTML code and an HTML element.
// The purpose of the function is to display the specified HTML code inside the specified HTML element.

// But render where?
// There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.

