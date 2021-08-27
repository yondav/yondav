import React, { useState } from 'react';
import { Modal, makeStyles, Backdrop } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import { AiOutlineClose } from 'react-icons/ai';
import AnimatedLogo from './Animated_Logo';
import './contact_modal.css';
import Contact from '../Contact';

const useStyles = makeStyles(() => ({
  modal: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
}));

const ContactModal = ({ open, handleClose }) => {
  const [mouse, setMouse] = useState(false);
  const classes = useStyles();

  const handleMouseMove = (e) => {
    let mouseX = e.clientX;
    let centerX = e.currentTarget.offsetWidth / 2;
    let currentXoffset = Math.abs(centerX - mouseX);

    setMouse(currentXoffset);
  };

  const handleMouseLeave = (e) => setMouse(false);

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
              <AnimatedLogo mouse={mouse} />
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
