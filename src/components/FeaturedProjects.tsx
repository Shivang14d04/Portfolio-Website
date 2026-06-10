import React from 'react';
import { ExternalLink, Cpu, Database, Network, GitPullRequest, ArrowRight, Shield } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const FeaturedProjects: React.FC = () => {
  const { featuredProjects } = portfolioData;

  // Render a custom CSS-based architecture diagram for each project
  const renderArchitectureDiagram = (title: string) => {
    switch (title.toLowerCase()) {
      case 'messaging system':
        return (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-bg/60 border border-slate-200/50 dark:border-dark-border/40 font-mono text-[11px] leading-relaxed text-slate-500 dark:text-dark-muted space-y-2 mt-4 select-none">
            <p className="text-xs font-bold text-slate-700 dark:text-dark-text border-b border-slate-200/50 dark:border-dark-border/30 pb-1 flex items-center space-x-1.5">
              <Network className="w-3.5 h-3.5 text-indigo-500" />
              <span>DISTRIBUTED DB DATA FLOW</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-1.5 text-center">
              <div className="px-2 py-1 rounded bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 border border-indigo-500/25 w-full sm:w-auto">
                React Frontend
              </div>
              <div className="text-slate-400 dark:text-slate-600">──(JWT Auth)──&gt;</div>
              <div className="px-2 py-1 rounded bg-purple-500/10 dark:bg-purple-500/20 text-purple-750 dark:text-purple-400 border border-purple-500/25 w-full sm:w-auto">
                Spring Boot API
              </div>
              <div className="text-slate-400 dark:text-slate-600">──(Partition Key)──&gt;</div>
              <div className="px-2 py-1 rounded bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 w-full sm:w-auto">
                Cassandra (4 Tables)
              </div>
            </div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center justify-center space-x-1 border-t border-slate-200/40 dark:border-dark-border/20 pt-1.5">
              <span>Atomic counter syncs:</span>
              <span className="text-emerald-500 dark:text-brand-secondary">Inbox</span>
              <span>•</span>
              <span className="text-emerald-500 dark:text-brand-secondary">Sent</span>
              <span>•</span>
              <span className="text-emerald-500 dark:text-brand-secondary">Trash</span>
            </div>
          </div>
        );
      case 'shopgrid e-commerce':
        return (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-bg/60 border border-slate-200/50 dark:border-dark-border/40 font-mono text-[11px] leading-relaxed text-slate-500 dark:text-dark-muted space-y-2 mt-4 select-none">
            <p className="text-xs font-bold text-slate-700 dark:text-dark-text border-b border-slate-200/50 dark:border-dark-border/30 pb-1 flex items-center space-x-1.5">
              <Database className="w-3.5 h-3.5 text-emerald-500" />
              <span>CACHING STRATEGY &amp; API MONITORING</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-5 items-center gap-1.5 py-1 text-center">
              <div className="col-span-1 px-2 py-1 rounded bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 border border-indigo-500/25">
                Client API
              </div>
              <div className="col-span-1 text-slate-400 dark:text-slate-600 text-xs">─(Lookups)─&gt;</div>
              <div className="col-span-1 px-2 py-1 rounded bg-red-500/10 dark:bg-red-500/20 text-red-700 dark:text-red-400 border border-red-500/25">
                Redis Cache
              </div>
              <div className="col-span-1 text-slate-400 dark:text-slate-600 text-xs">─(Miss/Evict)─&gt;</div>
              <div className="col-span-1 px-2 py-1 rounded bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25">
                PostgreSQL DB
              </div>
            </div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center justify-between border-t border-slate-200/40 dark:border-dark-border/20 pt-1.5">
              <span className="flex items-center"><Shield className="w-3 h-3 text-red-500 mr-1" /> JWT Security Auditing</span>
              <span className="text-indigo-500 dark:text-brand-secondary font-semibold">Aspect-Oriented Logs (AOP)</span>
            </div>
          </div>
        );
      case 'cosmicview space platform':
        return (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-bg/60 border border-slate-200/50 dark:border-dark-border/40 font-mono text-[11px] leading-relaxed text-slate-500 dark:text-dark-muted space-y-2 mt-4 select-none">
            <p className="text-xs font-bold text-slate-700 dark:text-dark-text border-b border-slate-200/50 dark:border-dark-border/30 pb-1 flex items-center space-x-1.5">
              <Cpu className="w-3.5 h-3.5 text-sky-500" />
              <span>CI/CD DEVSECOPS BLUEPRINT</span>
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-1.5 py-1 text-center text-[9px] font-semibold">
              <div className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                Code Commit
              </div>
              <div className="text-slate-400">─&gt;</div>
              <div className="px-1.5 py-0.5 rounded bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/25">
                SonarQube Gate
              </div>
              <div className="text-slate-400">─&gt;</div>
              <div className="px-1.5 py-0.5 rounded bg-red-500/10 dark:bg-red-500/20 text-red-700 dark:text-red-400 border border-red-500/25">
                Trivy CVE Scan
              </div>
              <div className="text-slate-400">─&gt;</div>
              <div className="px-1.5 py-0.5 rounded bg-sky-500/10 dark:bg-sky-500/20 text-sky-750 dark:text-sky-450 border border-sky-500/25">
                Docker &amp; EKS
              </div>
            </div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center justify-between border-t border-slate-200/40 dark:border-dark-border/20 pt-1.5">
              <span>Terraform IaC Cluster Control</span>
              <span className="text-sky-500 dark:text-brand-secondary font-semibold">AWS S3 State Locking</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-200/50 dark:border-dark-border/40 relative">
      <div className="glow-orb-secondary top-1/3 right-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-brand-primary dark:text-brand-secondary uppercase tracking-widest bg-indigo-500/10 dark:bg-brand-secondary/10 px-3 py-1.5 rounded-full inline-block">
            03 . Projects
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-dark-text mt-3 tracking-tight">
            Featured Projects
          </h3>
        </div>

        {/* Large Layout Project List */}
        <div className="space-y-16">
          {featuredProjects.map((project, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-3xl p-6 sm:p-8 border-slate-200/60 dark:border-dark-border/60 hover:border-brand-primary/20 dark:hover:border-brand-secondary/20 shadow-md hover:shadow-glow-primary transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left"
            >
              
              {/* Left Column: Title, Stack Badges, Description, and Key Features */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Title and Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/50 dark:border-dark-border/40 pb-4">
                  <div>
                    <span className="text-xs font-mono text-indigo-600 dark:text-brand-secondary font-bold uppercase tracking-wider">
                      Featured Project {idx + 1}
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-dark-text mt-1">
                      {project.title}
                    </h4>
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex items-center space-x-3">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-755 text-slate-700 dark:text-dark-muted hover:text-indigo-650 dark:hover:text-brand-secondary border border-slate-200/50 dark:border-dark-border/60 transition-all duration-200"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-650 dark:text-brand-secondary border border-indigo-500/20 transition-all duration-200 flex items-center space-x-1 text-sm font-semibold"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Descriptions */}
                <div className="space-y-3">
                  <p className="text-base font-medium text-slate-700 dark:text-slate-200 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-dark-muted leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Key Features Bullet Points */}
                <div className="space-y-2.5">
                  <h5 className="text-xs font-mono text-slate-400 dark:text-dark-muted uppercase tracking-widest font-semibold flex items-center space-x-1.5">
                    <GitPullRequest className="w-3.5 h-3.5" />
                    <span>Technical Implementations</span>
                  </h5>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-dark-muted">
                    {project.keyFeatures.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-indigo-500 dark:text-brand-secondary mt-0.5 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Right Column: Architectural Highlights and Custom Schema Diagram */}
              <div className="lg:col-span-5 h-full flex flex-col justify-between space-y-6 lg:border-l lg:border-slate-200/50 lg:dark:border-dark-border/40 lg:pl-8">
                
                {/* Architecture Highlights */}
                <div className="space-y-4">
                  <h5 className="text-xs font-mono text-slate-400 dark:text-dark-muted uppercase tracking-widest font-semibold">
                    System Design Attributes
                  </h5>
                  
                  <div className="space-y-3">
                    {project.architectureHighlights?.map((highlight, hIdx) => (
                      <div 
                        key={hIdx} 
                        className="p-3.5 rounded-xl bg-slate-100/40 dark:bg-[#151c2d]/40 border border-slate-200/40 dark:border-dark-border/30 text-xs text-slate-600 dark:text-slate-400"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Custom CSS Diagram */}
                <div>
                  <h5 className="text-[10px] font-mono text-slate-400 dark:text-dark-muted uppercase tracking-widest font-semibold mb-2">
                    System Architecture Schema
                  </h5>
                  {renderArchitectureDiagram(project.title)}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
