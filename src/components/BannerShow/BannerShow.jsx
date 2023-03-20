import React from "react";
import "./BannerShow.css";

function PrimaryShow() {
  return (
    <div className="primary-show">
      <img
        width="50%"
        src={require("../../assets/BannerShow/banner_logo.png")}
        alt=""
      />
      <p className="description">
        Follows Wednesday Addams' years as a student, when she attempts to
        master her emerging psychic ability, thwart a killing spree, and solve
        the mystery that embroiled her parents.
      </p>
      <div className="button-wrapper">
        <button className="play">Play</button>
        <button className="more-info">More Info</button>
      </div>
    </div>
  );
}

export default PrimaryShow;
