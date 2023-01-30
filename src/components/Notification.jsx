import React from "react";
import { imageBaseUrl } from "../utils/requests";

function Notification({ show }) {
  const releaseDate = {
    year:
      show.first_air_date[0] +
      show.first_air_date[1] +
      show.first_air_date[2] +
      show.first_air_date[3],
    month: show.first_air_date[5] + show.first_air_date[6],
    day: show.first_air_date[8] + show.first_air_date[9],
  };

  return (
    <li>
      <a href="/">
        <img
          className="notification-image"
          src={imageBaseUrl + show.backdrop_path}
          alt="missing"
        />
        <div>
          <p>{show.name}</p>
          <p className="date">
            {releaseDate.month}/{releaseDate.day}
          </p>
        </div>
      </a>
    </li>
  );
}

export default Notification;
