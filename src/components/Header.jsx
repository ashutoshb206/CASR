import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold text-gold">CASR</div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gold transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-gold transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-gold transition-colors">Services</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gold transition-colors">Testimonials</a>
            <a href="#blog" className="text-gray-600 hover:text-gold transition-colors">Blog</a>
            <a href="#contact" className="text-gray-600 hover:text-gold transition-colors">Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-600 hover:text-gold transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-gold transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-gold transition-colors">Services</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gold transition-colors">Testimonials</a>
            <a href="#blog" className="text-gray-600 hover:text-gold transition-colors">Blog</a>
            <a href="#contact" className="text-gray-600 hover:text-gold transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;