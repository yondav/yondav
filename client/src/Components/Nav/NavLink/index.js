import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ link, hide, onClick }) => {
  useEffect(
    () =>
      document.location.pathname == `/${link}`
        ? document.querySelector(`.${link}`).focus()
        : '',
    [link]
  );
  return (
    <Link to={link} className={`${link} nav-link ${hide}`} onClick={onClick}>
      {link}
    </Link>
  );
};

export default NavLink;
