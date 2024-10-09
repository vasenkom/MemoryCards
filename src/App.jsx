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

    useEffect(() => {
      fetch("https://meowfacts.herokuapp.com/")
        .then((response) => response.json())
        .then((data) => setCatFact(data.data[0]))
        .catch((error) => console.error("Error: ", error));
    }, []);

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
              PlayGame={PlayGame}
              RandomCatFact={RandomCatFactPic}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
