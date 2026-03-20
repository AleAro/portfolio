import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const hooks = [
  "Engineering iOS & Android Apps.",
  "Cloud-Native. Serverless. Precise.",
  "From Mexico City to Munich.",
  "Full-Stack & Mobile Developer.",
  "AWS Architect. Trilingual. Builder.",
];

const AnimatedHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % hooks.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="mesh-gradient absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 md:py-48 relative z-10 w-full">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-high border border-outline/20 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-[10px] tracking-widest uppercase text-text-secondary">
            Open to new opportunities — 2025
          </span>
        </motion.div>

        {/* Rotating headline */}
        <div className="h-[100px] md:h-[160px] lg:h-[200px] overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-text-primary"
            >
              {hooks[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-sans text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10"
        >
          Software Engineer at{' '}
          <span className="text-primary font-semibold">Past Post</span> building iOS & Android apps.
          ITESM Computer Science graduate — exchange at{' '}
          <span className="text-primary font-semibold">TU Munich</span>.
          Based in Mexico City, working globally.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-primary text-background font-headline font-bold px-7 py-3.5 rounded-xl text-base transition-all"
          >
            View My Work <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            href="/AlejandroArouesty.pdf"
            target="_blank"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border border-outline/40 hover:border-primary/50 text-text-secondary hover:text-text-primary font-mono text-xs tracking-widest uppercase px-7 py-3.5 rounded-xl transition-all"
          >
            <Download className="w-4 h-4" /> Download CV
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-text-secondary">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-5 h-8 border border-outline/40 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-0.5 h-2 bg-primary/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHero;
