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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email subject and body for recruiter convenience
    const subject = encodeURIComponent(formData.subject || `Portfolio Contact - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open standard mailto link
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/50 dark:border-dark-border/40 relative">
      <div className="glow-orb-primary -bottom-10 -right-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-brand-primary dark:text-brand-secondary uppercase tracking-widest bg-indigo-500/10 dark:bg-brand-secondary/10 px-3 py-1.5 rounded-full inline-block">
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
              <h4 className="text-xl font-bold text-slate-855 dark:text-dark-text flex items-center space-x-2.5">
                <MessageSquare className="w-5 h-5 text-indigo-500" />
                <span>Contact Channels</span>
              </h4>
              
              <div className="space-y-4">
                
                {/* Email card */}
                <div className="glass-card rounded-2xl p-5 border-slate-200/50 dark:border-dark-border/50 flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-dark-border text-indigo-550 dark:text-brand-secondary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-dark-muted uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a 
                      href={`mailto:${profile.email}`} 
                      className="font-bold text-slate-750 dark:text-dark-text hover:text-indigo-600 dark:hover:text-brand-secondary transition-colors duration-200 break-all"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                {/* Phone card */}
                <div className="glass-card rounded-2xl p-5 border-slate-200/50 dark:border-dark-border/50 flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-dark-border text-indigo-550 dark:text-brand-secondary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-dark-muted uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a 
                      href={`tel:${profile.phone}`} 
                      className="font-bold text-slate-750 dark:text-dark-text hover:text-indigo-600 dark:hover:text-brand-secondary transition-colors duration-200"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                {/* Location card */}
                <div className="glass-card rounded-2xl p-5 border-slate-200/50 dark:border-dark-border/50 flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-dark-border text-indigo-550 dark:text-brand-secondary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-dark-muted uppercase tracking-wider block">
                      Primary Location
                    </span>
                    <span className="font-bold text-slate-750 dark:text-dark-text">
                      {profile.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Note detail */}
            <div className="p-4 rounded-2xl bg-indigo-500/5 dark:bg-brand-secondary/5 border border-indigo-500/10 dark:border-brand-secondary/10 text-xs text-slate-500 dark:text-dark-muted leading-relaxed">
              Submitting the contact form constructs a formatted draft in your default client, making it easy to send a message directly.
            </div>

          </div>

          {/* Right Block: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border-slate-200/60 dark:border-dark-border/60 shadow-md">
              
              <form onSubmit={handleSubmit} className="space-y-5">
                
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

                <button 
                  type="submit" 
                  className={`w-full py-4 px-6 rounded-xl text-white font-medium hover:shadow-glow-primary transition-all duration-300 transform active:scale-98 flex items-center justify-center space-x-2 ${
                    isSent 
                      ? 'bg-emerald-600 hover:bg-emerald-700 shadow-glow-secondary' 
                      : 'bg-brand-primary hover:bg-indigo-700'
                  }`}
                >
                  {isSent ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Email Client Loaded!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
