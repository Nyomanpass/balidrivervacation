import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, message } = form;

    const whatsappMessage = `Hello, my name is ${fullName}%0AEmail: ${email}%0AMessage: ${message}`;

    const phoneNumber = '6285738824131'; // Nomor WhatsApp (ganti 0 jadi 62)

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <Navbar />
      {/* Hero */}
     <section className="relative w-full h-[200px] md:h-[40vh] flex items-center justify-center">
        <img
          src="/banner4.jpg"
          alt="Airports & Charter"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="relative md:pt-0 pt-10 z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold font-montserrat">
            Contact Us
          </h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-40" />
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 font-semibold">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#1B3C53] hover:bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold transition"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Reach us through the following contact information or visit our office.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+62 878-4380-3487</p>
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>balidrivervacation@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>Jl. Danau Tondano No.50, Sanur, Denpasar Selatan, Kota Denpasar, Bali 80227</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
