import React from 'react';
import { Server, Database, Cloud, Code, Layout, Settings, Boxes, Brain } from 'lucide-react';

interface SkillItem {
  name: string;
  iconUrl?: string;
  isCustomSvg?: boolean;
  icon?: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Backend',
      skills: [
        { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'Spring Boot', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
        { name: 'Spring AI', icon: <Brain className="w-7 h-7" /> },
        { name: 'REST APIs', isCustomSvg: true },
        { name: 'Microservices', icon: <Boxes className="w-7 h-7" /> },
        { name: 'Hibernate', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg' },
        { name: 'Maven', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg' },
        { name: 'GitHub Actions', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg' },
        { name: 'Linux', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
        { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Terraform', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg' },
        { name: 'Jenkins', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' },
        { name: 'Prometheus', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg' },
        { name: 'Grafana', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
        { name: 'Apache Cassandra', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cassandra/cassandra-original.svg' },
        { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
        { name: 'Redis', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' }
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'HTML', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
        { name: 'Postman', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
        { name: 'IntelliJ IDEA', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg' },
        { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' }
      ]
    }
  ];

  // Icon mapping helper for categories
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'backend':
        return <Server className="w-4.5 h-4.5 text-indigo-500" />;
      case 'databases':
        return <Database className="w-4.5 h-4.5 text-emerald-500" />;
      case 'devops & cloud':
        return <Cloud className="w-4.5 h-4.5 text-sky-500" />;
      case 'programming languages':
        return <Code className="w-4.5 h-4.5 text-amber-500" />;
      case 'frontend':
        return <Layout className="w-4.5 h-4.5 text-rose-500" />;
      default:
        return <Settings className="w-4.5 h-4.5 text-teal-500" />;
    }
  };

  return (
    <section id="skills" className="py-16 border-t border-slate-200/50 dark:border-dark-border/40 relative">
      <div className="glow-orb-primary -bottom-12 -right-12"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-mono text-brand-primary dark:text-brand-secondary uppercase tracking-widest bg-indigo-500/10 dark:bg-brand-secondary/10 px-3 py-1.5 rounded-full inline-block">
            02 . Skills
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-dark-text mt-3 tracking-tight">
            Technical Stack &amp; Skills
          </h3>
          <p className="text-sm text-slate-500 dark:text-dark-muted mt-2">
            An extensive breakdown of my core technical strengths across system development, databases, and DevOps methodologies.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, catIdx) => (
            <div 
              key={catIdx} 
              className="glass-card rounded-xl p-4 sm:p-5 border-slate-200/60 dark:border-dark-border/60 hover:border-indigo-500/20 dark:hover:border-brand-secondary/20 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              
              {/* Category Header */}
              <div className="flex items-center space-x-2.5 mb-4 pb-2 border-b border-slate-200/50 dark:border-dark-border/40">
                <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-[#182030] shadow-sm">
                  {getCategoryIcon(category.title)}
                </div>
                <h4 className="font-bold text-slate-800 dark:text-dark-text text-base tracking-tight">
                  {category.title}
                </h4>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 gap-y-5 gap-x-3">
                {category.skills.map((skill, skIdx) => (
                  <div 
                    key={skIdx} 
                    className="flex flex-col items-center justify-center p-1 rounded-lg transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/40 group"
                  >
                    <div className="w-9 h-9 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-brand-secondary transition-colors duration-200">
                      {skill.icon ? (
                        skill.icon
                      ) : skill.isCustomSvg ? (
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="w-7 h-7 text-slate-700 dark:text-dark-text group-hover:text-indigo-600 dark:group-hover:text-brand-secondary transition-colors duration-200"
                        >
                          <path d="m18 8 4 4-4 4M6 8l-4 4 4 4M2 12h20" />
                        </svg>
                      ) : (
                        <img 
                          src={skill.iconUrl} 
                          alt={skill.name}
                          className={`w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110 ${skill.name.toLowerCase() === 'github' || skill.name.toLowerCase() === 'aws' ? 'dark:invert' : ''}`}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-dark-muted mt-1.5 text-center group-hover:text-slate-800 dark:group-hover:text-dark-text transition-colors duration-200 leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
