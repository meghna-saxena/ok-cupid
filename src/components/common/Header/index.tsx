import * as React from 'react';
import './Header.css';

interface HeaderProps {
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return <p className="header-title">Find Your Match</p> ;
};

export default Header;