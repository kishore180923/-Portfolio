import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    { icon: <FaGithub />, name: 'GitHub', color: 'hover:text-gray-700', url: 'https://github.com/kishore180923' },
    { icon: <FaLinkedin />, name: 'LinkedIn', color: 'hover:text-blue-600', url: 'https://www.linkedin.com/in/kishore-k-4297a0293/' },
    { icon: <FaTwitter />, name: 'Twitter', color: 'hover:text-sky-400', url: '#' },
    { icon: <FaEnvelope />, name: 'Email', color: 'hover:text-indigo-500', url: 'mailto:kishorekannan703@gmail.com' }
  ];

  return (
    <footer className="bg-white text-gray-800 pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Quick Links */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 font-sans"
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-4">
              {['Home', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredItem(item)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center text-lg text-gray-600 hover:text-purple-600 transition-colors duration-300"
                  >
                    <motion.span
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 mr-3"
                      animate={{
                        scale: hoveredItem === item ? [1, 1.5, 1] : 1,
                        opacity: hoveredItem === item ? [1, 0.5, 1] : 1
                      }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    />
                    <span className="relative overflow-hidden">
                      <span className="block group-hover:-translate-y-full transition-transform duration-500">
                        {item}
                      </span>
                      <span className="absolute left-0 top-0 text-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        {item}
                      </span>
                    </span>
                    <motion.span
                      className="ml-2 opacity-0 group-hover:opacity-100 text-purple-400"
                      initial={{ x: -10 }}
                      animate={{ x: hoveredItem === item ? [0, 5, 0] : 0 }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 font-sans"
            >
              Get In Touch
            </motion.h3>
            <ul className="space-y-5">
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg mr-3">
                  <FaEnvelope className="text-gray-600 text-lg group-hover:text-purple-600" />
                </div>
                <a
                  href="mailto:kishorekannan703@gmail.com"
                  className="hover:text-purple-600 transition-colors duration-300"
                >
                  kishorekannan703@gmail.com
                </a>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="hover:text-purple-600 transition-colors duration-300">+91 8248854157</span>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span className="hover:text-purple-600 transition-colors duration-300">Erode, Tamil Nadu, India</span>
              </motion.li>
            </ul>
          </div>

          {/* Social Media - Modern Design */}
          <div className="space-y-6 md:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 font-sans"
            >
              Let's Connect
            </motion.h3>

            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-wrap gap-6 mt-8">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    className="relative group"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    onHoverStart={() => setHoveredSocial(social.name)}
                    onHoverEnd={() => setHoveredSocial(null)}
                  >
                    <motion.a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-500 text-2xl ${social.color} transition-colors duration-300 flex flex-col items-center`}
                      whileHover={{
                        scale: 1.2,
                        transition: { type: 'spring', stiffness: 400 }
                      }}
                    >
                      {social.icon}
                      <motion.span
                        className="absolute -bottom-6 text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        {social.name}
                      </motion.span>
                    </motion.a>
                    <AnimatePresence>
                      {hoveredSocial === social.name && (
                        <motion.span
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              className="mt-12 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4 className="text-lg font-medium text-gray-700">Subscribe to my newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-gray-500">
            &copy; {currentYear} My Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms', 'Cookies'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-500 hover:text-purple-600 transition-colors"
                whileHover={{
                  scale: 1.05,
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                  textDecorationColor: '#9333ea'
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
