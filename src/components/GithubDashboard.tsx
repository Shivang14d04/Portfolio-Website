import React from 'react';
import { GitCommit, Star, Users, BookOpen, Activity } from 'lucide-react';

interface GithubDashboardProps {
  darkMode: boolean;
}

export const GithubDashboard: React.FC<GithubDashboardProps> = ({ darkMode }) => {

  // Select contribution graph color based on theme
  // Dark mode uses emerald (10b981), Light mode uses indigo (4f46e5)
  const chartColor = darkMode ? '10b981' : '4f46e5';
  const chartUrl = `https://ghchart.rshah.org/${chartColor}/shivang14d04`;

  const stats = [
    { label: 'Total Repositories', value: '43', icon: BookOpen, color: 'text-indigo-500' },
    { label: 'Starred Repos', value: '23', icon: Star, color: 'text-amber-500' },
    { label: 'Followers', value: '3', icon: Users, color: 'text-emerald-500' },
    { label: 'Followings', value: '4', icon: Users, color: 'text-rose-500' }
  ];

  const languages = [
    { name: 'Java', percent: 45, color: 'bg-red-500' },
    { name: 'TypeScript', percent: 25, color: 'bg-indigo-500' },
    { name: 'Go', percent: 12, color: 'bg-sky-500' },
    { name: 'Solidity', percent: 10, color: 'bg-yellow-500' },
    { name: 'JavaScript/Python', percent: 8, color: 'bg-emerald-500' }
  ];

  return (
    <section className="py-16 border-t border-slate-200/50 dark:border-dark-border/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Header */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-dark-text tracking-tight flex items-center space-x-2.5">
            <Activity className="w-6 h-6 text-indigo-500" />
            <span>GitHub Contribution Dashboard</span>
          </h3>
          <p className="text-sm text-slate-500 dark:text-dark-muted mt-2">
            Real-time GitHub statistics and contribution velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Core Stats Grid & Language Percentages */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, idx) => {
                const IconComponent = s.icon;
                return (
                  <div 
                    key={idx} 
                    className="glass-card rounded-2xl p-4 border-slate-200/50 dark:border-dark-border/50 shadow-sm flex flex-col justify-between h-28"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-medium text-slate-400 dark:text-dark-muted uppercase tracking-wider">
                        {s.label}
                      </span>
                      <IconComponent className={`w-4 h-4 ${s.color}`} />
                    </div>
                    <div className="text-2xl font-extrabold text-slate-855 dark:text-dark-text mt-2">
                      {s.value}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Language Breakdown Card */}
            <div className="glass-card rounded-2xl p-5 border-slate-200/50 dark:border-dark-border/50 shadow-sm space-y-4">
              <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-dark-muted uppercase tracking-widest">
                Language Breakdown
              </h4>
              
              <div className="space-y-3.5">
                {languages.map((lang, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-center text-xs font-medium text-slate-600 dark:text-slate-400">
                      <span>{lang.name}</span>
                      <span>{lang.percent}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-dark-border rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${lang.color}`} 
                        style={{ width: `${lang.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Block: Live Contributions Chart */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Live Chart Container */}
            <div className="glass-card rounded-2xl p-6 border-slate-200/50 dark:border-dark-border/50 shadow-sm space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/50 dark:border-dark-border/40 pb-4">
                <div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-dark-text">
                    Contributions Heatmap
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-dark-muted mt-0.5">
                    Live feed mapped directly from @shivang14d04 profile
                  </p>
                </div>
                
                {/* Active Tag */}
                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-brand-secondary text-[10px] font-mono border border-emerald-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
                  <span>LIVE GRAPH CONNECTED</span>
                </div>
              </div>

              {/* Chart Image wrapper */}
              <div className="overflow-x-auto pb-2 flex justify-center">
                <div className="min-w-[700px] px-2">
                  <img 
                    src={chartUrl} 
                    alt="Shivang's GitHub Contribution Calendar" 
                    className="w-full h-auto max-h-[140px] select-none pointer-events-none filter dark:brightness-110"
                    loading="lazy" 
                  />
                </div>
              </div>

              {/* Footer explanation */}
              <div className="text-[11px] text-slate-400 dark:text-dark-muted leading-relaxed flex items-center space-x-2 border-t border-slate-200/50 dark:border-dark-border/40 pt-4">
                <GitCommit className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Contributions indicate repository commits, issue resolutions, and open-source pull requests across workspace domains.</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
