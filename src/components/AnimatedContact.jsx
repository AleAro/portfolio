import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const contactInfo = [
  { icon: Mail,  label: "Email",    value: "arouesty21@gmail.com",   href: "mailto:arouesty21@gmail.com" },
  { icon: Phone, label: "Phone",    value: "+52 56 3441 3469",        href: "tel:+525634413469" },
  { icon: MapPin, label: "Location", value: "Mexico City, MX",        href: null },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/alejandro-arouesty-571427206/?locale=es_ES" },
  { icon: Github,   label: "GitHub",   href: "https://github.com/AleAro" },
];

const AnimatedContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-28 bg-surface relative overflow-hidden">
      <div className="mesh-gradient absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div variants={container} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

          <motion.div variants={item} className="mb-16">
            <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-2 block">Get In Touch</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">Let's Connect</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left — contact info */}
            <div className="space-y-6">
              <motion.p variants={item} className="text-text-secondary text-lg leading-relaxed max-w-md">
                Interested in working together or just want to say hi? Reach out — I'm always open to
                interesting projects and conversations.
              </motion.p>

              <motion.div variants={item} className="space-y-3">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label}>
                    {href ? (
                      <a href={href} className="group flex items-center gap-4 bg-surface-high border border-outline/10 hover:border-primary/25 rounded-2xl p-5 transition-all duration-200">
                        <div className="p-2.5 bg-primary/10 rounded-xl">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] tracking-widest uppercase text-text-secondary mb-0.5">{label}</p>
                          <p className="font-semibold text-text-primary group-hover:text-primary transition-colors duration-200 text-sm">{value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 bg-surface-high border border-outline/10 rounded-2xl p-5">
                        <div className="p-2.5 bg-primary/10 rounded-xl">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] tracking-widest uppercase text-text-secondary mb-0.5">{label}</p>
                          <p className="font-semibold text-text-primary text-sm">{value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>

              <motion.div variants={item} className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-3 bg-surface-high border border-outline/10 hover:border-primary/30 hover:text-primary text-text-secondary rounded-xl transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div variants={item} className="bg-surface-high border border-outline/10 rounded-2xl p-8">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-headline font-bold text-text-primary text-xl">Message sent!</p>
                  <p className="text-text-secondary text-sm">I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-headline font-bold text-text-primary text-xl mb-6">Send a Message</h3>

                  {[
                    { id: 'name',    type: 'text',  placeholder: 'Your name',          label: 'Name' },
                    { id: 'email',   type: 'email', placeholder: 'your@email.com',     label: 'Email' },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block font-mono text-[10px] tracking-widest uppercase text-text-secondary mb-2">{f.label}</label>
                      <input
                        type={f.type}
                        id={f.id}
                        name={f.id}
                        value={form[f.id]}
                        onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                        placeholder={f.placeholder}
                        required
                        className="w-full px-4 py-3 bg-surface border border-outline/20 focus:border-primary/40 rounded-xl text-text-primary placeholder-text-secondary/50 outline-none transition-colors duration-200 text-sm"
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message" className="block font-mono text-[10px] tracking-widest uppercase text-text-secondary mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      required
                      className="w-full px-4 py-3 bg-surface border border-outline/20 focus:border-primary/40 rounded-xl text-text-primary placeholder-text-secondary/50 outline-none transition-colors duration-200 resize-none text-sm"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-background font-headline font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-opacity disabled:opacity-60"
                  >
                    {sending ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border-2 border-background/40 border-t-background rounded-full" />
                        Sending…
                      </>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedContact;
