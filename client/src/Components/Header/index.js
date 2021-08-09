import React from 'react';
import Nav from '../Nav';
import Icons from './Icons';
import Yoni from './Yoni';
import './header.css';

const Header = ({ updateMode }) => {
  return (
    <header>
      <Nav />
      <Icons updateMode={updateMode} />
      <Yoni />
    </header>
  );
};

export default Header;
