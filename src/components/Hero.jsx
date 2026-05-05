import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { ArrowDown, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import Particles from './Particles';

const FloatingShape = ({ size, color, top, left, delay }) => (
  <motion.div
    className="floating-shape pointer-events-none"
    style={{
      width: size,
      height: size,
      background: color,
      top,
      left,
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

export default function Hero() {
  const canvasRef = useRef(null);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <Particles />

      {/* Floating gradient blobs */}
      <FloatingShape size="400px" color="#00f5ff" top="10%" left="10%" delay={0} />
      <FloatingShape size="500px" color="#bf5fff" top="50%" left="70%" delay={2} />
      <FloatingShape size="300px" color="#ff0080" top="80%" left="20%" delay={4} />

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 bottom-0 border-l border-[#00f5ff]/10"
            style={{ left: `${(i + 1) * 12.5}%` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1, ease: 'easeOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f5ff]/20 bg-[#00f5ff]/5"
          >
            <span className="w-2 h-2 rounded-full bg-[#00f5ff] animate-pulse" />
            <span className="font-mono text-sm text-[#00f5ff]">Available for Opportunities</span>
          </motion.div>

          {/* Name with glitch */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="font-mono text-[#00f5ff]/60 text-sm mb-2 tracking-widest uppercase">Hello, I'm</p>
            <div className="glitch-wrapper">
              <h1
                className="glitch-text text-5xl md:text-7xl font-black tracking-tight text-white leading-none"
                data-text="Yuvraj"
              >
                Yuvraj
              </h1>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight gradient-text leading-none mt-1">
              Mangutkar
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-mono text-xl md:text-2xl text-slate-300"
          >
            <span className="text-[#00f5ff]">&gt; </span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'AI Engineer',
                2000,
                'Problem Solver',
                2000,
                'TE AIDS Student',
                2000,
                'Code Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-slate-200"
            />
            <span className="cursor-blink text-[#00f5ff]">_</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-slate-400 text-base leading-relaxed max-w-lg"
          >
            Third-year Engineering student specializing in{' '}
            <span className="text-[#00f5ff]">AI & Data Science</span>. Building intelligent
            web applications and seeking exciting{' '}
            <span className="text-[#bf5fff]">Full Stack</span> &{' '}
            <span className="text-[#ff0080]">AI Engineering</span> roles.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="projects" smooth duration={800} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,245,255,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="cyber-btn"
                id="hero-view-work-btn"
              >
                View My Work
              </motion.button>
            </Link>
            <Link to="contact" smooth duration={800} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(191,95,255,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="cyber-btn cyber-btn-purple"
                id="hero-contact-btn"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com/YuvrajMangutkar/Yuvraj-Mangutkar', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/yuvraj-mangutkar/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:Mangutkaryuvraj@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3, color: '#00f5ff' }}
                className="text-slate-500 hover:text-[#00f5ff] transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
            <div className="flex-1 h-px bg-gradient-to-r from-[#00f5ff]/20 to-transparent" />
          </motion.div>
        </div>

        {/* Right — Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="hidden lg:flex items-center justify-center"
        >
          <HeroProfilePic />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-[#00f5ff]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function HeroProfilePic() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer rotating gradient ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: '380px',
          height: '380px',
          background: 'conic-gradient(from 0deg, #00f5ff, #bf5fff, #ff0080, #00ff9f, #00f5ff)',
          animation: 'spin 6s linear infinite',
          padding: '3px',
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: '#060b18' }}
        />
      </div>

      {/* Middle glow pulse ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '360px',
          height: '360px',
          border: '1px solid rgba(0,245,255,0.3)',
          boxShadow: '0 0 40px rgba(0,245,255,0.15), inset 0 0 40px rgba(0,245,255,0.05)',
        }}
        animate={{ scale: [1, 1.03, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Profile image */}
      <div
        className="relative rounded-full overflow-hidden"
        style={{
          width: '340px',
          height: '340px',
          border: '2px solid rgba(0,245,255,0.2)',
          boxShadow: '0 0 60px rgba(0,245,255,0.2), 0 0 120px rgba(191,95,255,0.1)',
        }}
      >
        <img
          src="/yuvraj2.png"
          alt="Yuvraj Mangutkar"
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle scan-line overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)',
          }}
        />
        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            background: 'linear-gradient(to top, rgba(6,11,24,0.5), transparent)',
          }}
        />
      </div>

      {/* Floating status badge */}
      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full"
        style={{
          background: 'rgba(6,11,24,0.9)',
          border: '1px solid rgba(0,255,159,0.4)',
          boxShadow: '0 0 20px rgba(0,255,159,0.15)',
          backdropFilter: 'blur(10px)',
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="w-2 h-2 rounded-full bg-[#00ff9f] animate-pulse" />
        <span className="font-mono text-xs text-[#00ff9f] font-semibold">Open to Opportunities</span>
      </motion.div>

      {/* Corner accent dots */}
      {[
        { top: '8%', right: '-2%' },
        { bottom: '20%', right: '-4%' },
        { top: '30%', left: '-4%' },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            ...pos,
            background: ['#00f5ff', '#bf5fff', '#ff0080'][i],
            boxShadow: `0 0 12px ${['#00f5ff', '#bf5fff', '#ff0080'][i]}`,
          }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
        />
      ))}
    </div>
  );
}
