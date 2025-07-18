import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

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
  {
    title: "Airport to Canggu area",
    price: "$19,18",
    image: "/canggu.png",
  },
  {
    title: "Airport to Ubud area",
    price: "$19,18",
    image: "/ubud.png",
  },
  {
    title: "Airport to Candidasa area",
    price: "$31,97",
    image: "/candidasa.png",
  },
  {
    title: "Airport to Amed area",
    price: "$41,56",
    image: "/amed.png",
  },
  {
    title: "Airport to Lovina area",
    price: "$41,56",
    image: "/lovina.png",
  },
];

const AirportsCharter = () => {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/banner4.jpg"
          alt="Airports & Charter"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold font-montserrat">
            Airports & Charter
          </h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-40" />
      </section>

      {/* Content Grid */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6 font-montserrat">
          Our Airports & Charter Services
        </h2>
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
      </section>

      {/* CTA */}
      <CallToAction/>
      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AirportsCharter;
