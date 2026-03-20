import { motion } from 'framer-motion';
import {
  Globe,
  BarChart2,
  BookOpen,
  GitPullRequest,
  Smartphone,
  FlaskConical,
  ChevronRight,
  Github,
  Gamepad2
} from 'lucide-react';

const projects = [
  {
    title: "Data Accessibility Platform",
    description: "A web platform designed to make complex datasets more accessible to non-technical users through intuitive visualizations and simplified interfaces.",
    tags: ["React", "Python", "D3.js", "Flask", "PostgreSQL"],
    category: "Data Science",
    size: "large",
    icon: <Globe className="text-primary w-6 h-6" />,
    github: "#",
    demo: "#",
    visual: (
      <div className="absolute inset-0 z-0 opacity-30 group-hover:scale-105 transition-transform duration-700">
        <div className="w-full h-full flex items-center justify-center p-12">
          <div className="w-full h-full border border-primary/10 rounded-xl relative overflow-hidden bg-slate-900/60">
            <div className="absolute inset-0 flex flex-col gap-4 p-6">
              <div className="h-8 w-1/3 bg-primary/20 rounded-full" />
              <div className="grid grid-cols-3 gap-4 h-full">
                <div className="bg-surface-high rounded-lg border border-outline/20" />
                <div className="bg-surface-high rounded-lg border border-outline/20" />
                <div className="bg-surface-high rounded-lg border border-outline/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Smart Analytics Dashboard",
    description: "An intelligent dashboard that automatically generates insights from business data, helping companies make data-driven decisions more efficiently.",
    tags: ["Vue.js", "Node.js", "Chart.js", "MongoDB"],
    category: "Web Development",
    size: "small",
    icon: <BarChart2 className="text-primary w-6 h-6" />,
    github: "#",
    demo: "#"
  },
  {
    title: "Mobile Data Collector",
    description: "A mobile application that simplifies data collection for field researchers, enabling easy gathering and analysis of data on the go.",
    tags: ["React Native", "Node.js", "SQLite"],
    category: "Mobile",
    size: "small",
    icon: <Smartphone className="text-secondary w-6 h-6" />,
    github: "#",
    demo: "#",
    progress: 80
  },
  {
    title: "University Thesis Project",
    description: "Graduation thesis developing algorithms to improve data accessibility in educational environments, presented at Tecnológico de Monterrey.",
    tags: ["Python", "Machine Learning", "Research"],
    category: "Research",
    size: "wide",
    icon: <FlaskConical className="text-primary w-6 h-6" />,
    github: "#",
    demo: "#"
  },
  {
    title: "Quetzal Engine",
    description: "An integrated cloud RPG framework bridging Unity WebGL game states with a Node.js REST API and high-performance MySQL persistence layers for persistent world environments.",
    tags: ["Unity", "C#", "Node.js", "MySQL", "JWT"],
    category: "Open Source Contribution",
    size: "wide",
    icon: <Gamepad2 className="text-primary w-6 h-6" />,
    github: "#",
    playLink: "/play/quetzal"
  },
  {
    title: "Educational Tech Tool",
    description: "A learning management system that adapts to different learning styles, making technology education more accessible to diverse student populations.",
    tags: ["JavaScript", "React", "Firebase"],
    category: "Education",
    size: "small",
    icon: <BookOpen className="text-primary w-6 h-6" />,
    github: "#",
    demo: "#"
  },
  {
    title: "Open Source Contributions",
    description: "Contributed to various open-source projects focused on improving data accessibility and creating more inclusive technology solutions.",
    tags: ["Python", "JavaScript", "Testing"],
    category: "Open Source",
    size: "small",
    icon: <GitPullRequest className="text-secondary w-6 h-6" />,
    github: "#",
    demo: "#"
  }
];

const AnimatedProjects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-2 block">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
            A showcase of my work focused on making data and technology more accessible to everyone.
          </p>
        </div>

        {/* Bento Grid — Row 1: large + 2 small */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px] mb-6">
          {projects.slice(0, 3).map((project, idx) => (
            <BentoCard key={idx} project={project} idx={idx} />
          ))}
        </div>

        {/* Bento Grid — Row 2: University Thesis (wide) */}
        <div className="mb-6">
          <BentoCardWide project={projects[3]} idx={3} />
        </div>

        {/* Bento Grid — Row 3: Quetzal Engine (wide) */}
        <div className="mb-6">
          <BentoCardWide project={projects[4]} idx={4} />
        </div>

        {/* Bento Grid — Row 4: 2 small */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
          {projects.slice(5, 7).map((project, idx) => (
            <BentoCard key={idx + 5} project={project} idx={idx + 5} />
          ))}
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
            href="https://github.com/alejandro-arouesty"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 hover:border-slate-500 rounded-xl text-slate-300 hover:text-white transition-all duration-300 font-medium"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const BentoCard = ({ project, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: idx * 0.1 }}
    className={`
      rounded-2xl bg-surface-high border border-outline/10 relative overflow-hidden group
      hover:bg-surface transition-all duration-500
      ${project.size === 'large' ? 'md:col-span-8 md:row-span-2' : 'md:col-span-4 md:row-span-1'}
    `}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-80" />
    {project.visual}

    {/* Category badge */}
    <div className="absolute top-0 right-0 p-6 z-20">
      <span className="font-mono text-[10px] tracking-widest text-primary border border-primary/30 px-3 py-1 rounded-full uppercase">
        {project.category}
      </span>
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
      <div className="mb-3">{project.icon}</div>
      <h3 className={`font-bold mb-2 text-white ${project.size === 'large' ? 'text-2xl' : 'text-lg'}`}>
        {project.title}
      </h3>
      <p className="text-text-secondary text-xs mb-4 max-w-md leading-relaxed">{project.description}</p>

      {project.progress && (
        <div className="mt-1 mb-3 h-1 bg-surface rounded-full overflow-hidden w-full">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${project.progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full bg-secondary"
          />
        </div>
      )}

      <div className="flex gap-2 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-slate-800/60 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest text-slate-300 border border-outline/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.github && project.github !== '#' && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-primary font-mono text-[10px] tracking-widest uppercase group/link"
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
    transition={{ duration: 0.5, delay: idx * 0.1 }}
    className="rounded-2xl bg-surface-high border border-outline/10 overflow-hidden group hover:bg-surface transition-all duration-500 flex flex-col md:flex-row"
    style={{ minHeight: '280px' }}
  >
    {/* Visual side */}
    <div className="md:w-1/2 h-48 md:h-auto bg-slate-900/60 flex items-center justify-center relative overflow-hidden">
      <div className="w-24 h-24 rounded-full border border-primary/20 flex items-center justify-center">
        {project.icon}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-high/80 hidden md:block" />
    </div>

    {/* Content side */}
    <div className="md:w-1/2 p-10 flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-primary" />
        <span className="font-mono text-[10px] tracking-widest uppercase text-text-secondary">
          {project.category}
        </span>
      </div>
      <h3 className="text-3xl font-bold mb-4 text-white">{project.title}</h3>
      <p className="text-text-secondary leading-relaxed text-sm mb-6">{project.description}</p>
      <div className="flex gap-2 flex-wrap mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-slate-800/60 px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest text-slate-300 border border-outline/10"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 flex-wrap">
        {project.playLink && (
          <a
            href={project.playLink}
            className="inline-flex items-center gap-2 bg-primary/15 hover:bg-primary/25 border border-primary/30 hover:border-primary/60 px-5 py-2 rounded-lg text-xs font-mono tracking-widest uppercase text-primary transition-all"
          >
            <Gamepad2 className="w-3.5 h-3.5" /> Play in Browser
          </a>
        )}
        {project.github && project.github !== '#' && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-700/50 hover:bg-primary/20 px-5 py-2 rounded-lg text-xs font-mono tracking-widest uppercase text-slate-300 hover:text-primary transition-all"
          >
            <Github className="w-3 h-3" /> Repository
          </a>
        )}
        {!project.playLink && project.github === '#' && (
          <a
            href={project.github}
            className="inline-flex items-center gap-2 bg-slate-700/50 hover:bg-primary/20 px-5 py-2 rounded-lg text-xs font-mono tracking-widest uppercase text-slate-300 hover:text-primary transition-all"
          >
            <Github className="w-3 h-3" /> Repository
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default AnimatedProjects;
