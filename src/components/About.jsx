import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Rocket, Brain, Target } from 'lucide-react';

const stats = [
  { value: '3rd', label: 'Year Engineering', icon: GraduationCap },
  { value: '2+', label: 'Projects Built', icon: Rocket },
  { value: 'AI', label: 'Specialization', icon: Brain },
  { value: '∞', label: 'Problems Solved', icon: Target },
];

const timeline = [
  {
    year: '2023',
    title: 'Just a Student',
    desc: "Enrolled at SPPU — didn't know a single programming language. Pure curiosity, zero experience.",
    color: '#00f5ff',
  },
  {
    year: '2024',
    title: 'Python Ignition 🐍',
    desc: 'Slowly picked up Python from scratch and gradually mastered it — functions, OOP, automation, the whole deal.',
    color: '#bf5fff',
  },
  {
    year: '2025',
    title: 'Full Stack Python + AI 🤖',
    desc: 'Leveled up with Django, FastAPI & Python full-stack. Dived into ML, Generative AI, Agentic AI. Started grinding LeetCode for problem solving.',
    color: '#ff0080',
  },
  {
    year: '2026',
    title: 'React + Java Enterprise 🚀',
    desc: 'Began mastering React & Java Full Stack to build SPA applications for enterprise-grade systems.',
    color: '#00ff9f',
  },
];

function StatCard({ value, label, icon: Icon, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass-card rounded-xl p-6 text-center group cursor-default"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f5ff]/20 to-[#bf5fff]/20 flex items-center justify-center mx-auto mb-3 group-hover:from-[#00f5ff]/30 group-hover:to-[#bf5fff]/30 transition-all">
        <Icon size={22} className="text-[#00f5ff]" />
      </div>
      <div className="text-3xl font-black gradient-text mb-1">{value}</div>
      <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#00f5ff]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#bf5fff]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-[#00f5ff] text-sm tracking-widest uppercase mb-3">02. About</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Who Am <span className="gradient-text">I?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f5ff] to-[#bf5fff] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-slate-400 leading-relaxed"
            >
              <p>
                Hey there! I'm{' '}
                <span className="text-[#00f5ff] font-semibold">Yuvraj Mangutkar</span>, a passionate
                third-year Engineering student specializing in{' '}
                <span className="text-[#bf5fff] font-semibold">Artificial Intelligence & Data Science</span>{' '}
                at my college.
              </p>
              <p>
                I'm someone who loves building things — from intelligent AI systems to beautiful
                full-stack web apps. My goal is to bridge the gap between{' '}
                <span className="text-[#ff0080] font-semibold">cutting-edge AI</span> and{' '}
                <span className="text-[#00ff9f] font-semibold">real-world applications</span> that
                make a difference.
              </p>
              <p>
                Currently open to exciting opportunities in{' '}
                <span className="text-[#00f5ff] font-semibold">Full Stack Development</span> and{' '}
                <span className="text-[#bf5fff] font-semibold">AI Engineering</span>. Let's build
                something awesome together!
              </p>
            </motion.div>

            {/* Quick info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card rounded-xl p-5 space-y-3"
            >
              {[
                { label: 'Name', value: 'Yuvraj Mangutkar', color: '#00f5ff' },
                { label: 'University', value: 'SPPU — AI & Data Science', color: '#bf5fff' },
                { label: 'Email', value: 'Mangutkaryuvraj@gmail.com', color: '#ff0080' },
                { label: 'Status', value: '🟢 Open to Work', color: '#00ff9f' },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex items-center gap-4 font-mono text-sm">
                  <span className="text-slate-500 w-16 flex-shrink-0">{label}:</span>
                  <span style={{ color }}>{value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative pl-10"
          >
            <div className="timeline-line" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div
                    className="absolute -left-[34px] w-4 h-4 rounded-full border-2 border-current flex items-center justify-center"
                    style={{ color: item.color }}
                  >
                    <div
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>

                  <div className="glass-card rounded-xl p-5 group hover:border-[#00f5ff]/30 transition-colors">
                    <div
                      className="font-mono text-xs mb-1 tracking-widest"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
