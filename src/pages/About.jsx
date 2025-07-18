import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/banner4.jpg"
          alt="About Bali Driver Vacation"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold font-montserrat">About Us</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-yellow-500 text-center">Bali Driver Vacation</h2>
          <p className="text-lg leading-relaxed text-center text-gray-700">
            Bali Driver Vacation is a trusted private tour and transportation service based in Bali,
            operated by experienced and friendly local drivers. We are committed to delivering the
            best holiday experience for both domestic and international travelers through professional
            service, comfortable vehicles, and English-speaking drivers.
          </p>

          {/* Image Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <img
              src="/tirtaempul.jpg"
              alt="Our Professional Driver"
              className="w-full rounded-lg shadow-lg object-cover"
            />
            <img
              src="/kecakabout.jpg"
              alt="Comfortable Tour Vehicle"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>✔️ Friendly and experienced local drivers</li>
                <li>✔️ English-speaking for easy communication</li>
                <li>✔️ Airport pickup & personalized private tours</li>
                <li>✔️ Clean, comfortable, and well-maintained cars</li>
                <li>✔️ Transparent pricing & flexible service options</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Safe & Comfortable for Tourists</h3>
              <p className="text-gray-700">
                Your safety and comfort are our top priorities. We understand that traveling in a new
                place can feel overwhelming, and we are here to make your journey smooth and enjoyable.
                Our drivers are punctual, helpful, and always ready to recommend the best local spots
                to explore during your vacation.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Join hundreds of happy travelers who have explored Bali with us!
            </h3>
            <p className="text-gray-600">
              Contact us today and start planning your unforgettable holiday in Bali.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
