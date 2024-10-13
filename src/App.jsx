// App.js
import React, { useEffect, useState } from "react";
import { Header } from "./Header.jsx";
import { HomeRectangle } from "./HomeRectangle.jsx";
import { RandomCatFactPic } from "./RandomFactPic.jsx";
import { RulesExplained } from "./RulesExplained.jsx";
import { FAQ_MemoRise } from "./MemoRiseFAQ.jsx";
import { LoadingScreen } from "./LoadingScreen.jsx";
import "./css/App.css";
import "./css/index.css";

function App() {
  // State to track the current content of the rectangle
  const [content, setContent] = useState(null); // to display right component in .rectangle
  const [gameMode, setGameMode] = useState(false);
  const [memoryCard, setMemoryCards] = useState([]);
  const [loading, setLoading] = useState(false); // loading icon to wait until all images are loaded

  useEffect(() => {
    if (gameMode) {
      setLoading(true);
      const objectIds = [15051, 51660, 436163, 813095, 437423, 436947]; // IDs of 5 paintings with cats
      const fetchData = async () => {
        try {
          const fetchedCards = await Promise.all(
            objectIds.map((id) =>
              fetch(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
              ).then((res) => res.json())
            )
          );
          setMemoryCards(fetchedCards);
          setLoading(false);
        } catch (error) {
          console.error("Problem fetching data", error);
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [gameMode]);

  const StartGame = () => {
    setGameMode(true); // Start game by setting gameMode to true
  };

  return (
    <div className="App">
      <Header />

      <div className="main">
        {/* Display loading screen if loading */}
        {loading ? (
          <LoadingScreen />
        ) : gameMode ? (
          <div className="cards">
            {memoryCard.map((card, index) => (
              <div className="card" key={index}>
                <img
                  className="cardImg"
                  src={card.primaryImage}
                  alt={card.title}
                />
                <p className="cardDescription">
                  {card.title}, {card.artistDisplayName}
                </p>
              </div>
            ))}
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
  );
}

export default App;
