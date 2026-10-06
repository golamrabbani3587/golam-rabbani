"use client";

import Navigation from "./components/Navigation";
import ParticleBackground from "./components/ParticleBackground";
import AnimatedSection from "./components/AnimatedSection";

/* ─── SVG Icon Components ─── */

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/* ─── Data ─── */

const SKILLS = [
  {
    icon: "⚡",
    title: "Backend Development",
    tags: ["Node.js", "Express", "NestJS", "FastAPI", "Prisma", "TypeORM"],
  },
  {
    icon: "🎨",
    title: "Frontend Development",
    tags: ["React", "Next.js", "TypeScript", "HTML/CSS", "JavaScript"],
  },
  {
    icon: "☁️",
    title: "DevOps & Cloud",
    tags: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Terraform",
      "AWS",
      "Digital Ocean",
      "Grafana",
      "Ansible",
    ],
  },
  {
    icon: "🗄️",
    title: "Databases",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL", "NoSQL"],
  },
  {
    icon: "🧩",
    title: "Microservices",
    tags: ["RabbitMQ", "Circuit Breaker", "Nest Microservice", "Kafka"],
  },
  {
    icon: "🧠",
    title: "AI & Machine Learning",
    tags: ["LLM", "RAG", "Vector DBs", "Embeddings", "Agents", "MCP"],
  },
];

const EXPERIENCE = [
  {
    period: "03/2025 — Present",
    current: true,
    role: "Senior Software Engineer & Team Lead",
    company: "CodeShaper",
    location: "📍 Dhaka, Bangladesh",
    description:
      "Leading the team and working as a senior software engineer at CodeShaper — a software development company specializing in building custom software solutions for clients. Focused on creating and improving SaaS products to meet unique business needs, delivering high-quality, scalable solutions that drive innovation and efficiency.",
  },
  {
    period: "11/2022 — 02/2025",
    current: false,
    role: "Senior Software Engineer & Team Lead",
    company: "Essaly",
    location: "📍 Riyadh, Saudi Arabia",
    description:
      "Led the engineering team and worked as a senior software engineer at Essaly — a distinguished technology company in the Middle East focused on cutting-edge technical solutions. Delivered multiple projects across diverse technology domains.",
  },
  {
    period: "09/2021 — 11/2022",
    current: false,
    role: "Senior Software Engineer",
    company: "Prolific Info Tech",
    location: "📍 Dhaka, Bangladesh",
    description:
      "Designed and developed high-quality software services at competitive costs as a senior engineer. Consistently met the high standards of enterprise customers across multiple projects.",
  },
  {
    period: "01/2021 — 08/2021",
    current: false,
    role: "Software Engineer",
    company: "Shuttle",
    location: "📍 Dhaka, Bangladesh",
    description:
      "Developed APIs and internal software for Shuttle — a mass-transit startup providing safe, affordable transportation by moving more people with fewer vehicles. Catered to both B2B and B2C customers.",
  },
  {
    period: "01/2019 — 12/2020",
    current: false,
    role: "Software Engineer",
    company: "NotionSoft",
    location: "📍 Dhaka, Bangladesh",
    description:
      "Built diverse software solutions using Node.js, Express, and related technologies. Developed full-stack applications for various client projects.",
  },
];

const AI_SKILLS = [
  {
    icon: "🧠",
    title: "LLM Fundamentals",
    desc: "Transformer architectures, tokenization, context windows, text generation, prompt engineering, and tuning model parameters like temperature.",
  },
  {
    icon: "🔗",
    title: "Embeddings & Vector DBs",
    desc: "Converting text into high-dimensional vectors capturing semantic meaning. Working with Pinecone, Milvus, and Chroma for rapid similarity searches.",
  },
  {
    icon: "📚",
    title: "RAG & Advanced RAG",
    desc: "Building retrieval-augmented generation systems with hybrid search, reranking, and query expansion for accurate, hallucination-free answers.",
  },
  {
    icon: "🛠️",
    title: "Tool Calling & Agents",
    desc: "Configuring LLMs to trigger external functions, building autonomous agents with multi-step planning, self-correction, and tool execution.",
  },
  {
    icon: "🔌",
    title: "MCP (Model Context Protocol)",
    desc: "Implementing the open standard for connecting LLMs to secure data sources, repositories, and development environments.",
  },
  {
    icon: "🤖",
    title: "Multi-Agent Systems",
    desc: "Orchestrating networks of specialized AI agents — researchers, coders, reviewers — collaborating to solve complex, large-scale problems.",
  },
];

