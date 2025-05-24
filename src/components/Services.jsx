import React from 'react';

function Services() {
  const services = [
    {
      title: 'Vastu Consultation',
      description: 'Transform your home or office into a space of positive energy and prosperity through ancient Vastu principles.',
      icon: '🏠'
    },
    {
      title: 'Birth Chart Analysis',
      description: 'Gain deep insights into your life path, strengths, and opportunities through detailed astrological analysis.',
      icon: '⭐'
    },
    {
      title: 'Relationship & Career Astrology',
      description: 'Navigate relationships and career decisions with cosmic guidance and timing.',
      icon: '💫'
    },
    {
      title: 'Personalized Remedies',
      description: 'Receive customized solutions and remedies to harmonize your life with cosmic energies.',
      icon: '🔮'
    }
  ];

  return (
    <section id="services" className="py-16 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;