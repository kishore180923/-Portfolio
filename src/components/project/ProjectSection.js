import React from 'react';
import { CodeBracketIcon, EyeIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with cart functionality, user authentication, and payment processing.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/images/ecommerce-thumbnail.jpg",
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://yourapp.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Productivity application for managing tasks with drag-and-drop interface and team collaboration features.",
    tech: ["React", "Firebase", "Tailwind CSS", "DnD"],
    image: "/images/taskapp-thumbnail.jpg",
    github: "https://github.com/yourusername/task-manager",
    live: "https://tasks.yourapp.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather forecasting application with interactive maps and location-based services.",
    tech: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
    image: "/images/Weather Dashboard.png",
    github: "https://github.com/yourusername/weather-dashboard",
    live: "https://weather.yourapp.com"
  }
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
            My Work
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my selected works. Each project represents a unique challenge and creative solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project image with always-visible description */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent p-6 flex items-end">
                  <div>
                    <p className="text-white text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
                {/* Live demo badge */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                >
                  Live Demo <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                </a>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2.5 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-all duration-300 group/github"
                  >
                    <CodeBracketIcon className="h-5 w-5 mr-2 text-gray-600 group-hover/github:text-gray-900 transition-colors" />
                    <span className="font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-sm hover:shadow-md group/demo"
                  >
                    <EyeIcon className="h-5 w-5 mr-2 text-white/90 group-hover/demo:text-white transition-colors" />
                    <span className="font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 hover:shadow-sm transition-all duration-300 hover:border-gray-400"
          >
            View All Projects
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;