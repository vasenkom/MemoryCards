import React from "react";
import Heart from "./assets/Heart.svg";
import "./css/App.css";
import "./css/index.css";
import { RulesExplained } from "./RulesExplained.jsx";

export function FAQ_MemoRise({ setContent, StartGame }) {
  return (
    <div className="rectangle">
      <p className="titleFAQ ">
        MemoRise is a mini project made by{" "}
        <span className="green">vasenkom</span>.
        <br />
        On this web page you can play a{" "}
        <span className="purple">memorisation game</span> or read a{" "}
        <span className="orange">random cat fact</span>.
      </p>
      <div className="columnsFAQ">
        <div className="columnFAQ">
          <button
            onClick={() =>
              setContent(
                <RulesExplained setContent={setContent} StartGame={StartGame} />
              )
            }
          >
            How to play a memo game
          </button>
          <button
            onClick={() => window.open("https://github.com/vasenkom", "_blank")}
          >
            Check <span className="green">vasenkom</span> GitHub
          </button>
          <button onClick={() => setContent(null)}>
            Get back to main screen
          </button>
        </div>
        <div className="column">
          <img src={Heart} alt="Heart" />
        </div>
      </div>
    </div>
  );
}
