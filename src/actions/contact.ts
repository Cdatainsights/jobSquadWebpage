// src/actions/contact.js
'use server';

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contact(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email')?.toString(); // Cast to string or handle null
  const message = formData.get('message');


  if (!name || !email || !message) {
    throw new Error('Missing required form data'); // Handle missing data as needed
  }
  

  // Send email to your own address
  await resend.emails.send({
    from: ' JObSquad <emailer@jobsquad.info>',
    to: 'info@metaorigins.com', // Replace with your own email address
    subject: 'New message from your website!',
    text: `Name: ${name}, Email: ${email}, Message: ${message}`,
  });

  // Send email to the user who filled the form
  await resend.emails.send({
    from: ' JObSquad <emailer@jobsquad.info>',
    to: email,
    subject: 'Thank you for contacting us!',
    text: 'Dear user, Thank you for contacting us. We will get back to you soon.',
  });

  return { message: 'Message sent successfully!' };
}



