import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="/images/ui-images.png"
            alt="Kishore"
            className="w-[450px] h-[450px] md:w-[600px] md:h-[600px] transform hover:scale-105 transition-all duration-300 animate-fade-in object-cover"
          />
        </div>

        <div>
          <h3 className="text-blue-600 font-semibold text-sm uppercase tracking-wider animate-fade-in">About Me</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Aspiring Web Developer on a Creative Journey
          </h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            I'm <span className="font-semibold text-blue-600">Kishore</span>, passionate about building modern web experiences with React JS, Tailwind CSS, and Node.js. I focus on creating clean, responsive designs and continuously evolve through real-world projects.
          </p>
          <div className="mt-6 grid gap-2 text-gray-700 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p><span className="font-semibold">Location:</span> Erode, Tamil Nadu, India</p>
            <p><span className="font-semibold">Email:</span> kishore@example.com</p>
            <p><span className="font-semibold">Status:</span> Open to work & freelance</p>
          </div>
          <a
            href="#"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  {/* Section Header */}
  <div className="text-center mb-16">
    <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full uppercase tracking-widest">
      Our Expertise
    </span>
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Transformative <span className="text-blue-600">Digital Solutions</span>
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      We deliver cutting-edge services that drive growth and elevate your digital presence.
    </p>
  </div>

  {/* Services Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Web Development Card */}
    <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative h-full flex flex-col p-8">
        <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Web Development</h3>
        <p className="text-gray-600 mb-6">
          We build blazing-fast, SEO-optimized websites and web apps using React, Next.js, and modern JavaScript frameworks tailored to your business needs.
        </p>
        <div className="mt-auto">
          <a href="#" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
            Explore services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>

    {/* UI/UX Design Card */}
    <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-purple-100 transition-all duration-300 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative h-full flex flex-col p-8">
        <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">UI/UX Design</h3>
        <p className="text-gray-600 mb-6">
          Human-centered design solutions that delight users and drive conversions through intuitive interfaces and seamless experiences.
        </p>
        <div className="mt-auto">
          <a href="#" className="inline-flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors duration-300">
            Explore services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>

    {/* Mobile Development Card */}
    <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-green-100 transition-all duration-300 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative h-full flex flex-col p-8">
        <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobile Development</h3>
        <p className="text-gray-600 mb-6">
          Cross-platform mobile apps with React Native and Flutter that deliver native performance with faster development cycles.
        </p>
        <div className="mt-auto">
          <a href="#" className="inline-flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors duration-300">
            Explore services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  </div>

  {/* CTA Section */}
  <div className="mt-16 text-center">
    <p className="text-lg text-gray-600 mb-6">
      Have a project in mind? Let's create something amazing together.
    </p>
    <a href="#" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
      Get Started Today
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </a>
  </div>
</div>
    </section>
  );
};

export default About;