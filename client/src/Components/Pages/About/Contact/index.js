import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import { motion } from 'framer-motion';
import './contact.css';
init('user_jKqRAFRqj4zi7o1jMdA9Q');

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 2 },
  transition: { duration: 1 },
};
const Contact = ({ handleClose }) => {
  const [statusMessage, setStatusMessage] = useState(false);
  const [contactNumber, setContactNumber] = useState('343434');

  const generateContactNumber = () => {
    const numStr = '343434' + ((Math.random() * 1343434) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const form = document.querySelector('#contact-form');

    generateContactNumber();
    sendForm('service_bru7q0r', 'template_bdy22x4', '#contact-form').then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        form.reset();
        setStatusMessage('Message sent!');
        setTimeout(() => setStatusMessage(false), 3000);
        setTimeout(() => handleClose(), 2000);
      },
      (error) => {
        console.log('FAILED...', error);
        setStatusMessage('Failed to send message! Please try again later.');
        setTimeout(() => setStatusMessage(false), 3000);
      }
    );
  };
  return (
    <div className='contact'>
      {statusMessage && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ width: '100%' }}
        >
          {statusMessage === 'Message sent!' && (
            <p className='status-message success'>{statusMessage}</p>
          )}
          {statusMessage ===
            'Failed to send message! Please try again later.' && (
            <p className='status-message failure'>{statusMessage}</p>
          )}
        </motion.div>
      )}
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          name='user_name'
          placeholder='Name'
          maxLength='30'
          aria-invalid={errors.user_name ? 'true' : 'false'}
          ref={register({ required: true })}
          style={{ borderBottom: errors.user_name && '1px solid #cc5555' }}
        />
        <input type='hidden' name='contact_number' value={contactNumber} />
        {errors.user_name && errors.user_name.type === 'required' && (
          <motion.div {...fade} role='alert'>
            Name is required
          </motion.div>
        )}
        <input
          type='text'
          name='user_email'
          placeholder='Email'
          maxLength='30'
          aria-invalid={errors.user_email ? 'true' : 'false'}
          ref={register({ required: true })}
          style={{ borderBottom: errors.user_name && '1px solid #cc5555' }}
        />
        {errors.user_email && errors.user_email.type === 'required' && (
          <motion.div {...fade} role='alert'>
            Email is required
          </motion.div>
        )}
        <textarea
          type='text'
          name='message'
          placeholder='Message'
          maxLength='1500'
          aria-invalid={errors.message ? 'true' : 'false'}
          ref={register({ required: true })}
          style={{ borderBottom: errors.user_name && '1px solid #cc5555' }}
        />
        {errors.message && errors.message.type === 'required' && (
          <motion.div {...fade} role='alert'>
            Message is required
          </motion.div>
        )}
        <div className='submit'>
          <button className='btn contact-btn' type='submit'>
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
