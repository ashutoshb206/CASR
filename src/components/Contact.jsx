import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gold hover:bg-gold/90 text-white font-medium py-2 px-6 rounded-lg
                  transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📍</span> Noida, Uttar Pradesh, India
              </p>
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📞</span> +91 9259563334
              </p>
              <p className="flex items-center text-gray-600">
                <span className="mr-2">✉️</span> casr.astro@gmail.com
              </p>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg">
              {/* Google Maps embed will go here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;