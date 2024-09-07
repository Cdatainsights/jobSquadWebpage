// // src/actions/contact.js
// 'use server';

// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function contact(formData: FormData) {
//   const name = formData.get('name');
//   const email = formData.get('email')?.toString(); // Cast to string or handle null
//   const message = formData.get('message');


//   if (!name || !email || !message) {
//     throw new Error('Missing required form data'); // Handle missing data as needed
//   }
  

//   // Send email to your own address
//   await resend.emails.send({
//     from: ' JObSquad <emailer@jobsquad.info>',
//     to: 'info@metaorigins.com', // Replace with your own email address
//     subject: 'New message from your website!',
//     text: `Name: ${name}, Email: ${email}, Message: ${message}`,
//   });

//   // Send email to the user who filled the form
//   await resend.emails.send({
//     from: ' JObSquad <emailer@jobsquad.info>',
//     to: email,
//     subject: 'Thank you for contacting us!',
//     text: 'Dear user, Thank you for contacting us. We will get back to you soon.',
//   });

//   return { message: 'Message sent successfully!' };
// }



'use server';

import emailjs from 'emailjs-com';

export async function contact(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email')?.toString(); // Cast to string or handle null
  const message = formData.get('message');

  if (!name || !email || !message) {
    throw new Error('Missing required form data'); // Handle missing data as needed
  }

  // Ensure environment variables are defined
  const serviceId = process.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = process.env.VITE_EMAILJS_USER_ID;
  const confirmationTemplateId = process.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID;

  if (!serviceId || !templateId || !userId || !confirmationTemplateId) {
    throw new Error('Missing EmailJS configuration. Please check your environment variables.');
  }

  const emailParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  try {
    // Send email to your own address
    await emailjs.send(
      serviceId,  // Your EmailJS service ID
      templateId, // Your EmailJS template ID
      {
        ...emailParams,
        subject: 'New message from your website!',
        to_email: 'info@metaorigins.com',   // Replace with your own email address
      },
      userId       // Your EmailJS user ID
    );

    // Send confirmation email to the user
    await emailjs.send(
      serviceId,    // Same service ID
      confirmationTemplateId, // Confirmation template ID
      {
        to_name: name,
        to_email: email,
      },
      userId        // Same user ID
    );

    return { message: 'Message sent successfully!' };

  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send message');
  }
}
