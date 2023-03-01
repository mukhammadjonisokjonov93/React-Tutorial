import './App.css';
import React01 from './components/React01';
import React02 from './components/React02';
import React03 from './components/React03';
import React04 from './components/React04';
import React05 from './components/React05';
import React06 from './components/React06';
// import React07 from './components/React07';

function App() {
  return (
    <div className="App">
      <React01 />
      <React02 />
      <React03 />
      <React04 />
      <React05 isGoal={false} />
      <React06 isGoal={true} />
      {/* <React07 /> */}
    </div>
  );
}

export default App;