const RESEARCH_PAPERS = [
  {
    title:
      "Performance Measurement of Multiple Supervised Learning Algorithms for Bengali News Headline Sentiment Classification",
    period: "01/2019 — 05/2019",
    abstract:
      "Before reading a news article, readers focus on the headline. Understanding the meaning of a news headline allows easy identification of news type — whether the article conveys positive or negative sentiment. This research analyzes sentiment classification of Bengali news headlines using multiple supervised learning algorithms.",
  },
  {
    title:
      "Comparative Sentiment Analysis Using Different Types of Machine Learning Algorithm",
    period: "01/2019 — 05/2019",
    abstract:
      "As businesses go online, companies seek consumer feedback on their products. When consumers write reviews, determining overall product sentiment becomes challenging. This research applies deep learning techniques to extract opinions and sentiment from text reviews using comparative ML approaches.",
  },
];

/* ─── Page Component ─── */

export default function Home() {
  return (
    <>
      <Navigation />

      {/* ========== HERO ========== */}
      <section className="hero" id="hero">
        <ParticleBackground />
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <AnimatedSection animation="fade-up" delay={200}>
                <span className="hero-greeting">👋 Hello, I&apos;m</span>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <h1 className="hero-name">
                  Golam <span className="gradient-text">Rabbani</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={600}>
                <p className="hero-title">
                  Senior Software Engineer &{" "}
                  <span className="highlight">Team Lead</span>
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={800}>
                <p className="hero-description">
                  Crafting robust solutions with Node.js, NestJS, React, and
                  modern DevOps tools. Passionate about AI/LLM technologies,
                  building scalable systems, and leading high-performing teams.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={1000}>
                <div className="hero-actions">
                  <a href="#contact" className="btn-primary">
                    Get In Touch <ArrowIcon />
                  </a>
                  <a href="#experience" className="btn-secondary">
                    View Experience <ArrowIcon />
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={1200}>
                <div className="hero-socials">
                  <a
                    href="https://github.com/golamrabbani3587"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rabbani204/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    href="https://web.facebook.com/rabbani.sarkar.543/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="mailto:golamrabbani3587@gmail.com"
                    className="social-link"
                    aria-label="Email"
                  >
                    <MailIcon />
                  </a>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="scale-in" delay={600}>
              <div className="hero-image-container">
                <div className="hero-image-inner">
                  <img src="/profile-cartoon.png" alt="Golam Rabbani Cartoon" className="hero-image" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-mouse" />
          SCROLL
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section className="section" id="about">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">About Me</span>
              <h2 className="section-title">
                Building the <span className="gradient-text">Future</span> with
                Code
              </h2>
              <p className="section-subtitle">
                6+ years of experience turning complex challenges into elegant
                software solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="about-grid">
            <AnimatedSection animation="fade-left">
              <div className="about-text">
                <p>
                  As a Senior Software Engineer and Team Lead, I specialize in
                  crafting robust, scalable solutions across the full technology
                  stack. My expertise spans backend systems with Node.js,
                  Express, and NestJS, coupled with dynamic frontend experiences
                  using React and Next.js.
                </p>
                <p>
                  My proficiency in DevOps tools like Docker, Kubernetes,
                  Jenkins, Terraform, and cloud platforms ensures seamless
                  deployment, monitoring, and infrastructure management. I&apos;m
                  deeply passionate about AI/LLM technologies, building systems
                  with RAG architectures, multi-agent systems, and modern AI
                  tools.
                </p>

                <div className="about-stats">
                  <div className="stat-card">
                    <span className="stat-number">6+</span>
                    <span className="stat-label">Years Exp.</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Companies</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">2</span>
                    <span className="stat-label">Research Papers</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right">
              <div className="about-highlights">
                <div className="highlight-card">
                  <div className="highlight-icon">⚡</div>
                  <div className="highlight-content">
                    <h3>Full-Stack Mastery</h3>
                    <p>
                      Node.js, NestJS, React, Next.js — end-to-end development
                    </p>
                  </div>
                </div>
                <div className="highlight-card">
                  <div className="highlight-icon">☁️</div>
                  <div className="highlight-content">
                    <h3>DevOps & Cloud</h3>
                    <p>
                      Docker, Kubernetes, Terraform, AWS, CI/CD pipelines
                    </p>
                  </div>
                </div>
                <div className="highlight-card">
                  <div className="highlight-icon">🧠</div>
                  <div className="highlight-content">
                    <h3>AI & LLM Engineering</h3>
                    <p>RAG, Agents, Multi-Agent Systems, MCP, Embeddings</p>
                  </div>
                </div>
                <div className="highlight-card">
                  <div className="highlight-icon">👥</div>
                  <div className="highlight-content">
                    <h3>Team Leadership</h3>
                    <p>
                      Managing engineering teams and mentoring junior developers
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== SKILLS ========== */}
      <section className="section" id="skills">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">Tech Stack</span>
              <h2 className="section-title">
                Skills & <span className="gradient-text">Technologies</span>
              </h2>
              <p className="section-subtitle">
                A versatile toolkit for building modern, production-grade
                applications
              </p>
            </div>
          </AnimatedSection>

          <div className="skills-grid">
            {SKILLS.map((cat, i) => (
              <AnimatedSection key={cat.title} animation="fade-up" delay={i * 150}>
                <div className="skill-category">
                  <div className="skill-category-icon">{cat.icon}</div>
                  <h3>{cat.title}</h3>
                  <div className="skill-tags">
                    {cat.tags.map((tag) => (
                      <span key={tag} className="skill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EXPERIENCE ========== */}
      <section className="section" id="experience">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">Career Path</span>
              <h2 className="section-title">
                Work <span className="gradient-text">Experience</span>
              </h2>
              <p className="section-subtitle">
                A journey through impactful roles across startups and
                enterprises
              </p>
            </div>
          </AnimatedSection>

          <div className="timeline">
            {EXPERIENCE.map((exp, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
                <div
                  className={`timeline-item ${exp.current ? "current" : ""}`}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-date">
                    {exp.period}
                    {exp.current && (
                      <span className="current-badge">Current</span>
                    )}
                  </div>
                  <div className="timeline-card">
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-location">{exp.location}</p>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== AI / LLM EXPERTISE ========== */}
      <section className="section ai-section" id="ai-expertise">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">Artificial Intelligence</span>
              <h2 className="section-title">
                AI & LLM <span className="gradient-text">Expertise</span>
              </h2>
              <p className="section-subtitle">
                Deep knowledge in modern AI architectures and tooling
              </p>
            </div>
          </AnimatedSection>

          <div className="ai-grid">
            {AI_SKILLS.map((skill, i) => (
              <AnimatedSection key={skill.title} animation="scale-in" delay={i * 100}>
                <div className="ai-card">
                  <div className="ai-card-header">
                    <div className="ai-card-icon">{skill.icon}</div>
                    <h3>{skill.title}</h3>
                  </div>
                  <p>{skill.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROJECTS ========== */}
      <section className="section" id="projects">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">Portfolio</span>
              <h2 className="section-title">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="section-subtitle">
                Personal ventures and side projects
              </p>
            </div>
          </AnimatedSection>

          <div className="projects-grid">
            <AnimatedSection animation="fade-up">
              <div className="project-card">
                <span className="project-label">Owner & Developer</span>
                <h3>VeedRec</h3>
                <p>
                  A comprehensive video recording and processing platform built
                  from the ground up. Features AI-powered transcription,
                  real-time video processing, and an intuitive user interface.
                </p>
                <div className="project-tech">
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">Express</span>
                  <span className="tech-badge">MongoDB</span>
                  <span className="tech-badge">Next.js</span>
                  <span className="tech-badge">TensorFlow</span>
                  <span className="tech-badge">Assembly AI</span>
                </div>
                <a
                  href="https://veedrec.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Project <ExternalLinkIcon />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={150}>
              <div className="project-card">
                <span className="project-label">Personal Website</span>
                <h3>rabbani.begelled.com</h3>
                <p>
                  Personal portfolio and blog website showcasing projects,
                  technical writings, and professional achievements. Built with
                  modern web technologies and optimized for performance.
                </p>
                <div className="project-tech">
                  <span className="tech-badge">Next.js</span>
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">Vercel</span>
                </div>
                <a
                  href="https://rabbani.begelled.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Website <ExternalLinkIcon />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== RESEARCH ========== */}
      <section className="section" id="research">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">Academic Work</span>
              <h2 className="section-title">
                Research <span className="gradient-text">Papers</span>
              </h2>
              <p className="section-subtitle">
                Machine learning research in sentiment analysis
              </p>
            </div>
          </AnimatedSection>

          <div className="research-grid">
            {RESEARCH_PAPERS.map((paper, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 200}>
                <div className="research-card">
                  <span className="research-year">{paper.period}</span>
                  <h3>{paper.title}</h3>
                  <p>{paper.abstract}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EDUCATION ========== */}
      <section className="section" id="education">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">Education</span>
              <h2 className="section-title">
                Academic <span className="gradient-text">Background</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in">
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <h3>Bachelor in Computer Science & Engineering</h3>
              <p className="education-school">
                Daffodil International University
              </p>
              <div className="education-details">
                <span>📅 2015 — 2019</span>
                <span>📍 Dhaka, Bangladesh</span>
                <span>📊 CGPA: 2.78</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title">
                Let&apos;s <span className="gradient-text">Connect</span>
              </h2>
              <p className="section-subtitle">
                Have a project in mind or want to discuss opportunities? I&apos;d
                love to hear from you.
              </p>
            </div>
          </AnimatedSection>

          <div className="contact-grid">
            <AnimatedSection animation="fade-left">
              <div className="contact-info">
                <h3>
                  Let&apos;s build something{" "}
                  <span className="gradient-text">amazing</span> together.
                </h3>
                <p>
                  I&apos;m always open to discussing new projects, creative ideas,
                  or opportunities to be part of something great.
                </p>

                <div className="contact-methods">
                  <a
                    href="mailto:golamrabbani3587@gmail.com"
                    className="contact-method"
                  >
                    <div className="contact-method-icon">
                      <MailIcon />
                    </div>
                    <div className="contact-method-text">
                      <h4>Email</h4>
                      <p>golamrabbani3587@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+8801751394949" className="contact-method">
                    <div className="contact-method-icon">
                      <PhoneIcon />
                    </div>
                    <div className="contact-method-text">
                      <h4>Phone</h4>
                      <p>+880 1751 394949</p>
                    </div>
                  </a>

                  <div className="contact-method">
                    <div className="contact-method-icon">
                      <LocationIcon />
                    </div>
                    <div className="contact-method-text">
                      <h4>Location</h4>
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right">
              <form
                className="contact-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      id="contact-name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      id="contact-email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Subject"
                    id="contact-subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Your Message"
                    id="contact-message"
                  />
                </div>
                <button type="submit" className="btn-submit">
                  Send Message ✉️
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © {new Date().getFullYear()} Golam Rabbani. All rights reserved.
          </p>
          <div className="footer-links">
            <a
              href="https://github.com/golamrabbani3587"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rabbani204/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="https://web.facebook.com/rabbani.sarkar.543/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Facebook
            </a>
            <a href="mailto:golamrabbani3587@gmail.com" className="footer-link">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
