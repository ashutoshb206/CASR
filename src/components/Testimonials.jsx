import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      text: 'The Vastu consultation completely transformed our home. We feel more peaceful and prosperous.',
      role: 'Homeowner'
    },
    {
      name: 'Rajesh Kumar',
      text: 'The birth chart analysis provided incredible insights that helped me make important life decisions.',
      role: 'Entrepreneur'
    },
    {
      name: 'Anita Patel',
      text: "CASR's guidance helped me align my business space for better growth and success.",
      role: 'Business Owner'
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cream p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gold text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;