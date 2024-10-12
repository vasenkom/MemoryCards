import React from "react";
import Star from "./assets/Star1.svg";

export function HomeRectangle({
  setContent,
  FAQ_MemoRise,
  RulesExplained,
  RandomCatFact,
  StartGame,
}) {
  return (
    <div className="rectangle" style={{ backgroundColor: "#f7d2b7" }}>
      <p className="titleRectangle">
        Hi! Welcome to <span className="blue"> MemoRise</span>!
      </p>
      <div className="columns">
        <div className="column">
          <img src={Star} alt="StarIcon" />
        </div>
        <div className="column">
          <p>Would you like to:</p>
          <div className="buttonsDIV">
            <button
              onClick={() =>
                setContent(
                  <FAQ_MemoRise
                    RulesExplained={RulesExplained}
                    setContent={setContent}
                    StartGame={StartGame}
                  />
                )
              }
            >
              1. Know more about <span className="blue">MemoRise</span>
            </button>
            <button
              onClick={() =>
                setContent(
                  <RulesExplained
                    setContent={setContent}
                    StartGame={StartGame}
                  />
                )
              }
            >
              2. Play <span className="purple">memorisation game</span>
            </button>
            <button
              onClick={() =>
                setContent(<RandomCatFact setContent={setContent} />)
              }
            >
              3. Get a <span className="orange">random cat fact</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
