import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Row.css";

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, url }) {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setShows(request.data.results);
    }
    fetchData();
  }, [url]);

  console.log(shows);

  return (
    <div className="row">
      <h1 className="title">{title}</h1>
      <div className="row-posters">
        {shows.map((show) => (
          <img
            key={show.id}
            className="row-poster"
            src={imageBaseUrl + show.backdrop_path}
            alt={show.name}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;
