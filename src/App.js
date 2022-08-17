import { useState } from "react";
import "./App.css";
import TicTacToe from "./TicTacToe";
function App() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  return (
    <div className="App">
      <div className="playerinfo">
        <input
          type="text"
          value={player1}
          placeholder="Player 1 name"
          onChange={(e) => setPlayer1(e.target.value)}
        />
        <input
          type="text"
          value={player2}
          placeholder="Player 2 name"
          onChange={(e) => setPlayer2(e.target.value)}
        />
        <div className="playerinformation">
          {player1 && <span> {player1} is 'X' </span>}
        </div>
        <div className="playerinformation">
          {player2 && <span> {player2} is '0' </span>}
        </div>
      </div>
      <div className="game-container">
        <TicTacToe player1={player1} player2={player2} />
      </div>
    </div>
  );
}

export default App;
