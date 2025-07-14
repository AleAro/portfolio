import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Envelope, Phone, MapPin, LinkedinLogo, GithubLogo, TwitterLogo, PaperPlaneTilt } from 'phosphor-react';

const AnimatedContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Envelope,
      label: "Email",
      value: "alejandro.arouesty@example.com",
      color: "from-blue-500 to-blue-600",
      href: "mailto:alejandro.arouesty@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+52 (555) 123-4567",
      color: "from-green-500 to-green-600",
      href: "tel:+525551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mexico",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const socialLinks = [
    { icon: LinkedinLogo, href: "#", color: "hover:bg-blue-600", label: "LinkedIn" },
    { icon: GithubLogo, href: "#", color: "hover:bg-gray-600", label: "GitHub" },
    { icon: TwitterLogo, href: "#", color: "hover:bg-blue-500", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
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
              Get In Touch
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Interested in collaborating or discussing how we can make technology more accessible? I'd love to hear from you.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <motion.h3 
                  className="text-2xl font-semibold mb-8 text-white"
                  variants={itemVariants}
                >
                  Let's Connect
                </motion.h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="group"
                    >
                      {info.href ? (
                        <a href={info.href} className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                          <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg shadow-lg`}>
                            <info.icon size={24} className="text-white" weight="bold" />
                          </div>
                          <div>
                            <p className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">{info.label}</p>
                            <p className="text-slate-300">{info.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
                          <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg shadow-lg`}>
                            <info.icon size={24} className="text-white" weight="bold" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">{info.label}</p>
                            <p className="text-slate-300">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold mb-6 text-white">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 bg-slate-800/50 backdrop-blur-sm ${social.color} rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group`}
                      aria-label={social.label}
                    >
                      <social.icon size={24} className="text-slate-300 group-hover:text-white transition-colors duration-200" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
            >
              <motion.h3 
                className="text-2xl font-semibold mb-6 text-white"
                variants={itemVariants}
              >
                Send a Message
              </motion.h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">Name</label>
                  <motion.input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-slate-400"
                    placeholder="Your Name"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">Email</label>
                  <motion.input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-slate-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">Message</label>
                  <motion.textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-slate-400"
                    placeholder="Tell me about your project or how we can collaborate..."
                    required
                  />
                </motion.div>
                
                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-slate-500 disabled:to-slate-600 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <PaperPlaneTilt size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedContact;