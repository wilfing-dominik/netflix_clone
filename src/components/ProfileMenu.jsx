import React from "react";
import "../styles/ProfileMenu.css";

//SVGS
import ManageProfiles from "../assets/profile_menu_icons/manage_profiles.svg";
import Account from "../assets/profile_menu_icons/account.svg";
import HelpCenter from "../assets/profile_menu_icons/help_center.svg";

function ProfileMenu() {
  return (
    <ul className="profile-menu">
      <li>
        <a href="/">
          <img src={ManageProfiles} alt="manage profiles" />
          Manage Profiles
        </a>
      </li>

      <li>
        <a href="/">
          {/* This SVG doesn't work when imported, for some reason */}
          <svg
            id="profile-transfer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 1C3.79086 1 2 2.79086 2 5V17C2 19.2091 3.79086 21 6 21H9.58579L8.29289 22.2929L9.70711 23.7071L12.7071 20.7071C13.0976 20.3166 13.0976 19.6834 12.7071 19.2929L9.70711 16.2929L8.29289 17.7071L9.58579 19H6C4.89543 19 4 18.1046 4 17V5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V17C20 18.1046 19.1046 19 18 19H15V21H18C20.2091 21 22 19.2091 22 17V5C22 2.79086 20.2091 1 18 1H6ZM7.5 10C8.32843 10 9 9.32843 9 8.5C9 7.67157 8.32843 7 7.5 7C6.67157 7 6 7.67157 6 8.5C6 9.32843 6.67157 10 7.5 10ZM18 8.5C18 9.32843 17.3284 10 16.5 10C15.6716 10 15 9.32843 15 8.5C15 7.67157 15.6716 7 16.5 7C17.3284 7 18 7.67157 18 8.5ZM16.402 12.1985C15.7973 12.6498 14.7579 13 13.5 13C12.2421 13 11.2027 12.6498 10.598 12.1985L9.40195 13.8015C10.4298 14.5684 11.9192 15 13.5 15C15.0808 15 16.5702 14.5684 17.598 13.8015L16.402 12.1985Z"
              fill="currentColor"
            ></path>
          </svg>
          Transfer profile
        </a>
      </li>

      <li>
        <a href="/">
          <img src={Account} alt="transfer profile" />
          Account
        </a>
      </li>

      <li>
        <a href="/">
          <img src={HelpCenter} alt="transfer profile" />
          Help Center
        </a>
      </li>
      <li className="signout">
        <a href="/">Sign out of Netflix</a>
      </li>
    </ul>
  );
}

export default ProfileMenu;
