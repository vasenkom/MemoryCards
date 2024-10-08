// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  // State to track the current content of the rectangle
  const [content, setContent] = useState(null);

  // Functions to handle button clicks
  const showMemoRiseInfo = () => {
    setContent(
      <div>
        <h2>About MemoRise</h2>
        <p>
          MemoRise is a fun and engaging way to improve your memorization
          skills. With various exercises and games, you can enhance your memory
          retention.
        </p>
      </div>
    );
  };

  const showMemoryGame = () => {
    setContent(
      <div>
        <h2>Memory Game</h2>
        <p>
          Welcome to the Memory Game! Try to match pairs of cards by remembering
          their positions.
        </p>
        {/* You can include game logic or components here */}
      </div>
    );
  };

  const showRandomCatFact = async () => {
    const response = await fetch("https://meowfacts.herokuapp.com/");
    const data = await response.json();
    setContent(
      <div>
        <h2>Random Cat Fact</h2>
        <p>{data.data[0]}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Welcome to MemoRise</h1>
      <p>This content does not change when you click the buttons below.</p>

      {/* Rectangle content */}
      <div className="rectangle">
        {content ? content : <p>Click a button to see more content.</p>}
      </div>

      {/* Buttons only shown when there's no content */}
      {!content && (
        <div className="buttons">
          <button onClick={showMemoRiseInfo}>Know more about MemoRise</button>
          <button onClick={showMemoryGame}>Play memorisation game</button>
          <button onClick={showRandomCatFact}>Get a random cat fact</button>
        </div>
      )}
    </div>
  );
}

export default App;
