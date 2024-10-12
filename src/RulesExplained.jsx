import React, { useEffect, useState } from "react";
import "./css/App.css";
import "./css/index.css";

export function RulesExplained({ setContent, StartGame }) {
  return (
    <div className="rectangle" style={{ textAlign: "center" }}>
      <p className="titleRules green"> Here are the rules</p>
      <p
        style={{ fontSize: "19px", paddingLeft: "25px", paddingRight: "25px" }}
      >
        In this game game you earn points by clicking on images, but each image
        can <span className="orange">only be clicked once</span>. If you click
        on the same image more than once, you do{" "}
        <span className="purple">not</span> earn any additional points.
      </p>
      <div className="columnRules">
        <button onClick={() => setContent(<StartGame />)}>Let`s play</button>
        <button onClick={() => setContent(null)}>
          Get back to main screen
        </button>
      </div>
    </div>
  );
}
