import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

// Importing images from the assets folder
import reactIcon from '../assets/react.png';
import jsIcon from '../assets/js.webp';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import gitIcon from '../assets/git.png';
import vsCodeIcon from '../assets/vs-code.png';
import nodeJsIcon from '../assets/node-js.png';
import mongoIcon from '../assets/mongo-db.png';
import postmanIcon from '../assets/postman.webp';
import css3Icon from '../assets/css3.png';


const techIcons = [
{ src: reactIcon, style: 'top-4 left-8', name: 'React' },
{ src: jsIcon, style: 'top-16 right-10', name: 'JavaScript' },
{ src: htmlIcon, style: 'bottom-6 left-8', name: 'HTML' },
{ src: cssIcon, style: 'bottom-20 right-6', name: 'Tailwind CSS' },
{ src: gitIcon, style: 'top-28 left-1/2', name: 'Git' },
{ src: nodeJsIcon, style: 'bottom-8 right-1/4', name: 'Node.js' },
{ src: mongoIcon, style: 'top-6 right-1/3', name: 'MongoDB' },
{ src: postmanIcon, style: 'bottom-10 left-1/3', name: 'Postman' },
{ src: css3Icon, style: 'top-1/4 right-12', name: 'CSS3' },
];

// Map tech names to their corresponding icons for badges
const techBadgeIcons = {
  React: reactIcon,
  JavaScript: jsIcon,
  HTML5: htmlIcon,
  CSS3: cssIcon,
};

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollDirection, setScrollDirection] = useState('down');
  const containerRef = useRef(null);
  const lastScrollY = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const xBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start(scrollDirection === 'down' ? 'visibleDown' : 'visibleUp');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView, scrollDirection]);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX - window.innerWidth / 2,
      y: e.clientY - window.innerHeight / 2,
    });
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visibleDown: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    visibleUp: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -45 },
    visibleDown: (i) => ({
      scale: 1,
      opacity: 0.8,
      rotate: 0,
      transition: {
        delay: i * 0.2,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    }),
    visibleUp: (i) => ({
      scale: 1,
      opacity: 0.8,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 120,
        damping: 8,
      },
    }),
    hover: {
      scale: 1.2,
      opacity: 1,
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.5 },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visibleDown: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    visibleUp: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'backOut',
      },
    },
    hover: {
      y: -3,
      transition: {
        yoyo: Infinity,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visibleDown: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    }),
    visibleUp: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        type: 'spring',
        stiffness: 120,
      },
    }),
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-white to-indigo-50 flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Particle.js Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          y: yBg,
          x: xBg,
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#6366f1',
              },
              links: {
                color: '#818cf8',
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 60,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </motion.div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16 z-10" ref={ref}>
        {/* Left Content Section */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-4 sm:space-y-6"
          initial="hidden"
          animate={controls}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            variants={itemVariants}
            whileHover={{
              backgroundPosition: '100%',
              transition: { duration: 1.5, repeat: Infinity, repeatType: 'reverse' },
            }}
            style={{
              backgroundSize: '200% 100%',
              backgroundPosition: '0%',
            }}
          >
            I'm Kishore
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800"
            variants={itemVariants}
          >
            A{' passionate '}
            <motion.span 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            >
              Web Developer.
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed mx-auto md:mx-0"
            variants={itemVariants}
          >
            I craft beautiful, responsive web experiences using modern technologies, with a passion for designing intuitive user interfaces that make an impact.
          </motion.p>
          <motion.div
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm sm:text-base"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              Let's Talk
            </motion.a>
            <motion.a
              href="#"
              className="border-2 border-indigo-600 text-indigo-600 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full hover:bg-indigo-50 transition-all duration-300 hover:shadow-md flex items-center gap-2 text-sm sm:text-base"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download CV
            </motion.a>
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div
            className="mt-8 sm:mt-12 flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start"
          >
            {['React', 'JavaScript', 'HTML5', 'CSS3'].map((tech, i) => (
              <motion.span
                key={tech}
                className="bg-indigo-100 text-indigo-800 text-xs sm:text-sm font-medium px-2 sm:px-2.5 py-0.5 rounded-full flex items-center"
                variants={badgeVariants}
                custom={i}
                initial="hidden"
                animate={controls}
                whileHover={{
                  y: -3,
                  scale: 1.1,
                  backgroundColor: '#e0e7ff',
                  transition: { type: 'spring', stiffness: 300 },
                }}
              >
                <img
                  src={techBadgeIcons[tech]}
                  className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                  alt={tech}
                />
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="flex-1 flex justify-center relative"
          initial="hidden"
          animate={controls}
        >
          <div className="relative w-64 sm:w-80 md:w-96">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 blur-3xl w-full h-full transform -translate-x-1/4 translate-y-1/4"
              variants={{
                hidden: { scale: 0.5, opacity: 0 },
                visibleDown: {
                  scale: 1,
                  opacity: 0.2,
                  transition: { duration: 1, ease: 'easeOut' },
                },
                visibleUp: {
                  scale: 1,
                  opacity: 0.2,
                  transition: { duration: 0.6, ease: 'easeOut' },
                },
              }}
            />
            {/* Uncomment and update the profile image path if needed */}
            {/* <motion.img
              src="/my_-removebg-preview.png"
              alt="Kishore Profile"
              className="w-full object-cover relative z-10 drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300"
              whileHover={{ 
                scale: 1.02,
                rotate: [0, 2, -2, 0],
                transition: { duration: 0.8 },
              }}
            /> */}
          </div>
          {techIcons.map((icon, index) => (
            <motion.div
              key={index}
              className={`absolute ${icon.style} flex flex-col items-center group hidden md:flex`}
              animate={{
                x: mousePosition.x * (0.02 * (index + 1)),
                y: mousePosition.y * (0.02 * (index + 1)),
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            >
              <motion.img
                src={icon.src}
                alt={icon.name}
                className="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 group-hover:scale-110"
                custom={index}
                variants={iconVariants}
                initial="hidden"
                animate={controls}
                whileHover="hover"
              />
              <motion.span 
                className="mt-1 text-xs text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1],
                  transition: { delay: index * 0.2 + 0.5 },
                }}
              >
                {icon.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Home;