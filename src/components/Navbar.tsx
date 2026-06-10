import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  // Track scroll position for glass background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Offset for sticky navbar
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-dark-border/50 py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button 
          onClick={() => handleScrollTo('home')}
          className="flex items-center space-x-2 text-slate-800 dark:text-dark-text hover:text-brand-primary dark:hover:text-brand-secondary transition-colors duration-200 focus:outline-none"
        >
          <div className="p-1.5 rounded-lg bg-indigo-600/10 dark:bg-brand-secondary/10 text-brand-primary dark:text-brand-secondary border border-indigo-600/20 dark:border-brand-secondary/20 shadow-sm">
            <Terminal className="w-5 h-5" />
          </div>
          <span className="font-sans font-bold text-lg tracking-tight">
            shivang<span className="text-brand-primary dark:text-brand-secondary">.dev</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none ${
                activeSection === item.id
                  ? 'text-brand-primary dark:text-brand-secondary bg-indigo-600/5 dark:bg-brand-secondary/5 font-semibold'
                  : 'text-slate-600 dark:text-dark-muted hover:text-slate-900 dark:hover:text-dark-text hover:bg-slate-100 dark:hover:bg-dark-card/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Menu Burger Button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-dark-muted hover:text-slate-950 dark:hover:text-dark-text hover:bg-slate-100 dark:hover:bg-dark-card/50 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[60px] bg-white/95 dark:bg-dark-bg/95 backdrop-blur-lg border-b border-slate-200 dark:border-dark-border transition-all duration-300 ease-in-out shadow-lg overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100 py-4' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`block w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                activeSection === item.id
                  ? 'text-brand-primary dark:text-brand-secondary bg-indigo-600/5 dark:bg-brand-secondary/5 font-semibold'
                  : 'text-slate-600 dark:text-dark-muted hover:text-slate-900 dark:hover:text-dark-text hover:bg-slate-100 dark:hover:bg-dark-card/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
