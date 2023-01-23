import React from "react";

function Notification() {
  return (
    <li>
      <a href="/">
        <img
          className="notification-image"
          src="https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABYzX-Cw1EXdGP6v4e8fKfoqDwHwIGCIiLJD1-84WVjUNclInu6fYGEaNUE7xjk07YGfbfCpO7RXWpi5zn7xzLbNfTOBHoowK60iH0gfEICqnifpzFlM4EfyNUaKDz7l7-R53Wo3BcZ9cSqU.jpg?r=420"
          alt="notificaton image"
        />
        <p>Notification message</p>
      </a>
    </li>
  );
}

export default Notification;
