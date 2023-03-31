import React, { useEffect, useState } from "react";
import "./ArrivalMenu.css";
import Arrival from "../Arrival/Arrival";
import { fetchData, requests } from "../../utils/requests";

function ArrivalMenu() {
  const [arrivals, setArrivals] = useState();
  const [loading, setLoading] = useState(true);

  // this isn't good here, on every hower it makes requests
  useEffect(() => {
    fetchData(requests.arrivals).then((response) => {
      setArrivals(response[0].data.results);
      setLoading(false);
    });
  }, []);

  if (!loading) {
    return (
      <ul className="notification-menu">
        <h1 className="title">New arrivals</h1>
        {arrivals.map(
          (newRelease) =>
            newRelease.backdrop_path != null && (
              <Arrival key={newRelease.id} show={newRelease} />
            )
        )}
      </ul>
    );
  }
}

export default ArrivalMenu;
