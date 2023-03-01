// --- React Props --- //
// React Props are like function arguments in JavaScript 

import React from 'react';

// Props are also how you pass data from one component to another
// Send the "brand" property from the Garage component to the Car component
function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
  
function Garage() {
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
      </>
    );
  }

export default Garage;


// // Create a variable named carName and send it to the Car component
// function Car(props) {
//     return <h2>I am a { props.brand }!</h2>;
//   }
  
// function Garage() {
//     const carName = "Ford";
//     return (
//       <>
//         <h1>Who lives in my garage?</h1>
//         <Car brand={ carName } />
//       </>
//     );
//   }

// export default Garage;


// // Create an object named carInfo and send it to the Car component
// function Car(props) {
//     return <h2>I am a { props.brand.model }!</h2>;
//   }
  
// function Garage() {
//     const carInfo = { name: "Ford", model: "Mustang" };
//     return (
//       <>
//         <h1>Who lives in my garage?</h1>
//         <Car brand={ carInfo } />
//       </>
//     );
//   }

// export default Garage;