import React from "react";
// Libraries import here
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//  All Components here
import Header from "../Common/Header/Header";

// Components SCSS here
import "./ConnectComponent.scss";
import UserDetailComponent from "./components/userDetailComponent/UserDetailComponent";

// hardcoded data
const data = [
  {
    name: "Luna Lovegood",
    isActive: true,
    role: "External Surveyor",
    ID: 9876543
  },
  {
    name: "Moaning Myrtle",
    isActive: false,
    role: "Internal Surveyor",
    ID: 9876543
  },
  {
    name: "Neville Longbottom",
    isActive: true,
    role: "External Surveyor",
    ID: 9876543
  }
];

export default function ConnectComponent() {
  const renderUsersAvailable = (currData) => {
    if (!currData) return null;
    return currData.map((user, index) => (
      <UserDetailComponent key={index} user={user} />
    ));
  };

  return (
    <div className="connect-component">
      <Header>
        <h3>Connect</h3>
      </Header>
      <div className="search">
        <input
          type="text"
          placeholder="Type a name, Phone Number or Email address"
        />
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
      </div>

      <div className="dropdown-menu">
        <select required>
          <option value="" disabled selected hidden>
            Search By Role
          </option>
          <option value="0">Role 1</option>
          <option value="1">Role 2</option>
        </select>
      </div>
      <div className="scrollable-content">{renderUsersAvailable(data)}</div>
    </div>
  );
}
