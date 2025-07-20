import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

const packagetrip = [
  {
    title: "Private Charter Boat to Nusa Penida",
    subtitle: "Private trip with your group on a chartered boat",
    price: "$750.00",
    image: "/boat.jpg",
  },
  {
    title: "Spesial Trip",
    subtitle: "Kelingking Beach, Broken Beach, Angel's Billabong + Snorkeling (Manta Bay, Crystal Bay)",
    price: "$80.00",
    image: "/special.jpg",
  },
  {
    title: "West Trip",
    subtitle: "Kelingking Beach, Broken Beach, Angel's Billabong",
    price: "$70.00",
    image: "/west.jpg",
  },
  {
    title: "East Trip",
    subtitle: "Atuh Beach, Diamond Beach, Tree House",
    price: "$70.00",
    image: "/east.jpg",
  },
  {
    title: "South Trip Package + Activity",
    subtitle: "Uluwatu, beaches, sunset view, and local experiences",
    price: "$105.50",
    image: "/uluwatu.jpg",
  },
  {
    title: "ATV Quad Bike – Tandem",
    subtitle: "2 people on 1 ATV for a muddy adventure trail",
    price: "$60.72",
    image: "/atvtandem.jpg",
  },
  {
    title: "ATV Quad Bike – Single",
    subtitle: "Solo ride through rivers, tunnels, and rice fields",
    price: "$51.13",
    image: "/atvsinggle.jpg",
  },
  {
    title: "Snorkeling at Blue Lagoon",
    subtitle: "Includes Padangbai, Tanjung Jepun & coral reef spots",
    price: "$19.17",
    image: "/bluelagon.jpg",
  },
  {
    title: "White Water Rafting – Telaga Waja River",
    subtitle: "Adrenaline-pumping rafting experience in East Bali",
    price: "$54.32",
    image: "/waterwajariver.jpg",
  },
  {
    title: "Bali Swing Package",
    subtitle: "Instagram-famous jungle swing + photo spots",
    price: "$25.56",
    image: "/baliswing.jpg",
  },
  {
    title: "Lovina Dolphin Tour",
    subtitle: "Early morning dolphin watching, Handara Gate, Ulun Danu Beratan Lake",
    price: "$54.35",
    image: "/lovina.jpg",
  },
  {
    title: "Batur Volcano Package",
    subtitle: "Sunrise jeep tour, Black lava tour, Coffee plantation, Tirta empul temple, Tegalalang rice terrace ",
    price: "$60.74",
    image: "/batur.jpg",
  },
  {
    title: "Full Activity Package",
    subtitle: "ATV, rafting, swing, lunch, transport — all in one",
    price: "$140.66",
    image: "/ubud.jpg",
  },
  {
    title: "Sunrise with Jeep",
    subtitle: "4x4 Jeep adventure to watch the sunrise over Batur",
    price: "$31.97",
    image: "/sunrisebatur.jpg",
  },
  {
    title: "Middle Trip C with Activity",
    subtitle: "Ubud art village, Ride ATV quad bike, Ubud Monkey Forest, Batuan Temple, Coffee plantation",
    price: "$70.33",
    image: "/monkey.jpg",
  },
  {
    title: "Middle Trip B + Activity",
    subtitle: "Tirta Empul Temple, Tegalalang rice field, Swing at rice field, Batuan Temple, Tegenungan waterfall",
    price: "$60.74",
    image: "/tirtaempul.jpg",
  },
  {
    title: "Middle Trip A + Activity",
    subtitle: "Nusa Dua Water sport, Pandawa Beach, Uluwatu Temple, Sunset at Jimbaran beach",
    price: "$63.94",
    image: "/ayungriver.jpg",
  },
];



const Package = () => {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full h-[200px] md:h-[40vh] flex items-center justify-center">
        <img
          src="/banner4.jpg"
          alt="Airports & Charter"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="relative. md:pt-0 pt-10 z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold font-montserrat">
            Package Trip
          </h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-40" />
      </section>

      {/* Content Grid */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6 font-montserrat">
          Our Travel Packages & Private Trips
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {packagetrip.map((item, i) => (
            <div
              key={i}
              className="bg-white border shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[170px] md:h-[250px] object-cover"
              />
              <div className="p-4">
                <h3 className="md:font-bold md:text-lg mb-2">{item.title}</h3>
                <p className="text-[.8rem] md:text-sm text-gray-600 font-light mb-2">{item.subtitle}</p>
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

export default Package;
