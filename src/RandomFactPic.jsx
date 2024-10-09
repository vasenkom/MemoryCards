import React, { useEffect, useState } from "react";

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
