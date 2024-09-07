// "use client";
// import React, { useState } from "react";
// import Link from 'next/link'
// import Image from 'next/image';
// import { Container } from "@/components/Container";
// import { contact } from "@/actions/contact"; // Adjust the import path as necessary
// import toast, { Toaster } from "react-hot-toast";

// import mail from "../../../public/img/contact/mail.svg";
// import x from "../../../public/img/contact/x.svg";
// import ins from "../../../public/img/contact/ins.svg";

// export const Form = () => {
//   const [submitting, setSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setSubmitting(true);

//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('name', formData.name);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('message', formData.message);

//       const response = await contact(formDataToSend);
//       if (response.message) {
//         toast.success(response.message);
//         setFormData({
//           name: '',
//           email: '',
//           message: ''
//         });
//       } else {
//         toast.error("Failed to send message. Please try again.");
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       toast.error("Failed to send message. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Container>
//       <Toaster />
//       <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-5 mx-auto text-black px-7 py-7 lg:px-12 lg:py-12 formbg" style={{ borderRadius: '30px', boxShadow: 'none' }}>
//         <div className="flex flex-col text-center w-[30%] justify-center items-center">

//           <Image src={mail} alt="image" className="mx-auto" />
//           <p className="text-custom-blue pt-3">Email us:</p>
//           <p>info@jobsquad.com</p>
//           <br />
//           <p className="text-custom-blue">Social Media</p>
//           <div className="flex flex-row justify-center pt-3 gap-2">

//             <Link href="https://www.x.com/Jobsquad374380" target="_blank">
//               <Image src={x} alt="image" className="mx-auto" />
//             </Link>
//             <Link href="https://www.instagram.com/jobs.quad/" target="_blank">
//               <Image src={ins} alt="image" className="mx-auto" />
//             </Link>
//           </div>
//         </div>

//         <div className="lg:w-5 hidden lg:flex lg:h-80 lg:w-[5%] lg:border-l-2 lg:border-custom-blue"></div>

//         <div className="relative flex flex-col w-[65%] lg:flex-col lg:pl-10 lg:mr-10 justify-left items-left w-full lg:w-auto">
//           {/* CTA form */}
//           <h1 className="text-custom-blue font-bold text-3xl lg:text-4xl lg:pb-5 ">Send us a message</h1>
//           <p className='text-normal lg:max-w-xl'>Need help? Fill out the form below, and one of our support team members will get back to you as soon as possible.</p>
//           <form onSubmit={handleSubmit} className="w-full lg:w-auto pt-10">
//             <div className="flex flex-col sm:flex-col justify-center sm:justify-end max-w-xs mx-auto sm:max-w-md lg:max-w-none lg:ml-auto lg:mr-0 gap-2 sm:gap-4">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full max-w-lg sm:w-auto appearance-none border border-gray-200 rounded-lg px-4 py-2 text-black bg-gray-100 placeholder-grey-100 focus:placeholder-opacity-100 focus:outline-none"
//                 placeholder="Your name"
//                 aria-label="Your name"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full max-w-lg sm:w-auto appearance-none border border-gray-200 rounded-lg px-4 py-2 text-black bg-gray-100  placeholder-grey-100 focus:placeholder-opacity-100 focus:outline-none"
//                 placeholder="Your Email"
//                 aria-label="Your Email"
//                 required
//               />
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full max-w-lg sm:w-auto appearance-none border border-gray-200 rounded-lg px-4 py-8 text-black bg-gray-100 placeholder-grey-100 focus:placeholder-opacity-100 focus:outline-none"
//                 placeholder="Message"
//                 aria-label="Your message"
//                 required
//               />

//               <button type="submit" className="btn bg-custom-blue text-white w-[150px] text-center rounded-xl px-4 py-2 hover:bg-blue-600 shadow" disabled={submitting}>
//                 {submitting ? 'Submitting...' : 'SUBMIT'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </Container>
//   );
// };

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import emailjs from "emailjs-com"; // Import EmailJS for client-side use
import toast, { Toaster } from "react-hot-toast";

import mail from "../../../public/img/contact/mail.svg";
import x from "../../../public/img/contact/x.svg";
import ins from "../../../public/img/contact/ins.svg";

export const Form = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const userId = process.env.NEXT_PUBLIC_USER_ID!;
    const confirmationTemplateId =
      process.env.NEXT_PUBLIC_CONFIRMATION_TEMPLATE_ID!;

    try {
      // Prepare parameters for the email
      const emailParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      // Send email to your own address
      await emailjs.send(
        serviceId,
        templateId,
        {
          ...emailParams,
          subject: "New message from your website!",
          to_email: "info@jobsquad.com", // Replace with your email
        },
        userId
      );

      // Send confirmation email to the user
      await emailjs.send(
        serviceId,
        confirmationTemplateId,
        {
          to_name: formData.name,
          to_email: formData.email,
        },
        userId
      );

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <Toaster />
      <div
        className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-5 mx-auto text-black px-7 py-7 lg:px-12 lg:py-12 formbg"
        style={{ borderRadius: "30px", boxShadow: "none" }}
      >
        <div className="flex flex-col text-center w-[30%] justify-center items-center">
          <Image src={mail} alt="image" className="mx-auto" />
          <p className="text-custom-blue pt-3">Email us:</p>
          <p>info@jobsquad.com</p>
          <br />
          <p className="text-custom-blue">Social Media</p>
          <div className="flex flex-row justify-center pt-3 gap-2">
            <Link href="https://www.x.com/Jobsquad374380" target="_blank">
              <Image src={x} alt="image" className="mx-auto" />
            </Link>
            <Link href="https://www.instagram.com/jobs.quad/" target="_blank">
              <Image src={ins} alt="image" className="mx-auto" />
            </Link>
          </div>
        </div>

        <div className="lg:w-5 hidden lg:flex lg:h-80 lg:w-[5%] lg:border-l-2 lg:border-custom-blue"></div>

        <div className="relative flex flex-col w-[65%] lg:flex-col lg:pl-10 lg:mr-10 justify-left items-left w-full lg:w-auto">
          <h1 className="text-custom-blue font-bold text-3xl lg:text-4xl lg:pb-5 ">
            Send us a message
          </h1>
          <p className="text-normal lg:max-w-xl">
            Need help? Fill out the form below, and one of our support team
            members will get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="w-full lg:w-auto pt-10">
            <div className="flex flex-col sm:flex-col justify-center sm:justify-end max-w-xs mx-auto sm:max-w-md lg:max-w-none lg:ml-auto lg:mr-0 gap-2 sm:gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full max-w-lg sm:w-auto appearance-none border border-gray-200 rounded-lg px-4 py-2 text-black bg-gray-100 placeholder-grey-100 focus:placeholder-opacity-100 focus:outline-none"
                placeholder="Your name"
                aria-label="Your name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full max-w-lg sm:w-auto appearance-none border border-gray-200 rounded-lg px-4 py-2 text-black bg-gray-100  placeholder-grey-100 focus:placeholder-opacity-100 focus:outline-none"
                placeholder="Your Email"
                aria-label="Your Email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full max-w-lg sm:w-auto appearance-none border border-gray-200 rounded-lg px-4 py-8 text-black bg-gray-100 placeholder-grey-100 focus:placeholder-opacity-100 focus:outline-none"
                placeholder="Message"
                aria-label="Your message"
                required
              />

              <button
                type="submit"
                className="btn bg-custom-blue text-white w-[150px] text-center rounded-xl px-4 py-2 hover:bg-blue-600 shadow"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};
