import { useState } from 'react';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Apps with React 18",
      excerpt: "Explore the new features in React 18 and how they can improve your development workflow.",
      category: "Web Development",
      date: "May 15, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Tailwind CSS vs. Traditional CSS: A Comparison",
      excerpt: "We compare the utility-first approach of Tailwind with traditional CSS methodologies.",
      category: "CSS",
      date: "April 28, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "The Future of Frontend Development in 2023",
      excerpt: "Predictions and trends that will shape frontend development in the coming year.",
      category: "Industry Trends",
      date: "April 10, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

  const categories = ['All', 'Web Development', 'CSS', 'Industry Trends'];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Animation variants for blog cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id ="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Latest Articles
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Discover cutting-edge insights on web development and industry trends
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <AnimatePresence>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="flex items-center mr-4">
                      <FiCalendar className="mr-1.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <FiClock className="mr-1.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-indigo-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <motion.button 
                      whileHover={{ x: 5 }}
                      className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300"
                    >
                      Read more <FiArrowRight className="ml-1.5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* View All Button */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg transition-all duration-300"
          >
            View All Articles
            <FiArrowRight className="ml-2" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;