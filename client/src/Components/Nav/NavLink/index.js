import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ link, hide, onClick }) => {
  return (
    <Link to={link} className={`${link} nav-link ${hide}`} onClick={onClick}>
      {link}
    </Link>
  );
};

export default NavLink;
