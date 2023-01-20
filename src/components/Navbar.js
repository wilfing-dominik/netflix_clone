import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import getWindowDimensions from "../utils/resizeHook";

function Navbar() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isMouseOnProfileIcon, setIsMouseOnProfileIcon] = useState(false);
  const [isSearchbarFocused, setIsSearchbarFocused] = useState(false);
  const [minimizeNavbar, setIsWindowTooSmall] = useState(false);
  const { height, width } = getWindowDimensions();

  const handleNavbarActive = () => {
    if (window.scrollY >= 1) {
      setIsNavbarActive(true);
    } else {
      setIsNavbarActive(false);
    }
  };

  const handleMouseOnProfileIcon = () => {
    setIsMouseOnProfileIcon(true);
  };

  const handleMouseOutProfileIcon = () => {
    setIsMouseOnProfileIcon(false);
  };

  const handleSearchClick = () => {
    setIsSearchbarFocused(true);
  };

  const handleSearchLoseFocus = () => {
    setIsSearchbarFocused(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarActive);

    return () => {
      window.removeEventListener("scroll", handleNavbarActive);
    };
  }, []);

  useEffect(() => {
    if (width <= 930) {
      setIsWindowTooSmall(true);
    } else {
      setIsWindowTooSmall(false);
    }
  }, [width]);

  return (
    <nav
      className={isNavbarActive ? "navbar-wrapper active" : "navbar-wrapper"}
    >
      <div className="navbar-left-icon-group">
        <label className="logo">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              viewBox="-153.6 -90.8 1331.2 415.113"
            >
              <path
                fill="#d81f26"
                d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z"
              />
            </svg>
          </a>
        </label>
        {!minimizeNavbar && (
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">TV Shows</a>
            </li>
            <li>
              <a href="/">Movies</a>
            </li>
            <li>
              <a href="/">New & Popular</a>
            </li>
            <li>
              <a href="/">My List</a>
            </li>
            <li>
              <a href="/">Browse by languages</a>
            </li>
          </ul>
        )}
        {minimizeNavbar && <a className="browse-link">Browse</a>}
      </div>

      <div className="navbar-right-icon-group">
        {isSearchbarFocused && (
          <span>
            <input
              autoFocus
              onBlur={handleSearchLoseFocus}
              className="search-input"
              type="text"
              name="search"
              placeholder="Titles, people, genres"
            />
          </span>
        )}

        {!isSearchbarFocused && (
          <span>
            <svg
              className="search-icon"
              onClick={handleSearchClick}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM14.3623 15.8506C12.9006 17.7649 10.5945 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 12.1076 15.7749 13.1626 15.368 14.1218L24.0022 19.1352L22.9979 20.8648L14.3623 15.8506Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        )}

        <span>
          <svg
            className="notification-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13 4.07092C16.3922 4.55624 18.9998 7.4736 18.9998 11V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11C4.99978 7.47345 7.6076 4.55599 11 4.07086V2L13 2V4.07092ZM16.9998 15.1287V11C16.9998 8.23858 14.7612 6 11.9998 6C9.23836 6 6.99978 8.23858 6.99978 11V15.1287C8.64041 15.0437 10.3089 15 11.9998 15C13.6907 15 15.3591 15.0437 16.9998 15.1287ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>

        <span
          onMouseOver={handleMouseOnProfileIcon}
          onMouseOut={handleMouseOutProfileIcon}
        >
          <img
            className="profile-icon"
            height="35"
            width="35"
            src="http://occ-0-6201-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4"
            alt=""
          ></img>
          <span
            className={
              isMouseOnProfileIcon ? "caret isProfileIconActive" : "caret"
            }
          ></span>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
