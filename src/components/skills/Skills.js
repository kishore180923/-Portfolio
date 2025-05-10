import React from 'react';
import { motion } from 'framer-motion';

// Importing icons from assets/icons folder
import reactIcon from '../assets/react.png';
import jsIcon from '../assets/js.webp';
import cssIcon from '../assets/css.png';
import gitIcon from '../assets/git.png';
import htmlIcon from '../assets/html.png';
import nodeJsIcon from '../assets/node-js.png';
import css3Icon from '../assets/css3.png';
import postmanIcon from '../assets/postman.webp';
import mongoIcon from '../assets/mongo-db.png';

const skills = [
  { name: 'React', image: reactIcon, style: 'top-0 left-1/2', color: 'bg-blue-100', size: 'w-14 h-14' },
  { name: 'JavaScript', image: jsIcon, style: 'top-16 left-10', color: 'bg-yellow-100', size: 'w-14 h-14' },
  { name: 'Tailwind CSS', image: cssIcon, style: 'bottom-20 left-16', color: 'bg-blue-50', size: 'w-14 h-14' },
  { name: 'Git', image: gitIcon, style: 'bottom-20 right-12', color: 'bg-orange-50', size: 'w-14 h-14' },
  { name: 'HTML5', image: htmlIcon, style: 'top-10 right-24', color: 'bg-orange-50', size: 'w-14 h-14' },
  { name: 'Node.js', image: nodeJsIcon, style: 'top-28 left-1/3', color: 'bg-green-50', size: 'w-14 h-14' },
  { name: 'CSS3', image: css3Icon, style: 'bottom-32 left-1/4', color: 'bg-blue-50', size: 'w-12 h-12' },
  { name: 'Postman', image: postmanIcon, style: 'bottom-10 left-1/2', color: 'bg-teal-50', size: 'w-16 h-16' },
{ name: 'MongoDB', image: mongoIcon, style: 'top-40 right-32', color: 'bg-green-50', size: 'w-16 h-16' },
];

// Your component rendering logic goes below

const SkillSection = () => {
  return (
    <section  id="skills" className=
   
    "relative py-20 overflow-hidden bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-10 gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* <img 
              src="portfolio-animations.gif" 
              alt="Coding animation" 
              className="w-64 h-64 mx-auto md:mx-0 object-contain rounded-lg "
            /> */}
          </motion.div>
          
          <motion.h2 
            className="text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Expertise</span>
          </motion.h2>
          
          <motion.p 
  className="text-gray-600 text-lg leading-relaxed"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  As a <span className="text-blue-600 font-medium">passionate fresher</span> with <span className="text-purple-600 font-medium">7 months</span> of hands-on experience, I’ve been building <span className="text-pink-600 font-medium">efficient</span> and <span className="text-purple-600 font-medium">user-friendly</span> web applications. I'm constantly learning and evolving to grow as a modern web developer.
</motion.p>

          
          <motion.div
            className="flex flex-wrap gap-3 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-medium flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              Let's Collaborate
            </motion.button>
            
            <motion.button 
              className="bg-transparent border border-blue-500/50 text-blue-600 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-medium flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download CV
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-gray-700">Available for work</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700">20+ Projects</span>
            </div>
          </motion.div>
        </div>

        {/* Right Floating Skills */}
        <div className="md:w-1/2 relative h-[500px] w-full z-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`absolute ${skill.style} ${skill.color} rounded-full p-3 flex items-center justify-center border border-gray-200 shadow-md`}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ 
                delay: index * 0.07, 
                type: 'spring', 
                stiffness: 100,
                damping: 10
              }}
              whileHover={{ 
                scale: 1.15,
                boxShadow: "0 0 20px rgba(99, 102, 241, 0.2)"
              }}
            >
              <motion.img
                src={skill.image}
                alt={skill.name}
                className={`${skill.size} object-contain`}
                whileHover={{ 
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
                title={skill.name}
              />
            </motion.div>
          ))}
          
         
        
          
         
        </div>

        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Floating abstract shapes */}
          <motion.div 
            className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-blue-100 blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute right-1/3 bottom-1/4 w-48 h-48 rounded-full bg-purple-100 blur-xl"
            animate={{
              y: [0, -40, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute left-20 top-1/3 w-32 h-32 rounded-full bg-pink-100 blur-xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Animated blob */}
          <motion.svg 
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10"
            animate={{
              rotate: [0, 15, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <path 
              fill="#3B82F6" 
              d="M35.7,-59C43.9,-57.2,46.5,-42.7,56.2,-30.8C65.9,-18.9,82.7,-9.4,87.5,2.8C92.3,15,85,29.9,75.1,41.5C65.2,53.1,52.7,61.3,39.7,68.8C26.8,76.3,13.4,83.1,3.4,77.3C-6.6,71.4,-13.2,52.9,-25.5,45C-37.7,37,-55.6,39.8,-63.5,34C-71.5,28.3,-69.3,14.2,-64.4,2.8C-59.5,-8.5,-51.8,-16.9,-47.2,-28.4C-42.6,-40,-41.2,-54.5,-33.9,-56.8C-26.6,-59.1,-13.3,-49.3,0.2,-49.7C13.8,-50.1,27.6,-60.9,35.7,-59Z" 
              transform="translate(100 100)" 
            />
          </motion.svg>
          
          {/* Small floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className={`absolute rounded-full ${i % 3 === 0 ? 'bg-blue-200' : i % 2 === 0 ? 'bg-purple-200' : 'bg-pink-200'}`}
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 40],
                x: [0, (Math.random() - 0.5) * 40],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;