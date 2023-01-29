import React, { useState } from "react";
import "../styles/NotificationMenu.css";
import Notification from "./Notification";
import axios from "../utils/requests";
import { useFetchData } from "../utils/customHooks";

function NotificationMenu() {
  const [shows, setShows] = useState([]);

  useFetchData(axios.arrivals, setShows);

  return (
    <ul className="notification-menu">
      <h1>New arrivals</h1>
      {shows.map(
        (show) =>
          show.backdrop_path != null && (
            <Notification key={show.id} show={show} />
          )
      )}
    </ul>
  );
}

export default NotificationMenu;
