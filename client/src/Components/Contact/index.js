import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import './contact.css';
init('user_jKqRAFRqj4zi7o1jMdA9Q');

const Contact = ({ handleClose }) => {
  const [statusMessage, setStatusMessage] = useState('Message');
  const [contactNumber, setContactNumber] = useState('000000');

  const generateContactNumber = () => {
    const numStr = '000000' + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const statusMessage = document.querySelector('.status-message');
    const form = document.querySelector('#contact-form');

    // console.log(data);
    generateContactNumber();
    sendForm('service_bru7q0r', 'template_bdy22x4', '#contact-form').then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        form.reset();
        setStatusMessage('Message sent!');
        statusMessage.className = 'status-message success';
        setTimeout(() => (statusMessage.className = 'status-message'), 3000);
        setTimeout(() => handleClose(), 2000);
      },
      (error) => {
        console.log('FAILED...', error);
        setStatusMessage('Failed to send message! Please try again later.');
        statusMessage.className = 'status-message failure';
        setTimeout(() => (statusMessage.className = 'status-message'), 5000);
      }
    );
  };
  return (
    <div className='contact'>
      <p className='status-message'>{statusMessage}</p>
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
        {/* <div className='name_email'> */}
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
          <div role='alert'>Name is required</div>
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
          <div role='alert'>Email is required</div>
        )}
        {/* </div> */}
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
          <div role='alert'>Message is required</div>
        )}
        <div className='submit'>
          <button className='submit-btn' type='submit'>
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
