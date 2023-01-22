import React from "react";
import "../styles/PrimaryShow.css";

function PrimaryShow() {
  return (
    <div className="primary-show">
      <img width="50%" src={require("../assets/main_logo.png")} alt="" />
      <h1>Watch Season 1 Now</h1>
      <div className="button-wrapper">
        <button className="play">Play</button>
        <button className="more-info">More Info</button>
      </div>
    </div>
  );
}

export default PrimaryShow;
