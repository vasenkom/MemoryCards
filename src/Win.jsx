import React from "react";
import StarPurple from "./assets/StarPurple.svg";

export function Win({ setContent }) {
  return (
    <div className="rectangle" style={{ backgroundColor: "#f7d2b7" }}>
      <p className="titleRectangle">Congratulations!</p>
      <div className="columns">
        <div className="column">
          <img src={StarPurple} alt="StarPurple" />
        </div>
        <div className="column">
          <p>YOU WON!!!</p>
          <div className="buttonsDIV">
            <button onClick={() => setContent(null)}>
              Get back to main screen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
