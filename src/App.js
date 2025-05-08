import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import SkillsPage from './components/skills/Skills';
import ProjectSection from './components/project/ProjectSection';
import ExperienceAndCertifications from './components/ExperienceAndCertifications/ExperienceAndCertifications';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
import BlogSection from './components/blogSection/BlogSection';

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <SkillsPage />
      <ProjectSection />
      <ExperienceAndCertifications />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
