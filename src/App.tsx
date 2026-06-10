import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FeaturedProjects } from './components/FeaturedProjects';
import { GithubGrid } from './components/GithubGrid';
import { GithubDashboard } from './components/GithubDashboard';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  // Default theme is Dark Mode
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    // Default to dark theme as requested
    return true;
  });

  // Apply dark mode class to document element on changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-800 dark:text-dark-text transition-colors duration-350 flex flex-col font-sans antialiased overflow-x-hidden selection:bg-brand-primary/20">
      
      {/* Top sticky responsive Navbar with dark/light toggle */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      {/* Scrollable sections */}
      <main className="flex-grow">
        
        {/* Landingfold */}
        <Hero />
        
        {/* Education & timelines */}
        <About />
        
        {/* Compentency grids */}
        <Skills />
        
        {/* Custom Architecture layouts */}
        <FeaturedProjects />
        
        {/* Secondary project repository grid */}
        <GithubGrid />
        
        {/* Contribution calendar & stats */}
        <GithubDashboard darkMode={darkMode} />
        
        {/* Timeline work experience & certifications */}
        <Experience />
        

        
        {/* Recruiter contact form */}
        <Contact />
        
      </main>

      {/* Structured quick footer */}
      <Footer />
      
    </div>
  );
}

export default App;
