import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { profile } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    if (form && !form.checkValidity()) {
      form.reportValidity();
      e.preventDefault();
      return;
    }

    // Copy to clipboard fallback
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profile.email).catch(() => {});
    }
    
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const subject = encodeURIComponent(formData.subject || `Portfolio Contact - ${formData.name}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  );
  const mailtoUrl = `mailto:${profile.email}?subject=${subject}&body=${body}`;

  return (
    <section id="contact" className="py-24 border-t border-slate-200/40 dark:border-dark-border/30 relative overflow-hidden">
      <div className="glow-orb-primary -bottom-10 -right-10 animate-pulse-slow"></div>
      <div className="glow-orb-secondary top-10 left-10 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-brand-primary dark:text-brand-secondary uppercase tracking-widest bg-brand-primary/10 dark:bg-brand-secondary/10 px-3 py-1.5 rounded-full inline-block">
            06 . Contact
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-dark-text mt-3 tracking-tight">
            Get In Touch
          </h3>
          <p className="text-base text-slate-500 dark:text-dark-muted mt-3">
            I am currently open to internship, full-time opportunities, and collaborative backend/infrastructure projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch text-left">
          
          {/* Left Block: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6 flex-1">
              <h4 className="text-xl font-bold text-slate-800 dark:text-dark-text flex items-center space-x-2.5">
                <MessageSquare className="w-5 h-5 text-[#6366F1]" />
                <span>Contact Channels</span>
              </h4>
              
              <div className="space-y-4">
                
                {/* Email card */}
                <div className="glass-card glass-card-hover rounded-3xl p-5 flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#1E293B]/40 text-[#94A3B8] border border-slate-200/50 dark:border-dark-border/40 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-dark-muted uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a 
                      href={`mailto:${profile.email}`} 
                      className="font-bold text-slate-800 dark:text-dark-text hover:text-[#6366F1] dark:hover:text-[#a78bfa] transition-colors duration-200 break-all"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                {/* Phone card */}
                <div className="glass-card glass-card-hover rounded-3xl p-5 flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#1E293B]/40 text-[#94A3B8] border border-slate-200/50 dark:border-dark-border/40 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-dark-muted uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a 
                      href={`tel:${profile.phone}`} 
                      className="font-bold text-slate-800 dark:text-dark-text hover:text-[#6366F1] dark:hover:text-[#a78bfa] transition-colors duration-200"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                {/* Location card */}
                <div className="glass-card glass-card-hover rounded-3xl p-5 flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#1E293B]/40 text-[#94A3B8] border border-slate-200/50 dark:border-dark-border/40 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-dark-muted uppercase tracking-wider block">
                      Primary Location
                    </span>
                    <span className="font-bold text-slate-800 dark:text-dark-text">
                      {profile.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Note detail */}
            <div className="p-4 rounded-3xl bg-indigo-50/20 dark:bg-indigo-950/10 border border-indigo-150/40 dark:border-indigo-900/30 text-xs text-slate-500 dark:text-dark-muted leading-relaxed">
              Submitting the contact form constructs a formatted draft in your default client, making it easy to send a message directly.
            </div>

          </div>

          {/* Right Block: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              
              <form id="contact-form" onSubmit={(e) => e.preventDefault()} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-dark-muted font-mono uppercase tracking-wider">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Shivang Kumar" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-bg/50 text-slate-800 dark:text-dark-text placeholder-slate-400 focus:border-brand-primary dark:focus:border-brand-secondary focus:outline-none transition-colors duration-200" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-dark-muted font-mono uppercase tracking-wider">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="recruiter@company.com" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-bg/50 text-slate-800 dark:text-dark-text placeholder-slate-400 focus:border-brand-primary dark:focus:border-brand-secondary focus:outline-none transition-colors duration-200" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-500 dark:text-dark-muted font-mono uppercase tracking-wider">
                    Subject Line
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Backend Internship Application / Proposal" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-bg/50 text-slate-800 dark:text-dark-text placeholder-slate-400 focus:border-brand-primary dark:focus:border-brand-secondary focus:outline-none transition-colors duration-200" 
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-dark-muted font-mono uppercase tracking-wider">
                    Detailed Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Shivang, I reviewed your Messaging System project and LeetCode contest rating, and would like to discuss..." 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-bg/50 text-slate-800 dark:text-dark-text placeholder-slate-400 focus:border-brand-primary dark:focus:border-brand-secondary focus:outline-none transition-colors duration-200 resize-none" 
                  ></textarea>
                </div>

                <a 
                  href={isSent ? undefined : mailtoUrl}
                  onClick={handleLinkClick}
                  className={`w-full py-4 px-6 rounded-xl text-white font-semibold transition-all duration-300 transform active:scale-98 hover:-translate-y-0.5 shadow-lg flex items-center justify-center space-x-2 ${
                    isSent 
                      ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20 hover:shadow-emerald-500/30' 
                      : 'bg-gradient-to-r from-[#6366F1] to-[#7C3AED] hover:from-[#4F46E5] hover:to-[#6D28D9] shadow-indigo-500/20 hover:shadow-indigo-500/30'
                  } cursor-pointer`}
                >
                  {isSent ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Draft Opened &amp; Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </a>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
