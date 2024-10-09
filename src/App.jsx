// App.js
import React, { useEffect, useState } from "react";
import { Header } from "./Header.jsx";
import { HomeRectangle } from "./HomeRectangle.jsx";
import "./App.css";

function App() {
  // State to track the current content of the rectangle
  const [content, setContent] = useState(null);

  function FAQ_MemoRise() {
    return (
      <div>
        <p>
          MemoRise is a mini project made by{" "}
          <span className="green">vasenkom</span>.
        </p>
        <br />
        <p>
          On this web page you can play a{" "}
          <span className="purple">memorisation game</span> or read a{" "}
          <span className="orange">random cat fact</span>.
        </p>
        <br />
        <ul className="listOfOptions">
          <li>How to play a memo game</li>
          <li>
            Check{" "}
            <a className="green" href="https://www.example.com">
              vasenkom
            </a>{" "}
            github
          </li>
          <button onClick={() => setContent(null)}>
            Get back to main screen
          </button>
        </ul>
      </div>
    );
  }

  function RulesExplained() {
    return (
      <div>
        <p>Here are the rules</p>
        <div>
          <div></div>
          <div>
            In this game game you earn points by clicking on images, but each
            image can only be clicked once. If you click on the same image more
            than once, you do not earn any additional points.
          </div>
        </div>
        <button onClick={() => setContent(<PlayGame />)}>Let`s play</button>
        <button onClick={() => setContent(null)}>
          Get back to main screen
        </button>
      </div>
    );
  }

  function PlayGame() {
    return (
      <div>
        <p>In process</p>
      </div>
    );
  }

  function RandomCatFactPic() {
    let [catFact, setCatFact] = useState("");
    let [catPic, setCatPic] = useState("");

    // Random cat fact fetching
    useEffect(() => {
      fetch("https://meowfacts.herokuapp.com/")
        .then((response) => response.json())
        .then((data) => setCatFact(data.data[0]))
        .catch((error) => console.error("Error: ", error));
    }, []);

    // Random cat picture fetching
    useEffect(() => {
      fetch("https://cataas.com/cat")
        .then((image) => setCatPic(image.url))
        .catch((error) => console.error("Error: ", error));
    }, []);

    return (
      <div>
        <div>
          <img src={catPic} alt="A cute cat" />
        </div>
        <div>
          <p>{catFact}</p>
          <button onClick={() => setContent(null)}>
            Get back to main screen
          </button>
        </div>
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
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
