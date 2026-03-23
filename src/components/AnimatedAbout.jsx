import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Languages, Briefcase } from 'lucide-react';

const facts = [
  { icon: Briefcase, label: "Role", value: "Software Engineer" },
  { icon: GraduationCap, label: "Education", value: "B.S. CS, ITESM" },
  { icon: MapPin, label: "Location", value: "Mexico City, MX" },
  { icon: Languages, label: "Languages", value: "Spanish · English · German" },
];

const AnimatedAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={item} className="mb-16">
            <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-2 block">Who I Am</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">About Me</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — text + fact cards */}
            <div className="space-y-8">
              <motion.p variants={item} className="text-text-secondary text-lg leading-relaxed">
                I'm a Software Engineer from{' '}
                <span className="text-text-primary font-semibold">Mexico</span>, driven by
                curiosity for how things work. I've always been the kind of person enjoys to learn,
                take on challenges, and dig into problems until they make sense  which is e
                what drew me to programming. I love the logic and problem-solving side of it, and the feeling
                of building something from scratch.
              </motion.p>

              <motion.p variants={item} className="text-text-secondary text-lg leading-relaxed">
                I studied Computer Science at{' '}
                <span className="text-text-primary font-semibold">ITESM</span>
                . I speak Spanish,
                English, and German, which has shaped how I collaborate with teams and people from
                various backgrounds.
              </motion.p>

              {/* Fact cards */}
              <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-surface-high border border-outline/10 rounded-2xl p-5 flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="font-mono text-[10px] tracking-widest uppercase">{label}</span>
                    </div>
                    <span className="font-headline font-semibold text-text-primary text-sm leading-snug">{value}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — photo */}
            <motion.div
              variants={{ hidden: { scale: 0.92, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } } }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/10 blur-xl" />
                <img
                  src="/profile.jpg"
                  alt="Alejandro Arouesty Galvan"
                  className="relative w-72 h-80 lg:w-80 lg:h-96 object-cover object-top rounded-3xl shadow-2xl border border-outline/20"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedAbout;
