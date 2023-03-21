import React from "react";
import "./ArrivalMenu.css";
import Arrival from "../Arrival/Arrival";

function ArrivalMenu({ newReleases }) {
  return (
    <ul className="notification-menu">
      <h1 className="title">New arrivals</h1>
      {newReleases.map(
        (newRelease) =>
          newRelease.backdrop_path != null && (
            <Arrival key={newRelease.id} show={newRelease} />
          )
      )}
    </ul>
  );
}

export default ArrivalMenu;
