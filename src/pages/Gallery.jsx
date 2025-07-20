import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const images = Array.from({ length: 16 }, (_, i) => ({
  src: `/galeri${i + 1}.jpg`,
  alt: `Gallery ${i + 1}`
}));

const Gallery = () => {
  return (
    <>
    <Navbar/>
      {/* Hero Banner */}
      <section className="relative w-full h-[200px] md:h-[40vh] flex items-center justify-center">
        <img
          src="/banner4.jpg"
          alt="Airports & Charter"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="relative md:pt-0 pt-10 z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold font-montserrat">Gallery</h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-xl font-montserrat font-semibold mb-6">From Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition duration-300 cursor-pointer"
            />
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Gallery;
