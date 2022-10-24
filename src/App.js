import './App.css';
import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  // stopped at 33:33 on https://www.youtube.com/watch?v=b9eMGE7QtTk
  return (
    <div className="App">
      <button>-</button>
      <h1>{counter}</h1>
      <button>+</button>
    </div>
  );
}

export default App;
