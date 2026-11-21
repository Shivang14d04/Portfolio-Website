export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 0 to 100
  }[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  bullets: string[];
  tags: string[];
}

export interface Achievement {
  title: string;
  details: string;
}

export const portfolioData = {
  profile: {
    name: "Shivang Kumar Nayak",
    title: "Backend Engineer | Cloud & DevOps",
    subtitle: "Building scalable applications, distributed systems, and cloud-native infrastructure.",
    bio: "I am a B.Tech Information Technology student at Indian Institute of Information Technology, Bhopal, specializing in backend engineering and DevOps. Passionate about building robust backend architectures with Java and Spring Boot, optimizing databases (PostgreSQL, Cassandra, Redis), and orchestrating containerized environments (Docker, Kubernetes) via automated CI/CD pipelines.",
    email: "kshivang679@gmail.com",
    phone: "+91 7409735442",
    location: "Bhopal, India",
    socials: {
      github: "https://github.com/Shivang14d04",
      linkedin: "https://www.linkedin.com/in/shivang-kumar-64aa6428b",
      leetcode: "https://leetcode.com/u/shivang_1207/",
      codechef: "https://www.codechef.com/users/shivang_1207",
      hashnode: "https://hashnode.com/@shivang12",
      twitter: "https://x.com/Shivang141204"
    }
  },
  education: {
    institution: "Indian Institute of Information Technology, Bhopal",
    degree: "Bachelor of Technology in Information Technology",
    duration: "August 2023 - May 2027",
    coursework: [
      "Object Oriented Programming",
      "Database Management Systems",
      "Data Structures and Algorithms",
      "System Design"
    ]
  },
  skills: [
    {
      title: "Backend Development",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 88 },
        { name: "Spring AI", level: 80 },
        { name: "REST APIs", level: 92 },
        { name: "Microservices", level: 82 },
        { name: "Maven", level: 80 },
        { name: "Hibernate/JPA", level: 85 }
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 75 },
        { name: "AWS (EKS, S3)", level: 80 },
        { name: "Terraform", level: 78 },
        { name: "Jenkins", level: 82 },
        { name: "CI/CD (GitHub Actions)", level: 85 },
        { name: "Linux", level: 85 },
        { name: "Grafana", level: 80 }
      ]
    },
    {
      title: "Databases & Caching",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "Apache Cassandra", level: 80 },
        { name: "Redis", level: 82 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 82 },
        { name: "TypeScript", level: 80 },
        { name: "SQL", level: 88 },
        { name: "Bash Scripting", level: 75 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 80 },
        { name: "HTML & CSS", level: 85 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 75 }
      ]
    },
    {
      title: "Engineering Tools",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "IntelliJ IDEA", level: 90 },
        { name: "VS Code", level: 85 },
        { name: "Prometheus", level: 70 }
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      title: "Distributed Rate Limiter",
      description: "A distributed, per-user rate-limiting system using Redis as a centralized state store with Lua scripting for atomic token bucket operations. Deployed across multiple Spring Boot instances behind Nginx load balancer with Prometheus & Grafana observability.",
      techStack: ["Java 21", "Spring Boot", "Redis", "Lua", "Nginx", "Docker", "Docker Compose", "Prometheus", "Grafana", "Micrometer", "Maven"],
      githubUrl: "https://github.com/Shivang14d04/Distributed-rate-limiter",
      featured: true
    },
    {
      title: "Banking & Money Transfer System",
      description: "A backend banking application providing REST APIs for account management, deposits, withdrawals, and atomic money transfers with pessimistic locking, consistent lock ordering, and transactional integrity using Spring Data JPA and PostgreSQL.",
      techStack: ["Java 21", "Spring Boot", "Spring Data JPA", "Hibernate", "PostgreSQL", "Docker", "Docker Compose", "JUnit 5", "Mockito", "Maven"],
      githubUrl: "https://github.com/Shivang14d04/Banking-application"
    },
    {
      title: "Messaging System",
      description: "Decoupled messaging platform managing end-to-end messaging workflows, atomic unread-count, and core mailbox operations.",
      techStack: ["Java", "Spring Boot", "Apache Cassandra", "Spring Security", "OAuth2", "React", "JWT"],
      githubUrl: "https://github.com/Shivang14d04/Messaging-System"
    },
    {
      title: "ShopGrid E-Commerce",
      description: "Layered enterprise e-commerce backend platform featuring cached product catalog queries, JWT transaction security, and Spring AOP performance monitoring.",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Spring Security", "Spring Data JPA", "JWT", "Spring AOP"],
      githubUrl: "https://github.com/Shivang14d04/ShopGrid"
    },
    {
      title: "CosmicView Space Platform",
      description: "Production-ready DevOps showcase deploying a space exploration platform on AWS EKS via automated Jenkins CI/CD and Terraform infrastructure.",
      techStack: ["AWS", "EKS", "Terraform", "Kubernetes", "Jenkins", "Docker", "SonarQube", "Trivy", "S3"],
      githubUrl: "https://github.com/Shivang14d04/Cosmic-View"
    },
    {
      title: "Microservice Quiz App",
      description: "Robust, decentralized Quiz Application built using Spring Boot Microservices architecture with Eureka Service Registry, API Gateway, and OpenFeign client communication.",
      techStack: ["Java", "Spring Boot", "Spring Cloud", "PostgreSQL", "Hibernate", "Maven"],
      githubUrl: "https://github.com/Shivang14d04/Microservice-QuizApp"
    },
    {
      title: "B-Drive",
      description: "Decentralized cloud storage application on Ethereum with IPFS and Scaffold-ETH 2. Upload, view, and manage files securely on-chain.",
      techStack: ["TypeScript", "Solidity", "Ethereum", "IPFS", "Scaffold-ETH 2"],
      githubUrl: "https://github.com/Shivang14d04/B-Drive",
      liveUrl: "https://b-drive-nextjs.vercel.app/"
    },
    {
      title: "DockerStack",
      description: "Containerized Java application environment orchestrating 5 services: Nginx, Tomcat, MySQL, Memcached, and RabbitMQ via multi-stage Dockerfiles and Docker Compose.",
      techStack: ["Docker", "Java", "Tomcat", "MySQL", "Nginx", "RabbitMQ", "Memcached"],
      githubUrl: "https://github.com/Shivang14d04/dockerized-web-app"
    },
    {
      title: "Conf-Book",
      description: "A high-performance conference room booking system written in Go, implementing concurrency patterns for scheduling validations.",
      techStack: ["Go", "Concurrency", "REST API", "SQL"],
      githubUrl: "https://github.com/Shivang14d04/Conf-Book"
    },
    {
      title: "HackDevs Teammate Finder",
      description: "Collaboration platform that helps hackathon participants discover teammates based on matching technical skills and interests.",
      techStack: ["JavaScript", "NodeJS", "Express", "MongoDB", "CSS"],
      githubUrl: "https://github.com/Shivang14d04/HackDevs"
    }
  ] as Project[],
  experience: [
    {
      company: "Kestra, FOSSASIA, OpenZeppelin",
      role: "Open Source Contributor",
      location: "Remote",
      duration: "Dec 2024 - Present",
      bullets: [
        "Improved UI consistency in Kestra by implementing a global spacing system and resolving styling issues across 15+ core pages, enhancing maintainability and visual coherence.",
        "Contributed UI fixes and usability enhancements to FOSSASIA Open Event Frontend, improving component behavior and user experience across key event management workflows.",
        "Enhanced OpenZeppelin Contracts documentation through merged open-source contributions, improving clarity, accuracy, and developer experience for smart contract developers."
      ],
      tags: ["Open Source", "UI Consistency", "Git/GitHub", "Smart Contracts", "Documentation"]
    }
  ] as Experience[],
  achievements: [
    {
      title: "LeetCode Contest Rating: 1859 (Knight)",
      details: "Achieved Knight badge, ranking in the top tier globally among active competitive programmers."
    },
    {
      title: "Codechef Rating: 1586",
      details: "Active competitor in Codechef challenges and contests with a peak rating of 1586."
    },
    {
      title: "800+ DSA Problems Solved",
      details: "Demonstrated strong algorithmic problem-solving ability in Java across LeetCode, GFG, and Hackerrank."
    },
    {
      title: "Hackathon Coordination",
      details: "Led and coordinated teams in multiple national hackathons, shipping projects under tight deadlines."
    }
  ] as Achievement[]
};
