import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">About CASR</h2>
            <p className="text-gray-600 leading-relaxed">
              With over a decade of experience in Vastu Shastra and Vedic Astrology,
              we bring ancient wisdom to modern living. Our approach combines traditional
              knowledge with contemporary understanding to create harmonious spaces
              and guide life decisions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in making these ancient sciences accessible and practical
              for today's world, helping you create balance in your environment
              and clarity in your life path.
            </p>
          </div>
          <div className="relative h-[400px] bg-pastel-purple rounded-lg overflow-hidden">
            {/* Placeholder for profile image */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;