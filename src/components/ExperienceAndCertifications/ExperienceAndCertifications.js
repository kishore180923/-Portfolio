import React from 'react';
import { motion } from 'framer-motion';

const ExperienceAndCertifications = () => {
  return (
    <div id ="experience" className="w-full px-4 py-20 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Experience & Credentials
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and validated expertise in web development
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4  opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
           <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ">
            <div className="w-full lg:w-1/2 h-full">
              <img
                src="/images/softye-logo.png"
                alt="Softye Technologies"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <a
                  href="https://softyetechnologies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:underline"
                >
                  Visit Company Website →
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">Professional Experience</span>
              </div>
              <h2 className="text-3xl font-bold mb-1 text-gray-900">Frontend Developer</h2>
              <h4 className="text-xl font-semibold mb-6 text-gray-700">Intern at Softye Technologies</h4>

              <div className="prose prose-indigo max-w-none text-gray-600 mb-8">
                <p>
                  Developed a professional billing web application with React JS and Tailwind CSS, featuring template selection, invoice generation, and dynamic rendering capabilities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-indigo-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">API Integration</h4>
                    <p className="text-gray-600">Collaborated with backend developers to integrate API-based template management system</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-indigo-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Auth Implementation</h4>
                    <p className="text-gray-600">Implemented secure user authentication and authorization flows</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-indigo-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Performance Optimization</h4>
                    <p className="text-gray-600">Enhanced application performance through code splitting and lazy loading</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
          <div className="relative flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 transition-all duration-300">
            <div className="w-full lg:w-1/2 h-full">
              <img
                src="/images/certificate-image.jpg"
                alt="Advanced React Certification"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <a
                  href="#"
                  className="text-white font-medium hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    // Certificate verification modal or link would go here
                    alert('Certificate verification would open here');
                  }}
                >
               
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm font-semibold tracking-wider text-emerald-600 uppercase">Certification</span>
              </div>
              <h2 className="text-3xl font-bold mb-1 text-gray-900">Advanced React Developer</h2>
              <h4 className="text-xl font-semibold mb-6 text-gray-700">Udemy Certification</h4>

              <div className="prose prose-emerald max-w-none text-gray-600 mb-8">
                <p>
                  Completed comprehensive training in advanced React concepts including Hooks, Context API, Performance Optimization, and State Management through hands-on projects and real-world scenarios.
                </p>
              </div>

              <div className="mb-8 p-6 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl border border-emerald-100">
                <h4 className="font-semibold text-gray-800 mb-4 text-lg">Skills Acquired</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    'React Hooks', 'Context API', 'Redux Toolkit',
                    'Performance Optimization', 'React Testing',
                    'Custom Hooks', 'Error Boundaries', 'Code Splitting'
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white text-sm font-medium rounded-full shadow-sm border border-gray-200 hover:bg-emerald-50 hover:border-emerald-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    // Certificate download or verification action
                    alert('Certificate download would initiate here');
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                  Download Certificate
                </a>
                <a
                  href="#"
                  className="px-6 py-3 text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    // View credential details
                    alert('Credential details would appear here');
                  }}
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceAndCertifications;