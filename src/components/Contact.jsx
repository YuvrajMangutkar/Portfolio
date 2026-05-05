import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Code2, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─────────────────────────────────────────────
// EmailJS config — fill these in from:
//   https://www.emailjs.com/  →  Email Services + Email Templates
// Then add to your .env file:
//   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
//   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
//   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/YuvrajMangutkar/Yuvraj-Mangutkar',
    color: '#00f5ff',
    username: '@YuvrajMangutkar',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/yuvraj-mangutkar/',
    color: '#bf5fff',
    username: 'Yuvraj Mangutkar',
  },
  {
    name: 'LeetCode',
    icon: Code2,
    href: 'https://leetcode.com/u/yuvraj_1961/',
    color: '#ff0080',
    username: '@yuvraj_1961',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:Mangutkaryuvraj@gmail.com',
    color: '#00ff9f',
    username: 'Mangutkaryuvraj@gmail.com',
  },
];

function FloatingLabel({ label, id, children }) {
  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className="absolute left-4 top-4 text-sm text-slate-500 font-mono pointer-events-none transition-all duration-300 group-focus-within:-top-3 group-focus-within:text-xs group-focus-within:text-[#00f5ff] group-focus-within:bg-[#0a0f1e] group-focus-within:px-1 group-focus-within:rounded"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('sent');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00f5ff]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-[#00f5ff] text-sm tracking-widest uppercase mb-3">05. Contact</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f5ff] to-[#bf5fff] mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-md mx-auto text-sm">
            Have an opportunity, a project idea, or just want to chat? My inbox is always open! 🚀
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Find me on</h3>
              <p className="text-slate-400 text-sm">
                Connect with me on any of these platforms — I'm always up for a conversation!
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 8, boxShadow: `0 8px 30px ${link.color}20` }}
                    className="flex items-center gap-4 glass-card rounded-xl p-4 group transition-all"
                    id={`contact-${link.name.toLowerCase()}-link`}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                      style={{
                        background: `${link.color}15`,
                        border: `1px solid ${link.color}30`,
                      }}
                    >
                      <Icon size={20} style={{ color: link.color }} />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{link.name}</div>
                      <div className="font-mono text-xs text-slate-500">{link.username}</div>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        style={{ color: link.color }}
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Fun availability status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="glass-card rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-[#00ff9f] animate-pulse" />
                <span className="font-mono text-sm text-[#00ff9f] font-semibold">Currently Available</span>
              </div>
              <p className="text-slate-400 text-xs font-mono">
                Open to Full Stack &amp; AI Engineering roles • Internships • Freelance Projects
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
                <p className="text-slate-500 text-xs font-mono">I'll respond within 24 hours</p>
              </div>

              {/* Name */}
              <FloatingLabel label="Your Name *" id="contact-name">
                <input
                  id="contact-name"
                  name="from_name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                  className="w-full bg-transparent border border-slate-700 rounded-xl px-4 pt-4 pb-3 text-sm text-white font-mono focus:outline-none focus:border-[#00f5ff]/50 focus:shadow-[0_0_10px_rgba(0,245,255,0.1)] transition-all placeholder-transparent"
                  placeholder="Your Name"
                />
              </FloatingLabel>

              {/* Email */}
              <FloatingLabel label="Your Email *" id="contact-email">
                <input
                  id="contact-email"
                  name="from_email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                  className="w-full bg-transparent border border-slate-700 rounded-xl px-4 pt-4 pb-3 text-sm text-white font-mono focus:outline-none focus:border-[#00f5ff]/50 focus:shadow-[0_0_10px_rgba(0,245,255,0.1)] transition-all placeholder-transparent"
                  placeholder="your@email.com"
                />
              </FloatingLabel>

              {/* Message */}
              <FloatingLabel label="Your Message *" id="contact-message">
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                  className="w-full bg-transparent border border-slate-700 rounded-xl px-4 pt-4 pb-3 text-sm text-white font-mono focus:outline-none focus:border-[#00f5ff]/50 focus:shadow-[0_0_10px_rgba(0,245,255,0.1)] transition-all resize-none placeholder-transparent"
                  placeholder="Your message..."
                />
              </FloatingLabel>

              {/* Hidden field — destination email for EmailJS template */}
              <input type="hidden" name="to_email" value="mangutkaryuvraj@gmail.com" />

              {/* Status messages */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-[#ff0080] text-sm font-mono px-1"
                >
                  <AlertCircle size={15} />
                  <span>Failed to send. Please try emailing directly at mangutkaryuvraj@gmail.com</span>
                </motion.div>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                whileHover={!status ? { scale: 1.02, boxShadow: '0 0 30px rgba(0,245,255,0.3)' } : {}}
                whileTap={!status ? { scale: 0.98 } : {}}
                className="w-full py-4 rounded-xl font-mono text-sm font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-70"
                style={{
                  background:
                    status === 'sent'
                      ? 'linear-gradient(135deg, #00ff9f30, #00ff9f20)'
                      : status === 'error'
                      ? 'linear-gradient(135deg, #ff008030, #ff008020)'
                      : 'linear-gradient(135deg, #00f5ff20, #bf5fff20)',
                  border:
                    status === 'sent'
                      ? '1px solid #00ff9f50'
                      : status === 'error'
                      ? '1px solid #ff008050'
                      : '1px solid #00f5ff30',
                  color:
                    status === 'sent' ? '#00ff9f' : status === 'error' ? '#ff0080' : '#00f5ff',
                }}
                id="contact-submit-btn"
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-[#00f5ff]/30 border-t-[#00f5ff] rounded-full"
                    />
                    Sending...
                  </>
                ) : status === 'sent' ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent! ✨
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle size={16} />
                    Failed — Try Again
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
