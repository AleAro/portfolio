import { motion } from 'framer-motion';
import {
  Globe,
  BarChart2,
  Smartphone,
  ChevronRight,
  Github,
  Gamepad2
} from 'lucide-react';

// ─── Thumbnails / visuals ────────────────────────────────────────────────────

const VisualDashboard = () => (
  <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 p-6 flex flex-col gap-3">
    {/* Top metric cards */}
    <div className="grid grid-cols-4 gap-2">
      {[
        { label: "Agents Online", val: "24" },
        { label: "Avg Handle", val: "3:42" },
        { label: "Queue", val: "7" },
        { label: "CSAT", val: "94%" },
      ].map(({ label, val }) => (
        <div key={label} className="bg-surface-high/80 border border-outline/20 rounded-lg p-2 flex flex-col gap-1">
          <div className="text-[8px] font-mono text-text-secondary uppercase tracking-wider truncate">{label}</div>
          <div className="text-sm font-headline font-bold text-primary">{val}</div>
        </div>
      ))}
    </div>
    {/* Chart area */}
    <div className="flex-1 bg-surface-high/50 border border-outline/15 rounded-lg p-3 flex flex-col gap-2">
      <div className="flex items-center justify-between mb-1">
        <div className="h-2 w-24 bg-primary/20 rounded-full" />
        <div className="flex gap-1">
          {["1H","6H","24H"].map(t => (
            <div key={t} className="text-[7px] font-mono text-outline px-1.5 py-0.5 border border-outline/20 rounded">{t}</div>
          ))}
        </div>
      </div>
      {/* Sparkline bars */}
      <div className="flex-1 flex items-end gap-0.5">
        {[30,55,40,70,45,80,60,75,50,90,65,85,55,70,40,60,80,50,70,45,75,60,85,55].map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-primary/25 border-t border-primary/40" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
    {/* Agent status row */}
    <div className="flex gap-2">
      {[
        { status: "Available", count: 12, color: "bg-green-400/60" },
        { status: "On Call", count: 8, color: "bg-primary/60" },
        { status: "After Call", count: 4, color: "bg-secondary/60" },
      ].map(({ status, count, color }) => (
        <div key={status} className="flex items-center gap-1.5 bg-surface-high/60 border border-outline/15 rounded-md px-2 py-1">
          <div className={`w-1.5 h-1.5 rounded-full ${color}`} />
          <span className="text-[7px] font-mono text-text-secondary">{status} · {count}</span>
        </div>
      ))}
    </div>
  </div>
);

const VisualBarChart = () => (
  <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 flex items-end justify-center gap-2 px-8 pb-8 pt-12">
    {[55, 80, 45, 90, 65, 75].map((h, i) => (
      <div key={i} className="flex-1 rounded-t-md bg-primary/30 border border-primary/20" style={{ height: `${h}%` }} />
    ))}
  </div>
);

const VisualPhone = () => (
  <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700 flex items-center justify-center">
    <div className="w-20 h-36 border-2 border-primary/30 rounded-2xl flex flex-col items-center pt-3 gap-2 bg-background/40">
      <div className="w-8 h-1 bg-primary/30 rounded-full" />
      <div className="flex-1 w-full px-2 flex flex-col gap-1.5 pb-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-2 bg-surface-high rounded-full w-full" />
        ))}
      </div>
      <div className="w-6 h-6 rounded-full border border-primary/30 mb-2" />
    </div>
  </div>
);

const VisualCode = () => (
  <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700 flex items-center justify-center p-8">
    <div className="w-full font-mono text-[10px] leading-5 text-primary/50 space-y-1">
      {['{ git commit }', 'function solve()', 'import { open }', '// contribute', 'npm install --save', 'export default'].map((line, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-outline">{String(i + 1).padStart(2, '0')}</span>
          <span>{line}</span>
        </div>
      ))}
    </div>
  </div>
);

const VisualDots = () => (
  <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-25 group-hover:scale-105 transition-all duration-700 p-6 grid grid-cols-8 gap-2 content-center">
    {[...Array(48)].map((_, i) => (
      <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" style={{ opacity: Math.random() > 0.5 ? 0.8 : 0.3 }} />
    ))}
  </div>
);

// ─── Project data ─────────────────────────────────────────────────────────────

const GITHUB_URL = 'https://github.com/AleAro';

const projects = [
  {
    title: "Amazon Connect Supervisor Insights",
    description: "Real-time interactive dashboard integrating contact center data using Amazon Connect, AWS Amplify, Lambda, AppSync, and DynamoDB with serverless microservice architecture.",
    tags: ["AWS Amplify", "Lambda", "AppSync", "DynamoDB"],
    category: "Enterprise / AWS",
    size: "large",
    icon: <Globe className="text-primary w-6 h-6" />,
    github: "#",
    visual: <VisualDashboard />,
  },
  {
    title: "Earth4J",
    description: "1st Place Neo4j Hackathon. Data analysis and visualization platform for sustainability metrics using graph-based modeling and 3D interactive visuals.",
    tags: ["Neo4j", "React", "Three.js"],
    category: "Data Science",
    size: "small",
    icon: <BarChart2 className="text-primary w-6 h-6" />,
    github: "#",
    visual: <VisualBarChart />,
  },
  {
    title: "Ticket Management System",
    description: "Full-stack ticketing app for a nonprofit educational org. RESTful API with JWT auth, role-based middleware, and CRUD operations backed by MongoDB.",
    tags: ["Node.js", "JWT", "MongoDB"],
    category: "Security",
    size: "small",
    icon: <Smartphone className="text-secondary w-6 h-6" />,
    github: "#",
    visual: <VisualPhone />,
  },
  {
    title: "Quetzal Engine",
    description: "Cloud-integrated open-source RPG built in Unity with real-time player data synchronization via Node.js and Aiven MySQL, plus a live web dashboard for performance analytics.",
    tags: ["Unity", "C#", "Node.js", "MySQL", "JWT"],
    category: "Open Source",
    size: "wide",
    icon: <Gamepad2 className="text-primary w-6 h-6" />,
    github: "#",
    playLink: "/play/quetzal",
    image: "/mainbg.png",
  },
];

