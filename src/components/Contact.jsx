import React, { useRef, useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    emailjs
    .sendForm(
      serviceId, //emailjs service id
      templateId, //emailjs template id
      form.current,
      publicKey, //emailjs public key
    )
    .then(
      ()=>{
        setIsSent(true);
        form.current.reset(); //reset form fields after sent
        toast.success("Message Sent Successfully! ✔", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark'
        });
      },
      (error) => {
        toast.error("Error Sending Message.", error);
        toast.error("Failed to send Message. Please Try Again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark'
        });
      }
    )
  }

  return (
    <section id='contact' className='flex flex-col items-center justify-center py-24 pb-24 px-[6vw] md:px-[6vw] lg:px-[14vw] font-sans bg-skills-gradient'>

      <ToastContainer />

      <div className='text-center mb-8'>
        <h2 className='text-3xl sm:text-4xl text-white font-bold'>CONTACT</h2>
        <div className='w-36 h-1 bg-[#6884f5] mx-auto mt-2'></div>
      </div>

      <div className='mt-8 w-full max-w-md bg-[#0a0e1a] p-6 rounded-lg shadow-lg border border-gray-700'>
        <h3 className='text-xl font-semibold text-white text-center'>Connect With Me</h3>
        <form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4'>
          <input type="email" name='user_email' placeholder='Enter Email' required className='w-full p-3 rounded-md bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:border-blue-500' />
          <input type="text" name='user_name' placeholder='Enter Name' required className='w-full p-3 rounded-md bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:border-blue-500' />
          <input type="text" name='user_subject' placeholder='Enter Subject' required className='w-full p-3 rounded-md bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:border-blue-500' />
          <textarea name="message" placeholder='Enter Message' rows='4' 
          className='w-full p-3 rounded-md bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:border-blue-500'
          ></textarea>
          <button type='submit' className='w-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-md py-2 font-semibold text-white text-lg hover:opacity-90 transition'>Send</button>
        </form>
      </div>
    </section>  
  )
}

export default Contact
