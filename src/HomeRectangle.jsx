import React from "react";
import Star from "./assets/Star1.svg";

export function HomeRectangle({
  setContent,
  FAQ_MemoRise,
  PlayGame,
  RandomCatFact,
}) {
  return (
    <div className="rectangle">
      <p>Hi! Welcome to MemoRise!</p>
      <div>
        <div className="column">
          <img src={Star} alt="StarIcon" />
        </div>
        <div className="column">
          <p>Would you like to:</p>
          <button onClick={() => setContent(<FAQ_MemoRise />)}>
            1. Know more about <span className="blue">MemoRise</span>
          </button>
          <button onClick={() => setContent(<PlayGame />)}>
            2. Play <span className="purple">memorisation game</span>
          </button>
          <button onClick={() => setContent(<RandomCatFact />)}>
            3. Get a <span className="orange">random cat fact</span>
          </button>
        </div>
      </div>
    </div>
  );
}
