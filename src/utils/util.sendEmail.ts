import toast from 'react-hot-toast';

import type { ContactFormData } from '../components/MainView/MainView.ContactForm';

export async function sendEmail(data: ContactFormData) {
  const apiEndpoint = '/api/email';

  try {
    const res = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const response = await res.json();
    toast(response.message);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    toast('Email failed to send');
  }
}
