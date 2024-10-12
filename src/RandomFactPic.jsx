import React, { useEffect, useState } from "react";
import "./css/App.css";
import "./css/index.css";

export function RandomCatFactPic({ setContent }) {
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
    <div className="rectangle">
      <div className="columnsCat">
        <div className="column">
          <img className="catImg" src={catPic} alt="A cute cat" />
        </div>
        <div className="column">
          <p className="titleCatFact">Here is your random cat fact:</p>
          <p className="catFact">"{catFact}"</p>
          <button onClick={() => setContent(null)}>
            Get back to main screen
          </button>
        </div>
      </div>
    </div>
  );
}
