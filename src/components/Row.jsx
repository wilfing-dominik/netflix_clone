import React, { useState } from "react";
import "../styles/Row.css";
import { useFetchData } from "../utils/customHooks";

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, url }) {
  const [shows, setShows] = useState([]);

  useFetchData(url, setShows);

  return (
    <div className="row">
      <h1 className="title">{title}</h1>
      <div className="row-posters">
        {shows.map((show) => (
          <>
            {show.backdrop_path != null && (
              <>
                <img
                  key={show.id}
                  className="row-poster"
                  src={imageBaseUrl + show.backdrop_path}
                  alt={show.name ? show.name : show.title}
                ></img>
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default Row;
