
export default function CallToAction() {
  return (
    <section className="bg-[#1B3C53] text-white py-20 mt-10 mb-10">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 font-monserrat">
            Book Your Ride Now!
          </h2>
          <p className="text-sm md:text-base max-w-xl">
            Get trusted Bali transport at the best price. Enjoy easy booking,
            friendly local drivers, and stress-free rides with Bali Driver
            Vacation.
          </p>
        </div>
        <a
          href="https://wa.me/6287843803487?text=Hi%2C%20I%27m%20interested%20in%20your%20Bali%20Driver%20Vacation%20services.%20Could%20you%20please%20provide%20more%20information%3F" target="_blank"
          className="inline-table bg-white text-[#1B3C53] font-bold font-mosserrat px-6 py-3 rounded hover:bg-[#FFCA00] hover:text-black transition"
        >
          Booking Now
        </a>
      </div>
    </section>
  );
}
