import React, { useEffect, useContext, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import './App.css';
import Nav from './Components/Nav';

function App() {
  const [isSticky, setSticky] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // for dark mode
  useEffect(() => {
    const logos = document.querySelectorAll('.header-logo');

    if (darkMode) {
      document.querySelector('body').classList = 'dark';
      logos.forEach((logo) =>
        logo.classList.contains('to-black')
          ? logo.classList.replace('to-black', 'to-white')
          : logo.classList.add('to-white')
      );
    } else {
      document.querySelector('body').classList = '';
      logos.forEach((logo) =>
        logo.classList.contains('to-white')
          ? logo.classList.replace('to-white', 'to-black')
          : logo.classList.add('to-black')
      );
    }
  }, [darkMode]);

  // for sticky nav
  useEffect(() => {
    const nav = document.querySelector('nav');
    const sticky = document.querySelector('nav').offsetHeight;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset >= sticky) {
        setSticky(true);
        nav.classList.add('sticky');
      } else {
        setSticky(false);
        nav.classList.remove('sticky');
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, [setSticky]);

  return (
    <div className='App'>
      <Nav />
    </div>
  );
}

export default App;
