import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/banner4.jpg"
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-2 text-lg font-light">We'd love to hear from you!</p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Reach us through the following contact information or visit our office.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+62 812-3456-7890</p>
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>hello@yourcompany.com</p>
              </div>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>Jl. Raya Seminyak No.123, Kuta, Bali</p>
              </div>
            </div>
          
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
