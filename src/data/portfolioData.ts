export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  keyFeatures: string[];
  architectureHighlights?: string[];
  githubUrl: string;
  liveUrl?: string;
  isFeatured?: boolean;
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
    email: "kshivang579@gmail.com",
    phone: "+91 7409735442",
    location: "Bhopal, India",
    socials: {
      github: "https://github.com/Shivang14d04",
      linkedin: "https://www.linkedin.com/in/shivang-kumar-64aa6428b",
      leetcode: "https://leetcode.com/u/shivang_1207/",
      codeforces: "https://codeforces.com/profile/Shivang14d04",
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
  featuredProjects: [
    {
      title: "Messaging System",
      description: "Decoupled messaging platform managing end-to-end messaging workflows, atomic unread-count, and core mailbox operations.",
      longDescription: "Engineered a production-ready, decoupled messaging application that utilizes a robust Spring Boot REST API for backend services and a React frontend. Designed high-performance, query-driven database architectures with Apache Cassandra to support instant low-latency message retrieval.",
      techStack: ["Java", "Spring Boot", "Apache Cassandra", "Spring Security", "OAuth2", "React", "JWT"],
      keyFeatures: [
        "Engineered a decoupled messaging platform using a Spring Boot REST API and React, managing end-to-end messaging workflows and core mailbox operations.",
        "Designed 4 query-driven Cassandra tables using partition keys, clustering keys, and counters, enabling scalable storage and low-latency message retrieval.",
        "Implemented JWT and GitHub OAuth2 authentication with Spring Security while maintaining atomic unread-count synchronization across 3 mailbox categories."
      ],
      architectureHighlights: [
        "Distributed Cassandra DB for highly scalable email storage without single points of failure.",
        "Stateless JWT authorization model keeping backend nodes horizontally scale-ready.",
        "Event-driven updates ensuring synchronization of unread statistics across mail categories."
      ],
      githubUrl: "https://github.com/Shivang14d04/Messaging-System",
      isFeatured: true
    },
    {
      title: "ShopGrid E-Commerce",
      description: "Layered enterprise e-commerce backend platform featuring cached product catalog queries, JWT transaction security, and Spring AOP performance monitoring.",
      longDescription: "Architected a solid, layered Spring Boot and Java 21 eCommerce backend utilizing relational database design and high-efficiency caching strategies to manage high concurrency on product lookups.",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Spring Security", "Spring Data JPA", "JWT", "Spring AOP"],
      keyFeatures: [
        "Architected a layered Spring Boot and Java 21 eCommerce backend using PostgreSQL and Spring Data JPA, ensuring clean separation of concerns for 50+ users.",
        "Reduced read latency by 45% by implementing a Redis and Spring Cache strategy with automated data eviction rules for product catalog lookups.",
        "Secured transactional workflows via JWT to cut unauthorized access by 55%, applying Spring AOP aspects to capture real-time performance metrics across core services."
      ],
      architectureHighlights: [
        "Layered Clean Architecture separating Controller, Service, and Repository layers.",
        "Write-through caching pattern with Redis for catalog reads and PostgreSQL for relational consistency.",
        "AOP Aspect intercepts to capture response times and service latency for prometheus analytics."
      ],
      githubUrl: "https://github.com/Shivang14d04/ShopGrid",
      isFeatured: true
    },
    {
      title: "CosmicView Space Platform",
      description: "Production-ready DevOps showcase deploying a space exploration platform on AWS EKS via automated Jenkins CI/CD and Terraform infrastructure.",
      longDescription: "A complete infrastructure-as-code and deployment pipeline project, establishing automated cloud systems for high availability and zero-downtime deployment.",
      techStack: ["AWS", "EKS", "Terraform", "Kubernetes", "Jenkins", "Docker", "SonarQube", "Trivy", "S3"],
      keyFeatures: [
        "Engineered a production-ready space exploration platform leveraging server-side rendering (SSR) and API caching to optimize performance for 90+ users.",
        "Implemented a 7-stage CI/CD pipeline using Jenkins, SonarQube, Docker, and Trivy, automating code quality checks, 2 vulnerability scans, image builds, and deployments.",
        "Provisioned a production-grade AWS EKS cluster using Terraform with remote state stored in S3, enabling state locking, infrastructure as code, and repeatable deployments."
      ],
      architectureHighlights: [
        "Infrastructure-as-Code (IaC) with modular Terraform configuration.",
        "Kubernetes Helm charts defining deployment, cluster autoscaling, and ingress mapping.",
        "DevSecOps static analysis integrated into the automated delivery pipeline."
      ],
      githubUrl: "https://github.com/Shivang14d04/Cosmic-View",
      isFeatured: true
    }
  ] as Project[],
  githubProjects: [
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
    },
    {
      title: "BlogCircle",
      description: "Full-stack blog web application with authentication, posts, image uploading, and comment threads using Node.js, Express, and MongoDB.",
      techStack: ["EJS", "NodeJS", "Express", "MongoDB", "Bootstrap"],
      githubUrl: "https://github.com/Shivang14d04/BlogCircle"
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
      title: "LeetCode Contest Rating: 1840",
      details: "Ranked in the top 7.94% globally among 795,000+ active competitive programmers."
    },
    {
      title: "Codeforces Rating: 1256",
      details: "Achieved Pupil status on Codeforces, demonstrating strong problem-solving skills."
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
