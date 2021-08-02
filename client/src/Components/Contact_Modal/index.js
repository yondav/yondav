import React from 'react';
import { Modal, makeStyles, Backdrop } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import { AiOutlineClose } from 'react-icons/ai';
import './contact_modal.css';

const useStyles = makeStyles(() => ({
  modal: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  paper: { width: 200, height: 200 },
}));

const ContactModal = ({ open, handleClose }) => {
  const classes = useStyles();

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
          <AiOutlineClose className='close' />
          <Slide
            direction='up'
            in={open}
            style={{ transformOrigin: '0 10 0' }}
            {...(open ? { timeout: 400 } : {})}
            mountOnEnter
            unmountOnExit
          >
            <div className='about-container'></div>
          </Slide>
          <Slide
            direction='down'
            in={open}
            style={{ transformOrigin: '0 10 0' }}
            {...(open ? { timeout: 400 } : {})}
            mountOnEnter
            unmountOnExit
          >
            <div className='form-container'></div>
          </Slide>
        </div>
      </Fade>
    </Modal>
  );
};

export default ContactModal;
