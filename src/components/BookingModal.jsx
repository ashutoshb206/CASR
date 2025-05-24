import React, { useState, useEffect } from 'react';

function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'vastu',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = {
    vastu: {
      name: 'Vastu Consultation',
      price: '₹5,000',
      duration: '2 hours'
    },
    'birth-chart': {
      name: 'Birth Chart Analysis',
      price: '₹3,000',
      duration: '1.5 hours'
    },
    career: {
      name: 'Career Astrology',
      price: '₹4,000',
      duration: '1.5 hours'
    },
    relationship: {
      name: 'Relationship Guidance',
      price: '₹3,500',
      duration: '1.5 hours'
    }
  };

  const timeSlots = [
    '09:00', '10:30', '12:00', '14:00', '15:30', '17:00'
  ];

  useEffect(() => {
    // Reset form when modal opens
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'vastu',
        date: '',
        time: '',
        message: ''
      });
      setErrors({});
    }
  }, [isOpen]);

  const validateForm = () => {
    const newErrors = {};
    const today = new Date();
    const selectedDate = new Date(formData.date);

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else if (selectedDate < today) {
      newErrors.date = 'Cannot select a past date';
    }

    if (!formData.time) {
      newErrors.time = 'Time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Here you would typically send the form data to your backend
      console.log('Booking submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Thank you for your booking! We will contact you shortly to confirm your appointment.');
      onClose();
    } catch (error) {
      alert('There was an error submitting your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Book a Consultation</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gold ${
                errors.name ? 'border-red-500' : ''
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gold ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gold ${
                errors.phone ? 'border-red-500' : ''
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gold"
            >
              {Object.entries(services).map(([key, service]) => (
                <option key={key} value={key}>
                  {service.name} - {service.price} ({service.duration})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gold ${
                errors.date ? 'border-red-500' : ''
              }`}
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Preferred Time</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gold ${
                errors.time ? 'border-red-500' : ''
              }`}
            >
              <option value="">Select a time</option>
              {timeSlots.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
            {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Additional Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gold"
            ></textarea>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Booking Summary</h3>
            <p className="text-gray-600">
              {services[formData.service].name} - {services[formData.service].price}
              <br />
              Duration: {services[formData.service].duration}
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gold hover:bg-gold/90 text-white font-medium py-3 px-8 rounded-lg
              transition-all transform hover:scale-105 shadow-lg ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            {isSubmitting ? 'Processing...' : 'Book Now'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingModal; 