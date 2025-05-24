import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gold">CASR</h3>
            <p className="text-gray-400">Bringing ancient wisdom to modern living through Vastu and Astrology.</p>
            <div className="space-y-2">
              <p className="text-gray-400">📍 Noida, Uttar Pradesh</p>
              <p className="text-gray-400">📞 +91 9259563334</p>
              <p className="text-gray-400">✉️ casr.astro@gmail.com</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-gold">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-gold">About</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-gold">Services</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-gold">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services/vastu" className="text-gray-400 hover:text-gold">Vastu Consultation</a></li>
              <li><a href="/services/birth-chart" className="text-gray-400 hover:text-gold">Birth Chart Analysis</a></li>
              <li><a href="/services/career" className="text-gray-400 hover:text-gold">Career Astrology</a></li>
              <li><a href="/services/relationship" className="text-gray-400 hover:text-gold">Relationship Guidance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="tel:+919259563334" className="text-gray-400 hover:text-gold text-2xl">📱</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold text-2xl">📸</a>
              <a href="https://wa.me/919259563334" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold text-2xl">💬</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} CASR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;