// ─── Section ──────────────────────────────────────────────────────────────────

const AnimatedProjects = () => (
  <section id="projects" className="py-28 bg-surface relative overflow-hidden">
    <div className="mesh-gradient absolute inset-0 pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
        <div>
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-2 block">Selected Work</span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">
            Featured Projects
          </h2>
        </div>
        <p className="text-text-secondary max-w-sm text-sm leading-relaxed">
          A curated selection of projects — from cloud infrastructure to mobile apps and open-source games.
        </p>
      </div>

      {/* Row 1: Amazon Connect (large) + Earth4J + Ticket System (small) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px] mb-6">
        {projects.slice(0, 3).map((project, idx) => (
          <BentoCard key={idx} project={project} idx={idx} />
        ))}
      </div>

      {/* Row 2: Quetzal (wide) */}
      <div>
        <BentoCardWide project={projects[3]} idx={3} />
      </div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mt-16"
      >
        <motion.a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-surface-high hover:bg-surface border border-outline/20 hover:border-primary/30 rounded-xl text-text-secondary hover:text-text-primary transition-all duration-300 font-mono text-xs tracking-widest uppercase"
        >
          <Github className="w-5 h-5" />
          View More on GitHub
        </motion.a>
      </motion.div>
    </div>
  </section>
);

// ─── Card components ──────────────────────────────────────────────────────────

const BentoCard = ({ project, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: idx * 0.08 }}
    className={`
      rounded-2xl bg-surface-high border border-outline/10 relative overflow-hidden group
      hover:border-primary/20 transition-all duration-500
      ${project.size === 'large' ? 'md:col-span-8 md:row-span-2' : 'md:col-span-4 md:row-span-1'}
    `}
  >
    {/* Bottom gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10 opacity-90" />

    {/* Visual / thumbnail */}
    {project.visual}

    {/* Category badge */}
    <div className="absolute top-0 right-0 p-5 z-20">
      <span className="font-mono text-[9px] tracking-widest text-primary border border-primary/25 px-2.5 py-1 rounded-full uppercase">
        {project.category}
      </span>
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 p-7 z-20 w-full">
      <div className="mb-3">{project.icon}</div>
      <h3 className={`font-headline font-bold mb-1.5 text-text-primary ${project.size === 'large' ? 'text-2xl' : 'text-lg'}`}>
        {project.title}
      </h3>
      <p className="text-text-secondary text-xs mb-4 max-w-md leading-relaxed">{project.description}</p>

      <div className="flex gap-2 flex-wrap">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-background/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-mono uppercase tracking-widest text-text-secondary border border-outline/15">
            {tag}
          </span>
        ))}
      </div>

      {project.github && project.github !== '#' && (
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-primary font-mono text-[9px] tracking-widest uppercase group/link"
        >
          View Repo <ChevronRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
        </a>
      )}
    </div>
  </motion.div>
);

const BentoCardWide = ({ project, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: idx * 0.08 }}
    className="rounded-2xl bg-surface-high border border-outline/10 hover:border-primary/20 overflow-hidden group transition-all duration-500 flex flex-col md:flex-row"
    style={{ minHeight: '280px' }}
  >
    {/* Visual / image side */}
    <div className="md:w-1/2 h-52 md:h-auto relative overflow-hidden bg-background flex items-center justify-center">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
        />
      ) : (
        <div className="w-24 h-24 rounded-full border border-primary/20 flex items-center justify-center">
          {project.icon}
        </div>
      )}
      {/* Fade edge toward content */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-high hidden md:block" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-high to-transparent md:hidden" />
    </div>

    {/* Content side */}
    <div className="md:w-1/2 p-9 flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        <span className="font-mono text-[10px] tracking-widest uppercase text-text-secondary">{project.category}</span>
      </div>
      <h3 className="font-headline text-2xl font-bold mb-3 text-text-primary">{project.title}</h3>
      <p className="text-text-secondary leading-relaxed text-sm mb-5">{project.description}</p>

      <div className="flex gap-2 flex-wrap mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-surface border border-outline/20 px-3 py-1 rounded-md text-[9px] font-mono uppercase tracking-widest text-text-secondary">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 flex-wrap">
        {project.playLink && (
          <a href={project.playLink}
            className="inline-flex items-center gap-2 bg-primary/15 hover:bg-primary/25 border border-primary/30 hover:border-primary/60 px-5 py-2 rounded-lg text-xs font-mono tracking-widest uppercase text-primary transition-all"
          >
            <Gamepad2 className="w-3.5 h-3.5" /> Play in Browser
          </a>
        )}
        {project.github && project.github !== '#' && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-surface hover:bg-primary/10 border border-outline/20 hover:border-primary/30 px-5 py-2 rounded-lg text-xs font-mono tracking-widest uppercase text-text-secondary hover:text-primary transition-all"
          >
            <Github className="w-3.5 h-3.5" /> Repository
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default AnimatedProjects;
