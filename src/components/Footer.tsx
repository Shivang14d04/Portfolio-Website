import React from 'react';
import { Terminal, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-[#0b0e16] border-t border-slate-200 dark:border-dark-border py-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Headline */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <div className="flex items-center space-x-2 text-slate-800 dark:text-dark-text">
              <div className="p-1.5 rounded-lg bg-indigo-600/10 dark:bg-brand-secondary/10 text-brand-primary dark:text-brand-secondary">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="font-sans font-bold text-lg tracking-tight">
                shivang<span className="text-brand-primary dark:text-brand-secondary">.dev</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-dark-muted font-medium max-w-xs leading-relaxed">
              Backend systems development, database scaling, and DevOps cloud orchestration.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a 
              href={profile.socials.github} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-lg bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-500 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-brand-secondary transition-colors duration-200 shadow-sm"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a 
              href={profile.socials.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-lg bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-500 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-brand-secondary transition-colors duration-200 shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a 
              href={`mailto:${profile.email}`} 
              className="p-2.5 rounded-lg bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-500 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-brand-secondary transition-colors duration-200 shadow-sm"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Return to Top Button */}
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-550 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-brand-secondary transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-200/60 dark:border-dark-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono text-slate-400 dark:text-dark-muted text-center sm:text-left">
            &copy; {currentYear} Shivang Kumar Nayak. All rights reserved.
          </p>
          <div className="flex space-x-6 text-[11px] font-mono text-slate-400 dark:text-dark-muted">
            <span>Built with React + TS + Tailwind</span>
            <span>•</span>
            <span>Indian Institute of Information Technology, Bhopal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
