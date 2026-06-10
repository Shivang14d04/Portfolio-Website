import React from 'react';
import { Folder, ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const GithubGrid: React.FC = () => {
  const { githubProjects } = portfolioData;

  return (
    <section className="py-16 border-t border-slate-200/50 dark:border-dark-border/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Header */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-dark-text tracking-tight">
            Additional Projects
          </h3>
        </div>

        {/* Responsive Repository Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {githubProjects.map((project, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-2xl p-6 border-slate-200/50 dark:border-dark-border/50 hover:border-brand-primary/20 dark:hover:border-brand-secondary/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon & External Links */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-border text-indigo-500 dark:text-brand-secondary group-hover:bg-indigo-550/10 transition-colors duration-200">
                    <Folder className="w-5 h-5" />
                  </div>
                  
                  {/* Links */}
                  <div className="flex items-center space-x-2">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-1.5 rounded-lg text-slate-400 dark:text-dark-muted hover:text-slate-855 dark:hover:text-dark-text transition-colors duration-200"
                      aria-label="GitHub Link"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-1.5 rounded-lg text-slate-400 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-brand-secondary transition-colors duration-200"
                        aria-label="Live Demo Link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h4 className="text-lg font-bold text-slate-850 dark:text-dark-text group-hover:text-indigo-650 dark:group-hover:text-brand-secondary transition-colors duration-200 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-450 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h4>

                {/* Project Description */}
                <p className="text-xs sm:text-sm text-slate-500 dark:text-dark-muted mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Badges Footer */}
              <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-200/50 dark:border-dark-border/40">
                {project.techStack.map((tech, techIdx) => (
                  <span 
                    key={techIdx} 
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-dark-border/60 text-slate-500 dark:text-slate-400 border border-slate-200/30 dark:border-slate-800/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
