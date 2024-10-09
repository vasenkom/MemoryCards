import React, { useEffect, useState } from "react";

export function RulesExplained({ setContent, PlayGame }) {
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
      <button onClick={() => setContent(null)}>Get back to main screen</button>
    </div>
  );
}
