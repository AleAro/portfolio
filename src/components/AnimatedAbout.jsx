import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Heart, Lightbulb, MapPin, Calendar } from 'phosphor-react';

const AnimatedAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const badges = [
    { icon: GraduationCap, text: "Recent Graduate", color: "from-blue-500 to-blue-600" },
    { icon: Heart, text: "Passionate Developer", color: "from-purple-500 to-purple-600" },
    { icon: Lightbulb, text: "Innovation Focused", color: "from-green-500 to-green-600" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:50px_50px]"></div>
      </div>

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
              About Me
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Learn more about my background, education, and what drives my passion for technology.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <motion.p 
                  className="text-lg text-slate-300 leading-relaxed"
                  variants={itemVariants}
                >
                  I'm a passionate software developer recently graduated from{' '}
                  <span className="text-blue-400 font-semibold">Tecnológico de Monterrey</span>{' '}
                  with a strong foundation in computer science and engineering. My mission is to make data and technology more accessible to everyone through innovative solutions.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-slate-300 leading-relaxed"
                  variants={itemVariants}
                >
                  Throughout my academic journey and professional experiences, I've developed expertise in various programming languages and technologies, always focusing on creating meaningful impact through code.
                </motion.p>
              </div>

              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {badges.map((badge, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`bg-gradient-to-r ${badge.color} p-4 rounded-xl shadow-lg`}
                  >
                    <div className="flex items-center gap-3 text-white">
                      <badge.icon size={24} weight="bold" />
                      <span className="font-semibold">{badge.text}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-blue-400" />
                  Education & Location
                </h3>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-purple-400" />
                    <span>Computer Science & Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-green-400" />
                    <span>Recent Graduate (2024)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-400" />
                    <span>Mexico</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={imageVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500" 
                    alt="Alejandro Arouesty"
                    className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl group-hover:opacity-75 transition-opacity duration-300"></div>
                </motion.div>
                
                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-80"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60"
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