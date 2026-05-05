import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    color: '#00f5ff',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'JavaScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 92 },
    ],
  },
  {
    title: 'Backend & DevOps',
    color: '#bf5fff',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 78 },
      { name: 'Docker', level: 72 },
      { name: 'REST APIs', level: 82 },
    ],
  },
  {
    title: 'AI & Data',
    color: '#ff0080',
    skills: [
      { name: 'Machine Learning', level: 80 },
      { name: 'Data Science', level: 78 },
      { name: 'AI Engineering', level: 75 },
      { name: 'C++ (LeetCode)', level: 82 },
    ],
  },
];

const techBadges = [
  { name: 'Python', icon: '🐍', color: '#3776AB' },
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
  { name: 'Java', icon: '☕', color: '#ED8B00' },
  { name: 'Docker', icon: '🐳', color: '#2496ED' },
  { name: 'Tailwind', icon: '🎨', color: '#06B6D4' },
  { name: 'Git', icon: '🔧', color: '#F05032' },
  { name: 'AI/ML', icon: '🤖', color: '#FF6B6B' },
  { name: 'SQL', icon: '🗄️', color: '#336791' },
  { name: 'FastAPI', icon: '⚡', color: '#009688' },
  { name: 'C++', icon: '⚙️', color: '#00599C' },
];

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-mono text-sm text-slate-300">{name}</span>
        <motion.span
          className="font-mono text-xs"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}aa, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

function TechBadge({ name, icon, color, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0, rotate: -10 }}
      animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, type: 'spring', stiffness: 200 }}
      whileHover={{
        scale: 1.15,
        y: -5,
        boxShadow: `0 10px 30px ${color}40`,
      }}
      className="flex items-center gap-2 px-4 py-3 glass-card rounded-xl cursor-default group"
    >
      <span className="text-xl">{icon}</span>
      <span
        className="font-mono text-sm font-medium transition-colors"
        style={{ color: 'rgb(148 163 184)' }}
      >
        {name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#bf5fff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-[#00f5ff] text-sm tracking-widest uppercase mb-3">03. Skills</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            My <span className="gradient-text">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f5ff] to-[#bf5fff] mx-auto rounded-full" />
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2 h-8 rounded-full"
                  style={{ background: `linear-gradient(180deg, ${cat.color}, transparent)` }}
                />
                <h3 className="font-bold text-white text-lg">{cat.title}</h3>
              </div>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    color={cat.color}
                    delay={ci * 0.2 + si * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges marquee-style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h3 className="font-mono text-slate-400 text-sm uppercase tracking-widest">Technologies I work with</h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {techBadges.map((badge, i) => (
            <TechBadge key={badge.name} {...badge} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
