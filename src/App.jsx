// App.js
import React, { useEffect, useState } from "react";
import { Header } from "./Header.jsx";
import { HomeRectangle } from "./HomeRectangle.jsx";
import { RandomCatFactPic } from "./RandomFactPic.jsx";
import { RulesExplained } from "./RulesExplained.jsx";
import { FAQ_MemoRise } from "./MemoRiseFAQ.jsx";
import { LoadingScreen } from "./LoadingScreen.jsx";
import "./App.css";

function App() {
  // State to track the current content of the rectangle
  const [content, setContent] = useState(null); // to display right component in .rectangle
  const [gameMode, setGameMode] = useState(false);
  const [memoryCard, setMemoryCard] = useState([]);
  const [loading, setLoading] = useState(false); // loading icon to wait until all images are loaded

  useEffect(() => {
    if (gameMode) {
      fetch(
        "https://collectionapi.metmuseum.org/public/collection/v1/objects/45734"
      )
        .then(setLoading(true))
        .then((res) => res.json())
        .then((data) => {
          setContent(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Problem fetching data", error);
        });
    }
  }, [gameMode]);

  const StartGame = () => {
    setGameMode(true); // Start game by setting gameMode to true
  };

  return (
    <div className="App">
      <Header />

      <div className="main">
        <div className="rectangle">
          {/* Display loading screen if loading */}
          {loading ? (
            <LoadingScreen />
          ) : gameMode ? (
            <div>
              <img src={content.primaryImage} alt={content.title} />
              <p>
                {content.title}, {content.artistDisplayName}
              </p>
            </div>
          ) : content ? (
            content
          ) : (
            // If content is null, display the home page
            <HomeRectangle
              setContent={setContent}
              FAQ_MemoRise={FAQ_MemoRise}
              RulesExplained={RulesExplained}
              RandomCatFact={RandomCatFactPic}
              StartGame={StartGame}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
