import React from "react";
import "../styles/NotificationMenu.css";
import Notification from "./Notification";

function NotificationMenu() {
  return (
    <ul className="notification-menu">
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </ul>
  );
}

export default NotificationMenu;
