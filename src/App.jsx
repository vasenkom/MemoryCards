// App.js
import React, { useEffect, useState } from "react";
import { Header } from "./Header.jsx";
import { HomeRectangle } from "./HomeRectangle.jsx";
import { RandomCatFactPic } from "./RandomFactPic.jsx";
import { RulesExplained } from "./RulesExplained.jsx";
import { FAQ_MemoRise } from "./MemoRiseFAQ.jsx";
import "./App.css";

function App() {
  // State to track the current content of the rectangle
  const [content, setContent] = useState(null);

  function PlayGame() {
    return (
      <div>
        <p>In process</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />

      <div className="main">
        {/* Here will be some pics */}

        <div className="rectangle">
          {content ? (
            content
          ) : (
            <HomeRectangle
              setContent={setContent}
              FAQ_MemoRise={FAQ_MemoRise}
              RulesExplained={RulesExplained}
              RandomCatFact={RandomCatFactPic}
              PlayGame={PlayGame}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
