import React from "react";
import "../styles/NotificationMenu.css";
import Notification from "./Notification";
// import axios from "../utils/requests";
// import { useFetchData } from "../utils/customHooks";

function NotificationMenu({ newReleases }) {
  return (
    <ul className="notification-menu">
      <h1>New arrivals</h1>
      {newReleases.map(
        (newRelease) =>
          newRelease.backdrop_path != null && (
            <Notification key={newRelease.id} show={newRelease} />
          )
      )}
    </ul>
  );
}

export default NotificationMenu;
