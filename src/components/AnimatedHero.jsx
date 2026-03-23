import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const hooks = [
  "Software Engineer"
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
            {`Open to new opportunities — ${new Date().getFullYear()}`}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-text-primary mb-6"
        >
          {hooks[0]}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-sans text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mt-0 mb-5"
        >
          From{' '}
          <span className="text-primary font-semibold">Mexico City</span>, curious by nature and
          passionate about technology. I've always been the kind of person who needs to understand how
          things work which is exactly what drew me to programming. I love the logic, the problem
          solving, and the satisfaction of building something from nothing
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
