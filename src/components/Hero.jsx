import React, { useState } from 'react';
import BookingModal from './BookingModal';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="min-h-[90vh] flex items-center bg-cream">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 mb-6">
          Align Your Life with the Cosmos
          <span className="block text-gold mt-2">Vastu & Astrology Guidance by CASR</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Discover harmony in your space and clarity in your path through ancient wisdom
          and modern understanding of Vastu and Astrology.
        </p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gold hover:bg-gold/90 text-white font-medium py-3 px-8 rounded-lg
            transition-all transform hover:scale-105 shadow-lg"
        >
          Book a Consultation
        </button>
      </div>
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}

export default Hero;