import React from 'react';
import { FileText, Download, Eye, ExternalLink, ShieldAlert } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-20 border-t border-slate-200/50 dark:border-dark-border/40 relative">
      <div className="glow-orb-secondary top-1/2 left-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-brand-primary dark:text-brand-secondary uppercase tracking-widest bg-indigo-500/10 dark:bg-brand-secondary/10 px-3 py-1.5 rounded-full inline-block">
            05 . Resume
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-dark-text mt-3 tracking-tight">
            Curriculum Vitae
          </h3>
          <p className="text-base text-slate-500 dark:text-dark-muted mt-3">
            Review my professional background directly in the browser or download a copy for offline evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Embedded Resume Viewer (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-8 glass-card rounded-2xl p-4 border-slate-200/60 dark:border-dark-border/60 shadow-md h-[650px] relative overflow-hidden">
            <iframe 
              src="/ShivangResume.pdf#toolbar=0&navpanes=0&scrollbar=1" 
              className="w-full h-full rounded-xl" 
              title="Shivang Kumar Nayak Resume"
              style={{ border: 'none' }}
            ></iframe>
          </div>

          {/* Right Block: PDF Stats & Direct Action Card */}
          <div className="col-span-1 lg:col-span-4 flex flex-col justify-between space-y-6 text-left">
            
            <div className="glass-card rounded-2xl p-6 border-slate-200/60 dark:border-dark-border/60 shadow-sm flex-1 flex flex-col justify-between">
              
              <div className="space-y-6">
                
                {/* Header Icon */}
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-indigo-500/10 dark:bg-brand-secondary/10 text-indigo-650 dark:text-brand-secondary">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-850 dark:text-dark-text text-lg">
                      ShivangResume.pdf
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-dark-muted font-mono">
                      PDF Document • 1 Page
                    </p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-slate-200/50 dark:border-dark-border/40 pt-4 text-xs sm:text-sm text-slate-600 dark:text-dark-muted leading-relaxed">
                  <p>
                    My resume outlines a strong technical background in Java, relational &amp; non-relational database design, and cloud container automation.
                  </p>
                  <div className="p-3 rounded-xl bg-slate-100/60 dark:bg-dark-bg/60 border border-slate-200/40 dark:border-dark-border/30 text-xs text-slate-500 dark:text-dark-muted">
                    <span className="font-semibold text-slate-700 dark:text-dark-text block mb-1">Key Profile Areas:</span>
                    • Object Oriented Programming &amp; DSA<br />
                    • Spring Boot Backend Development<br />
                    • AWS EKS &amp; Jenkins DevSecOps Pipelines<br />
                    • Database Optimizations (Cassandra, Redis)
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <a 
                  href="/ShivangResume.pdf"
                  download="Shivang_Kumar_Nayak_Resume.pdf"
                  className="w-full py-3.5 px-4 rounded-xl bg-brand-primary text-white font-medium hover:bg-indigo-700 hover:shadow-glow-primary transition-all duration-200 transform active:scale-98 flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Resume</span>
                </a>
                
                <a 
                  href="/ShivangResume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border text-slate-700 dark:text-dark-text font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 flex items-center justify-center space-x-2 lg:hidden"
                >
                  <Eye className="w-4 h-4" />
                  <span>Open PDF in Tab</span>
                </a>
                
                <a 
                  href="https://github.com/Shivang14d04"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-350 font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify LeetCode/GitHub</span>
                </a>
              </div>

            </div>

            {/* Mobile Fallback Warning */}
            <div className="lg:hidden p-4 rounded-2xl bg-amber-500/5 border border-amber-500/15 text-[11px] leading-relaxed text-amber-600 dark:text-amber-400 flex items-start space-x-2">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
              <span>For mobile browsers, we recommend downloading or opening the PDF directly in a new tab for optimal rendering and layout consistency.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
