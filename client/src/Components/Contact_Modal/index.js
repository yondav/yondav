import React, { useContext } from 'react';
import { Modal, makeStyles, Backdrop } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import { AiOutlineClose } from 'react-icons/ai';
import { ThemeContext } from '../../context/ThemeContext';
import AnimatedLogo from './Animated_Logo';
import * as All from '../Logos';
import './contact_modal.css';
import Contact from '../Contact';

const useStyles = makeStyles(() => ({
  modal: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  paper: { width: 200, height: 200 },
}));

const ContactModal = ({ open, handleClose }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const classes = useStyles();

  const handleMouseMove = (e) => {
    let mouseX = e.clientX;
    let centerX = e.currentTarget.offsetWidth / 2;
    let currentXoffset = Math.abs(centerX - mouseX);

    document.querySelector('.logo').style.letterSpacing = `${
      currentXoffset * 0.001
    }rem`;
    document.querySelector('.yon').style.color = 'var(--yellow)';
    document.querySelector('.dav').style.color = 'var(--blue)';
  };

  const handleMouseLeave = (e) => {
    document.querySelector('.logo').style = '';
    document.querySelector('.yon').style = '';
    document.querySelector('.dav').style = '';
  };

  return (
    <Modal
      className={classes.modal}
      closeAfterTransition
      BackdropProps={{
        timeout: 1000,
      }}
      BackdropComponent={Backdrop}
      open={open}
      onClose={handleClose}
      style={{ transformOrigin: '0 10 0' }}
      {...(open ? { timeout: 5000 } : {})}
    >
      <Fade
        in={open}
        style={{ transformOrigin: '0 10 0' }}
        {...(open ? { timeout: 500 } : { timeout: 500 })}
      >
        <div className='contact-modal'>
          <AiOutlineClose className='close' onClick={handleClose} />
          <Slide
            direction='up'
            in={open}
            style={{ transformOrigin: '0 10 0' }}
            {...(open ? { timeout: 400 } : {})}
            mountOnEnter
            unmountOnExit
          >
            <div
              className='about-container'
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <AnimatedLogo />
              <div className='bio'>
                <p>
                  I’m Yoni David - Full Stack Developer living in Queens, New
                  York. I have a serious passion for design and animations while
                  prioritizing intuitive and dynamic user experiences.
                </p>
                <p>
                  I have a background in a range industries from music as a
                  performer and audio engineer to real estate as a broker and
                  co-founder of a boutique Brooklyn based agency.
                </p>
                <p>
                  Motivated person and problem solver, independent employee and
                  enthusiastic collaborator. My time away from the web is spent
                  with my family, playing music or complaining about the New
                  York Mets. Interested in the entire development spectrum and
                  expanding my understanding of the technologies we use every
                  day.
                </p>
              </div>
              <div className='tech'>
                <fieldset className='icon-group'>
                  <legend>Technologies</legend>
                  {Object.values(All).map((logo, index) =>
                    React.createElement(logo, {
                      key: index,
                      width: '1.7rem',
                      height: '1.7rem',
                      color: false,
                      theme: darkMode,
                      primaryDark: '#343434',
                      primaryWhite: '#f4f4f4',
                      hover: 'colorize',
                      transition: 'ease-in',
                    })
                  )}
                </fieldset>
                <p>React Icon Library Coming Soon...</p>
              </div>
            </div>
          </Slide>
          <Slide
            direction='down'
            in={open}
            style={{ transformOrigin: '0 10 0' }}
            {...(open ? { timeout: 400 } : {})}
            mountOnEnter
            unmountOnExit
          >
            <div className='form-container'>
              <Contact handleClose={handleClose} />
            </div>
          </Slide>
        </div>
      </Fade>
    </Modal>
  );
};

export default ContactModal;
