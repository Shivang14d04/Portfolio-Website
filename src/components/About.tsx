import React from 'react';
import { User, FileText, Target, Smile } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-200/40 dark:border-dark-border/30 relative overflow-hidden">
      <div className="glow-orb-secondary top-12 left-1/4 animate-pulse-slow"></div>
      <div className="glow-orb-cyan bottom-12 right-12 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-brand-primary dark:text-brand-secondary uppercase tracking-widest bg-brand-primary/10 dark:bg-brand-secondary/10 px-3 py-1.5 rounded-full inline-block">
            01 . Profile
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-dark-text mt-3 tracking-tight">
            About Me
          </h3>
          <p className="text-base text-slate-500 dark:text-dark-muted mt-3">
            A comprehensive look at my professional focus, technical summary, career interests, and background.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
          
          {/* Card 1: Professional Introduction */}
          <div className="glass-card glass-card-hover rounded-3xl p-6">
            <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-slate-200/50 dark:border-dark-border/40">
              <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#1E293B]/40 text-[#94A3B8] border border-slate-200/50 dark:border-dark-border/40 shadow-sm">
                <User className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-800 dark:text-dark-text text-lg tracking-tight">
                Introduction
              </h4>
            </div>
            <p className="text-slate-600 dark:text-dark-muted leading-relaxed text-sm">
              I am a passionate software engineer specializing in backend engineering and DevOps. I focus on building high-quality, scalable applications and robust cloud infrastructure.
            </p>
          </div>

          {/* Card 2: Short Summary */}
          <div className="glass-card glass-card-hover rounded-3xl p-6">
            <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-slate-200/50 dark:border-dark-border/40">
              <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#1E293B]/40 text-[#94A3B8] border border-slate-200/50 dark:border-dark-border/40 shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-800 dark:text-dark-text text-lg tracking-tight">
                Short Summary
              </h4>
            </div>
            <p className="text-slate-600 dark:text-dark-muted leading-relaxed text-sm">
              Proficient in Java, Spring Boot, REST APIs, and microservices architecture. Experienced in working with relational databases, Cassandra, Redis, Docker containerization, and automated CI/CD pipelines.
            </p>
          </div>

          {/* Card 3: Career Interests */}
          <div className="glass-card glass-card-hover rounded-3xl p-6">
            <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-slate-200/50 dark:border-dark-border/40">
              <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#1E293B]/40 text-[#94A3B8] border border-slate-200/50 dark:border-dark-border/40 shadow-sm">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-800 dark:text-dark-text text-lg tracking-tight">
                Career Interests
              </h4>
            </div>
            <p className="text-slate-600 dark:text-dark-muted leading-relaxed text-sm">
              Deeply interested in distributed systems engineering, database optimization, cloud architecture, and automation. Passionate about solving complex backend scale challenges and improving system latency.
            </p>
          </div>

          {/* Card 4: Brief Personal Description */}
          <div className="glass-card glass-card-hover rounded-3xl p-6">
            <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-slate-200/50 dark:border-dark-border/40">
              <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#1E293B]/40 text-[#94A3B8] border border-slate-200/50 dark:border-dark-border/40 shadow-sm">
                <Smile className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-800 dark:text-dark-text text-lg tracking-tight">
                Brief Personal Description
              </h4>
            </div>
            <p className="text-slate-600 dark:text-dark-muted leading-relaxed text-sm">
              Currently pursuing a Bachelor of Technology in Information Technology at Indian Institute of Information Technology, Bhopal.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
