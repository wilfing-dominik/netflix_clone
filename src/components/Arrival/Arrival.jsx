import React from "react";
import { imageBaseUrl } from "../../utils/requests";

function Arrival({ show }) {
  //Formats the first air date of the show
  let date = show.first_air_date.split("-");
  const releaseDate = {
    year: date[0],
    month: date[1],
    day: date[2],
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

export default Arrival;
