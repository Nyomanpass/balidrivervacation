const bestTimes = [
  {
    image: "/sun.jpg",
    alt: "Comfortable Rides",
    title: "April – June & September – Early October",
    desc: "The weather is sunny, rain is rare, and the streets are quieter. Perfect for beach trips and cultural tours.",
  },
  {
    image: "/surfer.jpg",
    alt: "Flexible Itinerary",
    title: "May – September (Sunny Season)",
    desc: "Dry season, smooth roads, clear beaches. Perfect for a long road trip.",
  },
  {
    image: "/ccloud.jpg",
    alt: "Transparent Pricing",
    title: "January – March & October – November",
    desc: "A calmer atmosphere, more affordable prices, perfect if you want to visit Bali without the crowds of tourist.",
  },
  {
    image: "/cloud2.jpg",
    alt: "Always On Time",
    title: "November – March (Rainy Season)",
    desc: "Rainfall is frequent but brief. Ticket prices and accommodation are cheaper, and the roads are less congested.",
  },
];

export default function BestTimeToExplore() {
  return (
    <section className="relative py-20 mb-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/banner3.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>

      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-white font-monserrat mb-6">
          Best Time to <span className="font-bold font-montserrat">Explore Bali</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestTimes.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                  <img src={item.image} alt={item.alt} className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center font-poppins text-white">
                {item.title}
              </h3>
              <p className="text-sm text-normal text-center text-white">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
