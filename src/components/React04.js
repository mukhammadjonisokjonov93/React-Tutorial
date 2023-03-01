// --- React Events --- //

// React events are written in camelCase syntax:
// onClick instead of onclick.

// React event handlers are written inside curly braces:
// onClick={shoot}  instead of onClick="shoot()".

import React from 'react';

// Put the shoot function inside the Football component:
function Football() {
    const shoot = () => {
      alert("Great Shot!");
    }
  
    return (
      <button onClick={shoot}>Take the shot!</button>
    );
  }

export default Football;
