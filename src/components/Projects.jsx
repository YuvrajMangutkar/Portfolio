import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Cpu, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Agis AI Project Manager',
    description:
      'An intelligent AI-powered project management platform built with a Django backend and React frontend. It streamlines workflows, auto-generates tasks, and provides smart AI insights to boost team productivity. Fully deployed on Render.',
    tags: ['React', 'Django', 'Python', 'AI', 'Full Stack', 'REST API'],
    github: 'https://github.com/YuvrajMangutkar/Project_Manager',
    live: 'https://project-manager-vu3e.onrender.com/',
    color: '#00f5ff',
    accentColor: '#bf5fff',
    icon: Cpu,
    featured: true,
  },
  {
    id: 2,
    title: 'EV vs ICE DSS',
    description:
      'A Decision Support System that helps users make informed choices between Electric Vehicles and Internal Combustion Engine vehicles using data-driven analysis, cost comparisons, and environmental impact scoring.',
    tags: ['Python', 'DSS', 'Data Science', 'React', 'Analysis'],
    github: 'https://github.com/devang404/EV-DSS',
    live: 'https://ev-dss.vercel.app/',
    color: '#bf5fff',
    accentColor: '#00f5ff',
    icon: Globe,
    featured: false,
  },
];

function TiltCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouse = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const resetMouse = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
      style={{ perspective: 1000 }}
      className="group"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouse}
        onMouseLeave={resetMouse}
        onMouseEnter={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="tilt-card relative glass-card rounded-2xl overflow-hidden cursor-default h-full"
      >
        {/* Gradient border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${project.color}20, ${project.accentColor}20)`,
          }}
        />

        {/* Top glow line */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${project.color}, ${project.accentColor})` }}
        />

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ background: `${project.color}20`, border: `1px solid ${project.color}30` }}
            >
              <Icon size={24} style={{ color: project.color }} />
            </div>
            <div className="flex gap-3">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#00f5ff] hover:bg-[#00f5ff]/10 transition-all"
                id={`project-github-${project.id}`}
              >
                <Github size={16} />
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#bf5fff] hover:bg-[#bf5fff]/10 transition-all"
                id={`project-live-${project.id}`}
              >
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </div>

          {/* Title */}
          <h3
            className="text-xl font-bold mb-3 group-hover:text-white transition-colors"
            style={{ color: hovered ? 'white' : '#e2e8f0' }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + i * 0.05 + 0.3 }}
                className="tag-chip"
                style={{
                  background: i % 2 === 0 ? `${project.color}15` : `${project.accentColor}15`,
                  borderColor: i % 2 === 0 ? `${project.color}40` : `${project.accentColor}40`,
                  color: i % 2 === 0 ? project.color : project.accentColor,
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="px-8 pb-6">
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-mono text-sm font-medium transition-all"
            style={{
              background: `linear-gradient(135deg, ${project.color}20, ${project.accentColor}20)`,
              border: `1px solid ${project.color}30`,
              color: project.color,
            }}
            id={`project-view-live-${project.id}`}
          >
            <ExternalLink size={14} />
            View Live
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00f5ff]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff0080]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-[#00f5ff] text-sm tracking-widest uppercase mb-3">04. Projects</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f5ff] to-[#bf5fff] mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-lg mx-auto text-sm">
            Here are some projects I've built — from AI systems to full-stack web apps
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <TiltCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 text-sm mb-4 font-mono">Want to see more?</p>
          <motion.a
            href="https://github.com/YuvrajMangutkar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,245,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 cyber-btn"
            id="view-all-github-btn"
          >
            <Github size={16} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
