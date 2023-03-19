import React from "react";
import "./ArrivalMenu.css";
import Notification from "../Arrival/Arrival";

function NotificationMenu({ newReleases }) {
  return (
    <ul className="notification-menu">
      <h1 className="title">New arrivals</h1>
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
