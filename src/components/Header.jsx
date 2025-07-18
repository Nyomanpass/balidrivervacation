import React from "react";

export default function Header() {

  const charterServices = [
  {
    title: "Half day charter 7 seater 5 hours",
    price: "$28,76",
    image: "/halfday.png",
  },
  {
    title: "Fullday charter 7 seater car 10 hours",
    price: "$44,74",
    image: "/fullday.png",
  },
  {
    title: "Airport to Kuta area",
    price: "$12,79",
    image: "/kuta.png",
  },
  {
    title: "Airport to Seminyak area",
    price: "$15,98",
    image: "/seminyak.png",
  },
];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen">
        <img
          src="/hometravel.jpg"
          alt="Bali Gate"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black opacity-20 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen container text-center text-white animate-fadeInUp">
          <h1 className="font-poppins text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-snug">
            <span className="block">Private Bali Tours</span>
            <span className="inline md:block tracking-tight font-poppins">with Trusted Local Drivers</span>
          </h1>
          <p className="font-poppins font-extralight mb-8 max-w-2xl">
            Discover the best of Bali with our friendly, professional drivers. Whether it’s iconic temples,
            hidden beaches, or local culture — we’ll take you there safely and comfortably. Plan your dream
            trip with ease.
          </p>
          <a
            href="#"
            className="bg-transparent border-2 border-white text-white font-poppins font-semibold px-6 py-3 rounded hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            Book Your Bali Trip
          </a>
        </div>

      </section>

      {/* AIRPORT & CHARTER SERVICES */}
      <section className="py-28 bg-white" data-aos="fade-up" data-aos-duration="800">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="mb-10" data-aos="fade-up" data-aos-duration="800">
            <p className="text-sm uppercase tracking-widest text-gray-600 mb-2">Explore Our</p>
            <h2 className="text-3xl md:text-3xl font-bold text-[#1B3C53] font-montserrat">
              Airports & Charter Services
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {charterServices.map((item, i) => (
              <div
                key={i}
                className="bg-white border shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="md:font-bold md:text-lg mb-2">{item.title}</h3>
                  <p className="font-bold text-gray-800">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-10 flex justify-center"
          >
            <a
              href="/airport"
              className="inline-block bg-[#1B3C53] text-white font-medium px-14 py-3 rounded text-lg hover:bg-[#16354a] transform hover:scale-105"
            >
              View All
            </a>
          </div>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="pb-28 bg-white" data-aos="fade-up" data-aos-duration="1000">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <p className="uppercase tracking-wider text-black mb-4 font-montserrat font-light">
              Welcome To
            </p>
            <h2 className="text-4xl font-semibold text-[#1B3C53] mb-4 font-montserrat">
              Bali Driver Vacation
            </h2>
            <p className="text-black-800 mb-4">
              <strong className="font-bold font-poppins text-[#1B3C53]">Bali Driver Vacation</strong> is here
              to make your dream trip to the Island of the Gods come true. With our team of
              experienced and friendly drivers, we are ready to accompany you as you explore Bali in
              comfort and safety, filled with local stories
            </p>
            <p className="text-black-800">
              We believe that every journey is unique — from airport transfers and tours to iconic
              spots to hidden gems that few people know about. Experience the flexibility of our
              services and Balinese hospitality at every moment.
            </p>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="col-span-2" data-aos="fade-down" data-aos-duration="800">
              <img
                src="/kecak.jpg"
                alt="Kecak Dance"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div data-aos="fade-left" data-aos-duration="800">
              <img
                src="/surfing.jpg"
                alt="Surfing Bali"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div data-aos="fade-right" data-aos-duration="800">
              <img
                src="/pura2.jpg"
                alt="Temple Bali"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-28">
        <div className="absolute inset-0">
          <img
            src="/banner2.jpg"
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-30" />
        </div>

        <div className="relative max-w-screen-xl mx-auto px-4 text-white">
          <div className="mb-12 md:w-1/2 text-left">
            <p className="uppercase tracking-wider text-2xl mb-2 font-extralight">
              Explore Bali With Us
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-[#FFFFFF] font-monserrat mb-6">
              Why Choose <span className="font-bold">Bali Driver Vacation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "/car1.jpg",
                title: "Comfortable Rides",
                desc: "Enjoy clean, air-conditioned cars with friendly, professional drivers.",
              },
              {
                icon: "/lokasi.jpg",
                title: "Flexible Itinerary",
                desc: "Go anywhere you like your trip, your plan.",
              },
              {
                icon: "/bank.jpg",
                title: "Transparent Pricing",
                desc: "No hidden fees. What you see is what you pay.",
              },
              {
                icon: "/jam.jpg",
                title: "Always On Time",
                desc: "We respect your time and schedule.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                    <img src={item.icon} alt={item.title} className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
                <p className="text-sm text-normal text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
