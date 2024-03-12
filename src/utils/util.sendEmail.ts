import toast from 'react-hot-toast';

import type { ContactFormData } from '../components/MainView/MainView.ContactForm';

export function sendEmail(data: ContactFormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(res => {
      return res.json();
    })
    .then(response => {
      toast(response.message);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err);
      toast('Email failed to send');
    });
}
