import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active link based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    setActiveLink('Home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];
  
  

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-6xl
        ${scrolled
          ? 'dark:bg-gray-900/95 bg-white/95 shadow-xl backdrop-blur-md'
          : 'dark:bg-gray-900/80 bg-white/80 backdrop-blur-sm'
        } rounded-full`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with custom font and enhanced hover/active effects */}
          <a
            href="#home"
            className="group cursor-pointer"
            onClick={handleLogoClick}
          >
            <span className="relative">
            <span className="text-3xl font-semibold tracking-tight 
  bg-gradient-to-r from-white to-blue-500 
  bg-clip-text text-transparent 
  transition-all duration-500 ease-in-out 
  hover:from-blue-400 hover:to-white 
  font-sans">
  Kishore
</span>


              <span className={`absolute left-0 bottom-0 h-0.5 w-full 
                transition-all duration-300 ${activeLink === 'Home' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 w-0 group-hover:w-full'}`}
              />
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveLink(item.name)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group
                  ${activeLink === item.name
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                <span className="relative z-10">{item.name}</span>
                {activeLink === item.name ? (
                  <span 
                    className="absolute left-1/2 bottom-0 h-0.5 w-8 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 
                    rounded-full transition-all duration-300"
                  />
                ) : (
                  <span 
                    className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 
                    rounded-full transition-all duration-300 group-hover:w-full"
                  />
                )}
                <span 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full 
                  bg-blue-500/10 dark:bg-purple-500/10 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 
                  transition-all duration-300"
                />
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              className="relative px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full 
              font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-105 
              overflow-hidden group"
            >
              <span className="relative z-10">Let's Talk</span>
              <span 
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300"
              />
              <span 
                className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 
                bg-gradient-to-r from-transparent to-white/50 opacity-40 group-hover:animate-shine 
                transition-all duration-500"
              />
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 
              transition-all duration-300 hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-600 relative"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <span className="text-xl font-bold transform rotate-180 transition-transform duration-300">✕</span>
              ) : (
                <>
                  <span className="text-lg font-bold transition-opacity duration-300">☰</span>
                  <span className="absolute inset-0 rounded-full border-2 border-transparent hover:border-blue-500/30 
                    animate-ping opacity-0 group-hover:opacity-100 transition-all duration-700"></span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`} >
          <div className="py-2 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setIsOpen(false);
                  setActiveLink(item.name);
                }}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 relative
                  overflow-hidden group
                  ${activeLink === item.name
                    ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                  }`}
              >
                <span className="relative z-10 flex items-center">
                  <span 
                    className={`w-2 h-2 rounded-full mr-3 transition-all duration-300
                      ${activeLink === item.name 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                        : 'bg-gray-400 dark:bg-gray-600 group-hover:bg-blue-500 scale-90'
                      }`}
                  />
                  {item.name}
                </span>
                <span 
                  className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 
                  transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white 
              rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg 
              hover:shadow-blue-500/30 relative overflow-hidden group"
            >
              <span className="relative z-10">Let's Talk</span>
              <span 
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;                 