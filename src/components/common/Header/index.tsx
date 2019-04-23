import * as React from 'react';
import './Header.css';
import { IoMdPerson, IoMdLocate } from "react-icons/io";

interface HeaderProps {
  user: string,
  city: string,
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const { user, city } = props;

  return (
    <div className="header">
      <span className="user-details">
        Current location: <IoMdLocate />{city}
      </span>
      <span>Find Your Match</span>
      <span className="user-details">
        {/* <IoMdLocate />{city} */}
        <IoMdPerson />Welcome {user}
      </span>
      {/* <span className="locate-icon"><IoMdLocate />{city}</span>
      <span className="user-icon"><IoMdPerson />Welcome {user}</span> */}
    </div>
  );
};

export default Header;