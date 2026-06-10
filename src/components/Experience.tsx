import React from 'react';
import { Calendar, Briefcase, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experience, achievements } = portfolioData;

  return (
    <section id="experience" className="py-20 border-t border-slate-200/50 dark:border-dark-border/40 relative">
      <div className="glow-orb-primary -top-12 -left-12"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-brand-primary dark:text-brand-secondary uppercase tracking-widest bg-indigo-500/10 dark:bg-brand-secondary/10 px-3 py-1.5 rounded-full inline-block">
            04 . Experience
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-dark-text mt-3 tracking-tight">
            History &amp; Accomplishments
          </h3>
          <p className="text-base text-slate-500 dark:text-dark-muted mt-3">
            A review of my open-source industry experience and competitive coding achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Block: Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="text-xl font-bold text-slate-800 dark:text-dark-text flex items-center space-x-2.5 mb-6 pl-2">
              <Briefcase className="w-5 h-5 text-indigo-500" />
              <span>Work &amp; Contributions</span>
            </h4>

            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-6 before:w-[2px] before:bg-slate-200 dark:before:bg-dark-border">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-12 group">
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-[18px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-dark-bg border-[3.5px] border-indigo-500 dark:border-brand-secondary group-hover:border-indigo-650 dark:group-hover:border-indigo-400 transition-colors duration-250 z-10 shadow-sm"></div>
                  
                  {/* Experience Card */}
                  <div className="glass-card rounded-2xl p-6 border-slate-200/50 dark:border-dark-border/50 shadow-sm hover:border-indigo-550/20 dark:hover:border-brand-secondary/20 hover:shadow-md transition-all duration-300">
                    
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <div>
                        <span className="px-2 py-0.5 text-[10px] font-semibold font-mono rounded bg-indigo-500/10 text-indigo-600 dark:text-brand-secondary border border-indigo-500/10 mb-1.5 inline-block">
                          {exp.role}
                        </span>
                        <h5 className="font-extrabold text-slate-800 dark:text-dark-text text-lg leading-tight">
                          {exp.company}
                        </h5>
                      </div>
                      
                      <span className="flex items-center text-xs font-mono text-slate-400 dark:text-dark-muted font-medium bg-slate-50 dark:bg-dark-border/40 px-2.5 py-1 rounded-full border border-slate-200/30 dark:border-slate-800/30">
                        <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-xs text-indigo-650 dark:text-brand-secondary font-semibold font-mono mb-4">
                      {exp.location}
                    </p>

                    {/* Bullet Achievements */}
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-dark-muted leading-relaxed">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-brand-secondary mr-2 mt-0.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-200/50 dark:border-dark-border/40">
                      {exp.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="tech-badge">
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Block: Achievements List */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xl font-bold text-slate-800 dark:text-dark-text flex items-center space-x-2.5 mb-6 pl-2">
              <Award className="w-5 h-5 text-indigo-500" />
              <span>Certifications &amp; Ratings</span>
            </h4>

            <div className="grid grid-cols-1 gap-4">
              {achievements.map((ach, idx) => (
                <div 
                  key={idx} 
                  className="glass-card rounded-2xl p-5 border-slate-200/50 dark:border-dark-border/50 shadow-sm flex items-start space-x-4 hover:border-brand-primary/20 dark:hover:border-brand-secondary/20 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-dark-border text-indigo-500 dark:text-brand-secondary shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-slate-800 dark:text-dark-text leading-snug">
                      {ach.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-dark-muted leading-normal">
                      {ach.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View ATF Credentials callout */}
            <div className="p-5 rounded-2xl bg-indigo-500/5 dark:bg-brand-secondary/5 border border-indigo-500/10 dark:border-brand-secondary/10 flex items-center justify-between group">
              <div>
                <h5 className="text-sm font-bold text-slate-800 dark:text-dark-text">Advanced Technology Fellowship (ATF)</h5>
                <p className="text-xs text-slate-500 dark:text-dark-muted mt-0.5">Stage 2 candidate status verification link</p>
              </div>
              <a 
                href="https://github.com/shivang14d04" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-700 dark:text-brand-secondary group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-brand-secondary dark:group-hover:text-dark-bg transition-all duration-200 flex items-center shadow-sm"
                title="View ATF Credentials"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
