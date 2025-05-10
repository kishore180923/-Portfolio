import React, { useState } from 'react';
import Contact from '../assets/Contact.png';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [status, setStatus] = useState({
    message: '',
    type: '' // 'success' or 'error'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for mobile field to prevent non-numeric input
    if (name === 'mobile') {
      // Only allow numbers and limit to 10 digits
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validateForm = () => {
    // Name validation
    if (!formData.name.trim()) {
      setStatus({ message: 'Please enter your name', type: 'error' });
      return false;
    }

    // Email validation
    if (!formData.email.trim()) {
      setStatus({ message: 'Please enter your email', type: 'error' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ message: 'Please enter a valid email address', type: 'error' });
      return false;
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      setStatus({ message: 'Please enter your mobile number', type: 'error' });
      return false;
    }
    if (!/^\d{10}$/.test(formData.mobile)) {
      setStatus({ message: 'Please enter a valid 10-digit mobile number', type: 'error' });
      return false;
    }

    // Message validation
    if (!formData.message.trim()) {
      setStatus({ message: 'Please enter your message', type: 'error' });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: '', type: '' });

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Replace this with your actual API call
      // const response = await fetch('your-api-endpoint', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus({
        message: 'Thank you for your message! We will get back to you soon.',
        type: 'success'
      });
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        message: 'Something went wrong. Please try again later.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="relative overflow-hidden py-10 sm:py-16 bg-white">
      {/* Floating Symbols Container (absolutely positioned) */}
      <div className="pointer-events-none absolute inset-0">
        {/* Symbol 1 */}
        <div
          className="absolute w-10 h-10 bg-gray-400 rounded-full opacity-20 float1"
          style={{ top: '20%', left: '10%' }}
        />
        {/* Symbol 2 */}
        <div
          className="absolute w-8 h-8 bg-gray-400 rounded-full opacity-20 float2"
          style={{ top: '50%', left: '70%' }}
        />
        {/* Symbol 3 */}
        <div
          className="absolute w-12 h-12 bg-gray-400 rounded-full opacity-20 float3"
          style={{ bottom: '15%', left: '40%' }}
        />
      </div>

      {/* Main Content (z-10 to stay above floating symbols) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Left Column (Illustration) */}
          <div className="md:w-1/2 flex justify-center md:justify-start md:pr-8">
            <img
              src={Contact}
              alt="Newsletter Illustration"
              className="w-full max-w-sm h-auto"
            />
          </div>

          {/* Right Column (Text & Form) */}
          <div className="md:w-1/2 space-y-6 md:pl-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
              Contact Us! <span role="img" aria-label="contact icon"></span>
            </h2>
            <p className="text-gray-800 text-base sm:text-lg max-w-md">
              We'd love to hear from you. Drop us a message, and we'll get back to you as soon as possible. <span role="img" aria-label="sparkles">✨</span>
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span className="text-xl">💬</span>
                <p className="text-gray-800">
                  Share your thoughts or questions with us.
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-xl"></span>
                <p className="text-gray-800">
                  Reach out for quick inquiries or assistance.
                </p>
              </li>
            </ul>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
              <input
                type="text"
                name="name"
                className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="mobile"
                className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your 10-digit mobile number"
                value={formData.mobile}
                onChange={handleChange}
                pattern="[0-9]{10}"
                maxLength="10"
              />
              <textarea
                name="message"
                className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-5 py-2 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {status.message && (
              <p className={`text-sm mt-2 ${
                status.type === 'success' ? 'text-green-600' : 'text-red-600'
              }`}>
                {status.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Custom Keyframe Animations */}
      <style>
        {`
          @keyframes float1 {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
          @keyframes float2 {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(25px); }
            100% { transform: translateY(0); }
          }
          @keyframes float3 {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(-15px); }
            100% { transform: translateY(0); }
          }
          .float1 {
            animation: float1 6s infinite ease-in-out;
          }
          .float2 {
            animation: float2 8s infinite ease-in-out;
          }
          .float3 {
            animation: float3 7s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Newsletter;