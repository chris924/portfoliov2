import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    
    
    emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent!');
        },
        (error) => {
          console.log('Failed to send email:', error.text);
        }
      );
  };

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" onSubmit={sendEmail}>
      <input
        type="text"
        name="from_name"
        placeholder="Your name"
        onChange={handleChange}
        value={formData.from_name}
        className="border-b border-gray-400 focus:outline-none focus:border-black p-2"
      />
      <input
        type="email"
        name="from_email"
        placeholder="Your email"
        onChange={handleChange}
        value={formData.from_email}
        className="border-b border-gray-400 focus:outline-none focus:border-black p-2"
      />
      <textarea
        name="message"
        placeholder="Your message"
        onChange={handleChange}
        value={formData.message}
        className="border-b border-gray-400 focus:outline-none focus:border-black p-2 md:col-span-2"
      />
      <button
        type="submit"
        className="mt-4 bg-black text-white py-2 px-4 rounded-md md:col-span-2"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;