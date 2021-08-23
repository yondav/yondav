import React, { useEffect, useContext, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import './App.css';
import Header from './Components/Header';
import Dev from './Components/Pages/Dev';
import Portraits from './Components/Pages/Portraits';
import About from './Components/Pages/About';
import Footer from './Components/Footer';

const App = () => {
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
    const navHeight = nav.getBoundingClientRect().height;
    const sticky = document.querySelector('header').offsetHeight - 100;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset >= sticky) {
        setSticky(true);
        nav.classList.add('sticky');
      } else {
        setSticky(false);
        nav.classList.remove('sticky');
      }
    });

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((link) =>
      link.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - navHeight;

        window.scrollTo({
          left: 0,
          top: position,
        });
      })
    );

    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, [setSticky]);

  // for scroll location
  useEffect(() => {
    let location = document.location.pathname;
    if (location !== '/') {
      const nav = document.querySelector('nav');
      const navHeight = nav.getBoundingClientRect().height;
      let element = document.getElementById(location.slice(1));
      let position = element.offsetTop - navHeight;

      window.scrollTo({
        left: 0,
        top: position,
      });
    }
  }, []);

  const updateMode = () => {
    darkMode
      ? theme.dispatch({ type: 'LIGHTMODE' })
      : theme.dispatch({ type: 'DARKMODE' });
  };

  return (
    <div className='App'>
      <Header updateMode={updateMode} />
      <main>
        <Dev />
        <Portraits />
        <About />
      </main>
      {isSticky && <Footer updateMode={updateMode} />}
    </div>
  );
};

export default App;
