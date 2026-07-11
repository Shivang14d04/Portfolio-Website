import React from 'react';
import { Folder, ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  const getTechTagClass = (tech: string): string => {
    const t = tech.toLowerCase();
    
    // Databases (Rose)
    if (t.includes('cassandra') || t.includes('postgre') || t.includes('redis') || 
        t.includes('mysql') || t.includes('mongo') || t.includes('memcached') || 
        t.includes('sql') || t.includes('database')) {
      return 'bg-rose-55/60 dark:bg-rose-950/20 text-rose-700 dark:text-rose-300 border-rose-100 dark:border-rose-900/30';
    }
    
    // DevOps / Cloud / Infra (Teal)
    if (t.includes('aws') || t.includes('eks') || t.includes('terraform') || 
        t.includes('kubernetes') || t.includes('k8s') || t.includes('jenkins') || 
        t.includes('docker') || t.includes('sonarqube') || t.includes('trivy') || 
        t.includes('s3') || t.includes('nginx') || t.includes('ipfs') || 
        t.includes('ethereum') || t.includes('solidity') || t.includes('open source') || 
        t.includes('git') || t.includes('scaffold')) {
      return 'bg-teal-50/70 dark:bg-teal-950/25 text-teal-700 dark:text-teal-300 border-teal-100/80 dark:border-teal-900/30';
    }
    
    // Tools / Security / Design (Amber)
    if (t.includes('security') || t.includes('oauth') || t.includes('jwt') || 
        t.includes('aop') || t.includes('concurrency') || t.includes('documentation') || 
        t.includes('ui consistency') || t.includes('postman') || t.includes('feign') || 
        t.includes('gateway') || t.includes('eureka') || t.includes('rest api')) {
      return 'bg-amber-50/70 dark:bg-amber-950/25 text-amber-700 dark:text-amber-300 border-amber-100/80 dark:border-amber-900/30';
    }
    
    // Languages & Frameworks (Indigo)
    return 'bg-indigo-50/70 dark:bg-indigo-950/25 text-indigo-700 dark:text-indigo-300 border-indigo-100/80 dark:border-indigo-900/30';
  };

  return (
    <section id="projects" className="py-24 border-t border-slate-200/40 dark:border-dark-border/30 relative overflow-hidden">
      {/* Subtle Stripe-like gradient blobs */}
      <div className="glow-orb-secondary -top-12 -left-12 opacity-80 animate-pulse-slow"></div>
      <div className="glow-orb-cyan bottom-12 -right-12 opacity-80 animate-pulse-slow"></div>
      <div className="glow-orb-primary top-1/2 left-1/3 opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-mono text-brand-primary dark:text-brand-secondary uppercase tracking-widest bg-brand-primary/10 dark:bg-brand-secondary/10 px-3 py-1.5 rounded-full inline-block">
            03 . Projects
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-dark-text mt-3 tracking-tight">
            Projects
          </h3>
          <p className="text-sm text-slate-500 dark:text-dark-muted mt-2">
            A comprehensive showcase of my backend, DevOps, and full-stack software systems.
          </p>
        </div>

        {/* Responsive Repository Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon & External Links */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#1E293B]/40 text-[#94A3B8] border border-slate-200/50 dark:border-dark-border/40 group-hover:text-[#6366F1] transition-colors duration-200">
                    <Folder className="w-5 h-5" />
                  </div>
                  
                  {/* Links */}
                  <div className="flex items-center space-x-2">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-1.5 rounded-lg text-slate-400 dark:text-dark-muted hover:text-slate-800 dark:hover:text-dark-text transition-colors duration-200"
                      aria-label="GitHub Link"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-1.5 rounded-lg text-slate-400 dark:text-dark-muted hover:text-[#6366F1] dark:hover:text-brand-secondary transition-colors duration-200"
                        aria-label="Live Demo Link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h4 className="text-lg font-bold text-slate-800 dark:text-dark-text group-hover:text-[#6366F1] dark:group-hover:text-brand-secondary transition-colors duration-200 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-lg border transition-all duration-200 ${getTechTagClass(tech)}`}
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
