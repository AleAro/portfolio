import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GithubLogo, ArrowSquareOut, Code, Database, Globe, Star } from 'phosphor-react';

const AnimatedProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Data Accessibility Platform",
      description: "A web platform designed to make complex datasets more accessible to non-technical users through intuitive visualizations and simplified interfaces.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Python", "D3.js", "Flask", "PostgreSQL"],
      github: "#",
      demo: "#",
      featured: true,
      category: "Data Science"
    },
    {
      title: "Smart Analytics Dashboard",
      description: "An intelligent dashboard that automatically generates insights from business data, helping companies make data-driven decisions more efficiently.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "Node.js", "Chart.js", "MongoDB", "Express"],
      github: "#",
      demo: "#",
      category: "Web Development"
    },
    {
      title: "Educational Tech Tool",
      description: "A learning management system that adapts to different learning styles, making technology education more accessible to diverse student populations.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["JavaScript", "React", "Firebase", "Material-UI"],
      github: "#",
      demo: "#",
      category: "Education"
    },
    {
      title: "Open Source Contribution",
      description: "Contributed to various open-source projects focused on improving data accessibility and creating more inclusive technology solutions.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "JavaScript", "Documentation", "Testing"],
      github: "#",
      demo: "#",
      category: "Open Source"
    },
    {
      title: "Mobile Data Collector",
      description: "A mobile application that simplifies data collection processes for research purposes, making it easier for field researchers to gather and analyze data.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Node.js", "SQLite", "REST API"],
      github: "#",
      demo: "#",
      category: "Mobile"
    },
    {
      title: "University Thesis Project",
      description: "My graduation thesis focused on developing algorithms to improve data accessibility in educational environments, presented at Tecnológico de Monterrey.",
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Machine Learning", "Research", "Academic Writing"],
      github: "#",
      demo: "#",
      category: "Research"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      "Data Science": "from-blue-500 to-cyan-500",
      "Web Development": "from-green-500 to-emerald-500",
      "Education": "from-purple-500 to-violet-500",
      "Open Source": "from-orange-500 to-red-500",
      "Mobile": "from-pink-500 to-rose-500",
      "Research": "from-indigo-500 to-blue-500"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              A showcase of my work focused on making data and technology more accessible to everyone.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(project.category)} rounded-full`}>
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 backdrop-blur-sm rounded-full text-yellow-400 text-xs font-semibold"
                      >
                        <Star size={12} weight="fill" />
                        <span>Featured</span>
                      </motion.div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium hover:bg-slate-600/50 transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a 
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-lg transition-all duration-200 text-sm font-medium"
                    >
                      <GithubLogo size={16} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a 
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-200 text-sm font-medium"
                    >
                      <ArrowSquareOut size={16} />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/alejandro-arouesty"
              target="_blank"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 hover:border-slate-500 rounded-xl text-slate-300 hover:text-white transition-all duration-300 font-medium"
            >
              <GithubLogo size={24} />
              <span>View More on GitHub</span>
              <ArrowSquareOut size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedProjects;