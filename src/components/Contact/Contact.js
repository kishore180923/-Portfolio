import React, { useState } from 'react';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !mobile || !message) {
      setStatusMessage('Please fill in all fields.');
      return;
    }

    // Replace with your subscription logic or API call
    try {
      setStatusMessage('Thank you for contacting us!');
      setName('');
      setEmail('');
      setMobile('');
      setMessage('');
    } catch (error) {
      setStatusMessage('Submission failed. Please try again later.');
    }
  };

  return (
    <div className="relative overflow-hidden py-10 sm:py-16 bg-white">
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
              src="Emails-bro.png"
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
              We’d love to hear from you. Drop us a message, and we’ll get back to you as soon as possible. <span role="img" aria-label="sparkles">✨</span>
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
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-4 w-full max-w-md">
              <input
                type="text"
                className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <textarea
                className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="px-5 py-2 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Send Message
              </button>
            </form>

            {statusMessage && (
              <p className="text-sm text-gray-800 mt-2">{statusMessage}</p>
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
