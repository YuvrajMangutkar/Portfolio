import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Terminal } from 'lucide-react';

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
      y: [0, -25, 0],
      x: [0, 12, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 10,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-20 pb-12">
      {/* Ambient background glow spots */}
      <FloatingShape size="400px" color="#00f5ff" top="5%" left="5%" delay={0} />
      <FloatingShape size="450px" color="#a855f7" top="45%" left="65%" delay={2} />
      <FloatingShape size="300px" color="#3b82f6" top="75%" left="15%" delay={4} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column (Text & Information) */}
        <div className="lg:col-span-7 space-y-5 text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#00f5ff] animate-pulse shadow-[0_0_8px_#00f5ff]" />
            <span className="font-mono text-xs font-medium tracking-wide text-[#00f5ff]">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Heading Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-1"
          >
            <div className="flex items-center gap-2 text-slate-400 font-mono text-xs tracking-widest uppercase">
              <Terminal size={14} className="text-[#00f5ff]" />
              <span>Hello, I am</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
              Yuvraj Mangutkar
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text pt-1">
              Full Stack &amp; AI Engineer
            </div>
          </motion.div>

          {/* Typewriter Terminal Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-mono text-sm sm:text-base text-slate-300 flex items-center gap-2 bg-slate-900/60 px-3.5 py-2.5 rounded-xl border border-slate-800/80 max-w-lg backdrop-blur-sm"
          >
            <span className="text-[#00f5ff] font-bold">&gt;</span>
            <TypeAnimation
              sequence={[
                'AI & Data Science Specialist',
                2200,
                'Full Stack Developer (React & Python/Java)',
                2200,
                'BE AIDS Student @ SPPU',
                2200,
                'Building Enterprise AI Solutions',
                2200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-slate-200"
            />
            <span className="cursor-blink text-[#00f5ff] font-bold">_</span>
          </motion.div>

          {/* Biography summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal"
          >
            Final-year Engineering student specializing in{' '}
            <span className="text-white font-medium underline decoration-[#00f5ff]/40 decoration-2 underline-offset-4">
              AI &amp; Data Science
            </span>. 
            Designing intelligent AI agents, scalable backends, and responsive web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-3 pt-1"
          >
            <Link to="projects" smooth duration={800} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="cyber-btn py-2.5 px-5 text-xs"
                id="hero-view-work-btn"
              >
                <Sparkles size={14} />
                <span>Explore Work</span>
              </motion.button>
            </Link>
            <a href="/yuvraj_resume.pdf" download>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="cyber-btn cyber-btn-purple py-2.5 px-5 text-xs"
                id="hero-resume-btn"
              >
                <Download size={14} />
                <span>Resume</span>
              </motion.button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-4 pt-2"
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
                whileHover={{ scale: 1.15, y: -2, color: '#00f5ff' }}
                className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-[#00f5ff] hover:border-[#00f5ff]/40 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
            <div className="flex-1 h-px bg-gradient-to-r from-slate-800 via-[#00f5ff]/20 to-transparent" />
          </motion.div>
        </div>

        {/* Right Column (Balanced Compact Profile Picture) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:col-span-5 flex items-center justify-center"
        >
          <HeroProfilePic />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-10 hidden md:flex"
      >
        <Link to="about" smooth duration={800} offset={-80} className="flex flex-col items-center gap-1">
          <span className="font-mono text-[10px] text-slate-400 tracking-widest uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-[#00f5ff]" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}

function HeroProfilePic() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer spinning gradient ring (Compact: 280px) */}
      <div
        className="absolute rounded-full"
        style={{
          width: '275px',
          height: '275px',
          background: 'conic-gradient(from 0deg, #00f5ff, #a855f7, #3b82f6, #00f5ff)',
          animation: 'spin 10s linear infinite',
          padding: '2px',
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: '#060913' }}
        />
      </div>

      {/* Glow aura pulse (Compact: 260px) */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '260px',
          height: '260px',
          border: '1px solid rgba(0, 245, 255, 0.3)',
          boxShadow: '0 0 35px rgba(0, 245, 255, 0.2), inset 0 0 20px rgba(168, 85, 247, 0.12)',
        }}
        animate={{ scale: [1, 1.02, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Profile picture frame (Compact: 245px) */}
      <div
        className="relative rounded-full overflow-hidden"
        style={{
          width: '245px',
          height: '245px',
          border: '2px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5)',
        }}
      >
        <img
          src="/yuvraj2.png"
          alt="Yuvraj Mangutkar"
          className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
          loading="eager"
          fetchPriority="high"
        />
        {/* Soft bottom vignette gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: 'linear-gradient(to top, rgba(6, 9, 19, 0.85), transparent)',
          }}
        />
      </div>

      {/* Status badge pill overlay */}
      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#00f5ff]/40 shadow-lg whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <span className="w-2 h-2 rounded-full bg-[#00f5ff] animate-pulse shadow-[0_0_8px_#00f5ff]" />
        <span className="font-mono text-[11px] text-white font-semibold tracking-wide">AI &amp; Full Stack Engineer</span>
      </motion.div>
    </div>
  );
}
