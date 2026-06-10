import React from 'react';
import { Mail, FileText, Send, Terminal, Code2, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, HashnodeIcon, CodeforcesIcon, CodechefIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { profile } = portfolioData;

  const stats = [
    { label: 'LeetCode Rating', value: '1840', desc: 'Top 7.94% Global', icon: LeetcodeIcon, color: 'text-amber-500' },
    { label: 'Codeforces Rating', value: '1256', desc: 'Pupil status', icon: CodeforcesIcon, color: 'text-sky-500' },
    { label: 'Codechef Rating', value: '1586', desc: 'Peak rating', icon: CodechefIcon, color: 'text-emerald-500' },
    { label: 'DSA Problems Solved', value: '800+', desc: 'Across Platforms', icon: ShieldCheck, color: 'text-indigo-500' }
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Visual background accents */}
      <div className="glow-orb-primary -top-12 -left-12"></div>
      <div className="glow-orb-secondary top-1/2 right-12"></div>
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Intro text */}
          <div className="lg:col-span-7 space-y-6 text-left animate-fade-in">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 dark:bg-brand-secondary/10 border border-indigo-500/20 dark:border-brand-secondary/20 text-brand-primary dark:text-brand-secondary text-sm font-mono">
              <Terminal className="w-4 h-4 animate-pulse" />
              <span>Available for Summer / Fall Internships</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-brand-secondary dark:to-teal-300 bg-clip-text text-transparent">{profile.name}</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200">
              {profile.title}
            </h2>

            <p className="text-lg text-slate-600 dark:text-dark-muted max-w-xl leading-relaxed">
              {profile.subtitle} {profile.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-brand-primary text-white font-medium hover:bg-indigo-700 hover:shadow-glow-primary transition-all duration-300 transform hover:scale-[1.02] flex items-center space-x-2"
              >
                <span>View My Projects</span>
              </a>
              <a 
                href="/ShivangResume.pdf"
                download="Shivang_Kumar_Nayak_Resume.pdf"
                className="px-6 py-3.5 rounded-xl bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border text-slate-800 dark:text-dark-text font-medium hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 transform hover:scale-[1.02] flex items-center space-x-2"
              >
                <FileText className="w-4 h-4 text-indigo-500 dark:text-brand-secondary" />
                <span>Get Resume</span>
              </a>
              <a 
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium transition-all duration-300 flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <a 
                href={profile.socials.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-xl bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-brand-secondary border border-slate-200/50 dark:border-dark-border/80 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a 
                href={profile.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-xl bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-brand-secondary border border-slate-200/50 dark:border-dark-border/80 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${profile.email}`}
                className="p-3 rounded-xl bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-brand-secondary border border-slate-200/50 dark:border-dark-border/80 transition-all duration-300"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href={profile.socials.leetcode} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-xl bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-brand-secondary border border-slate-200/50 dark:border-dark-border/80 transition-all duration-300"
                aria-label="LeetCode Profile"
              >
                <LeetcodeIcon className="w-5 h-5" />
              </a>
              <a 
                href={profile.socials.codeforces} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-xl bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-brand-secondary border border-slate-200/50 dark:border-dark-border/80 transition-all duration-300"
                aria-label="Codeforces Profile"
              >
                <CodeforcesIcon className="w-5 h-5" />
              </a>
              <a 
                href={profile.socials.codechef} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-xl bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-brand-secondary border border-slate-200/50 dark:border-dark-border/80 transition-all duration-300"
                aria-label="Codechef Profile"
              >
                <CodechefIcon className="w-5 h-5" />
              </a>
              <a 
                href={profile.socials.hashnode} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-xl bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-brand-secondary border border-slate-200/50 dark:border-dark-border/80 transition-all duration-300"
                aria-label="Hashnode Blog"
              >
                <HashnodeIcon className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Interactive Shell / Terminal Window */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-[#0f1422] shadow-xl overflow-hidden animate-slide-in">
              {/* Window Controls Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-[#0b0e16] border-b border-slate-200/80 dark:border-dark-border/80">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-dark-muted font-mono">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>bash - shivang@iiit-bhopal:~</span>
                </div>
                <div className="w-12"></div> {/* Spacer */}
              </div>

              {/* Terminal Content */}
              <div className="p-5 font-mono text-sm space-y-4 text-left leading-relaxed text-slate-700 dark:text-slate-300">
                <div>
                  <span className="text-green-500">shivang@iiit-bhopal:~$</span> <span className="text-slate-800 dark:text-white font-semibold">neofetch</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 py-1 border-y border-slate-200/60 dark:border-dark-border/40">
                  <div className="col-span-1 text-indigo-500 dark:text-brand-secondary font-bold flex flex-col justify-center items-center">
                    <Code2 className="w-12 h-12" />
                    <span className="text-xs mt-1 text-center">Indian Institute of Information Technology, Bhopal</span>
                  </div>
                  
                  <div className="col-span-2 text-xs space-y-1 text-slate-600 dark:text-slate-400">
                    <p><span className="text-indigo-600 dark:text-indigo-400">OS:</span> Linux (Ubuntu x64)</p>
                    <p><span className="text-indigo-600 dark:text-indigo-400">Host:</span> Software Engineer (DevOps)</p>
                    <p><span className="text-indigo-600 dark:text-indigo-400">Kernel:</span> Java 21, Spring Boot</p>
                    <p><span className="text-indigo-600 dark:text-indigo-400">Shell:</span> Bash Scripting / Python</p>
                    <p><span className="text-indigo-600 dark:text-indigo-400">Infra:</span> AWS, K8s, Terraform, Jenkins</p>
                    <p><span className="text-indigo-600 dark:text-indigo-400">DBs:</span> PostgreSQL, Cassandra, Redis</p>
                  </div>
                </div>

                <div>
                  <span className="text-green-500">shivang@iiit-bhopal:~$</span> <span className="text-slate-800 dark:text-white font-semibold">cat interests.json</span>
                </div>

                <div className="text-xs text-indigo-600 dark:text-indigo-400 pl-4 bg-slate-50 dark:bg-dark-bg/40 p-2.5 rounded-lg border border-slate-200 dark:border-dark-border/30">
                  <p>&#123;</p>
                  <p>&nbsp;&nbsp;&quot;focus&quot;: &quot;Distributed Systems &amp; APIs&quot;,</p>
                  <p>&nbsp;&nbsp;&quot;currentStudy&quot;: &quot;System Design &amp; DBMS&quot;,</p>
                  <p>&nbsp;&nbsp;&quot;devOpsGoal&quot;: &quot;High-Availability Deployments&quot;</p>
                  <p>&#125;</p>
                </div>
                
                <div className="flex items-center space-x-1.5">
                  <span className="text-green-500">shivang@iiit-bhopal:~$</span>
                  <span className="w-2.5 h-4 bg-indigo-500 dark:bg-brand-secondary animate-pulse inline-block"></span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid Footer */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
          {stats.map((s, index) => {
            const IconComponent = s.icon;
            return (
              <div 
                key={index} 
                className="glass-card rounded-2xl p-5 hover:border-brand-primary/30 flex items-center space-x-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className={`p-3 rounded-xl bg-slate-100 dark:bg-[#182030] ${s.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 dark:text-dark-muted uppercase tracking-wider">{s.label}</p>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-dark-text mt-0.5">{s.value}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
