import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
        <Jumbotron>{count}</Jumbotron>
      </header>
    </div>
  );
}

export default App;
