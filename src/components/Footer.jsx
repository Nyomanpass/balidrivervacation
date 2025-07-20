import React from "react";
import logo from "/logodua.png"; // pastikan path-nya sesuai struktur proyekmu

export default function Footer() {
  return (
    <footer className="bg-[#1B3C53] text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-20">
        {/* Logo & Short Description */}
        <div>
          <img src={logo} alt="Logo" className="h-20 mb-6" />
          <p className="text-sm leading-relaxed font-poppins">
            Make your holiday to Bali more memorable with Bali Driver Vacation.
            Discover comfort, safety, and local stories on every trip.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6 font-poppins">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/airport" className="hover:underline">Airports & Charter</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/gallery" className="hover:underline">Gallery</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-6 font-poppins">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>📍 Bali, Indonesia</li>
            <li>📞 +62 812-3456-7890</li>
            <li>✉️ info@balidrivervacation.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-6 font-poppins">Follow Us</h4>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#FFCA00]">
              <i className="ri-facebook-fill text-2xl"></i>
            </a>
            <a href="#" className="hover:text-[#FFCA00]">
              <i className="ri-instagram-fill text-2xl"></i>
            </a>
            <a href="#" className="hover:text-[#FFCA00]">
              <i className="ri-whatsapp-fill text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm font-poppins">
        &copy; 2025 Bali Driver Vacation. All rights reserved.
      </div>
    </footer>
  );
}
