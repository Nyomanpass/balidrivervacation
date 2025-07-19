import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed w-full py-5 top-0 left-0 z-50 transition duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-secondary text-white shadow-md" : "bg-transparent text-white"
      }`}
    >

      <div className="container">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <img src="/logodua.png" alt="Logo" className="h-14 md:h-20 object-contain" />
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex space-x-8 mx-8 font-poppins">
            <a href="/" className="font-medium underline">Home</a>
            <a href="/airport" className="hover:underline">Airports & Charter</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/gallery" className="hover:underline">Gallery</a>
            <a href="/contact" className="hover:underline">Contact Us</a>
          </div>

          {/* DESKTOP BUTTON */}
          <div className="hidden md:block">
            <a
              href="#"
              className="bg-[#FFCA00] text-[#1B3C53] font-poppins font-semibold px-4 py-2 rounded border border-[#FFCA00] hover:bg-primary transition"
            >
              Contact Now
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white text-3xl">
              <ion-icon name={isMobileMenuOpen ? "close-outline" : "menu-outline"}></ion-icon>
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-8 pb-4 space-y-4 mt-4 bg-[#1B3C53] text-white font-poppins">
          <a href="/" className="block font-semibold">Home</a>
          <a href="/airport" className="block">Airports & Charter</a>
          <a href="/about" className="block">About</a>
          <a href="/gallery" className="block">Gallery</a>
          <a href="/contact" className="block">Contact Us</a>
          <a
            href="#"
            className="block w-full text-center bg-[#FFCA00] text-[#1B3C53] font-semibold px-4 py-3 rounded border border-[#FFCA00]"
          >
            Contact Now
          </a>
        </div>
      )}
    </nav>
  );
}
