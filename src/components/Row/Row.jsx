import React, { useState } from "react";
import ".//Row.css";
import { imageBaseUrl } from "../../utils/requests";

function Row({ title, data }) {
  const [shows] = useState(data);

  return (
    <div className="row">
      <h1 className="title">{title}</h1>
      <div className="row-posters">
        {shows.map((show) => (
          <span key={show.id}>
            {show.backdrop_path != null && (
              <div className="show">
                <p>{show.name ? show.name : show.title}</p>
                <img
                  className="row-poster"
                  src={imageBaseUrl + show.backdrop_path}
                  alt={show.name ? show.name : show.title}
                ></img>
              </div>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Row;
