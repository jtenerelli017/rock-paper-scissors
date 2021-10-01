import './App.css';
import Button from 'react-bootstrap/Button';

/*type UserAttack = "rock" | "paper" | "scissors";*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rock, Paper, Scissors!</h1>
        <h2 className="App-buttons">
          <Button variant='primary'>Rock!</Button>
          <Button variant='primary'>Paper!</Button>
          <Button variant='primary'>Scissors!</Button>
        </h2>
      </header>
    </div>
  );
}

export default App;
