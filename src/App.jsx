// App.js
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Header } from "./Header.jsx";
import Flower from "./assets/Flower.svg";
import RectangleYellow from "./assets/RectangleYellow.svg";
import FlowerGreen from "./assets/FlowerGreen.svg";
import SpinGreen from "./assets/SpinGreen.svg";
import HeartPink from "./assets/HeartPink.svg";
import { HomeRectangle } from "./HomeRectangle.jsx";
import { RandomCatFactPic } from "./RandomFactPic.jsx";
import { RulesExplained } from "./RulesExplained.jsx";
import { FAQ_MemoRise } from "./MemoRiseFAQ.jsx";
import { LoadingScreen } from "./LoadingScreen.jsx";
import { Win } from "./Win.jsx";
import "./css/App.css";
import "./css/index.css";

function App() {
  // State to track the current content of the rectangle
  const [content, setContent] = useState(null); // to display right component in .rectangle
  const [gameMode, setGameMode] = useState(false);
  const [memoryCard, setMemoryCards] = useState([]);
  const [loading, setLoading] = useState(false); // loading icon to wait until all images are loaded

  // // Draggble settings:
  // const Draggable = require("react-draggable");
  // const DraggableCore = Draggable.DraggableCore;

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
          console.error("Problem fetching data: ", error);
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [gameMode]);

  const StartGame = () => {
    setGameMode(true); // Start game by setting gameMode to true
  };

  const [scoreCount, setscoreCount] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  // Set score and best score
  function CountScore(index) {
    if (clickedCards.includes(index)) {
      console.log("You lost"); // debug
      if (scoreCount > bestScore) {
        setBestScore(scoreCount);
      }
      // Reset the score and clicked cards
      setscoreCount(0);
      setClickedCards([]);
      setContent(null); // Clear any existing content, if needed
    } else {
      const newScore = scoreCount + 1;
      setscoreCount(newScore);
      setClickedCards((prevCards) => [...prevCards, index]);
      console.log(newScore);

      // Check if the player has won
      if (newScore === 6) {
        console.log("Player has won!"); // debug

        const winComponent = <Win setContent={setContent} />;
        setContent(winComponent);
        setGameMode(false);
      }
    }

    randomiseFlexOrder();
  }

  const randomiseFlexOrder = () => {
    const cards = document.querySelectorAll(".card");
    [...cards].forEach((card, index, array) => {
      card.style.order = Math.floor(Math.random() * array.length + 1);
    });
  };

  return (
    <div className="App">
      <Header />
      <Draggable>
        <img src={Flower} className="flowerOrange drag" alt="Orange flower" />
      </Draggable>
      <Draggable>
        <img
          src={RectangleYellow}
          className="RectangleYellow drag"
          alt="Rectangle Yellow"
        />
      </Draggable>
      <Draggable>
        <img
          src={FlowerGreen}
          className="FlowerGreen drag"
          alt="Flower Green"
        />
      </Draggable>
      <Draggable>
        <img src={SpinGreen} className="SpinGreen drag" alt="Spin Green" />
      </Draggable>
      <Draggable>
        <img src={HeartPink} className="HeartPink drag" alt="Heart Pink" />
      </Draggable>
      <div className="main">
        {/* Display loading screen if loading */}
        {loading ? (
          <LoadingScreen />
        ) : gameMode ? (
          <>
            <div className="scoreDesk">
              <p className="green">Score: {scoreCount}</p>
              <p className="green">Best Score: {bestScore}</p>
            </div>
            <div className="cards">
              {memoryCard.map((card, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() => CountScore(index)}
                >
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
            <button
              className="orange buttonHome"
              onClick={() => {
                setGameMode(false); // Reset the game mode
                setContent(null);
              }}
            >
              Get back to main screen
            </button>
          </>
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
