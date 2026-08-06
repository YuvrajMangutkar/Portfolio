import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Rocket, Brain, Code2, Award, Terminal, CheckCircle2 } from 'lucide-react';

const stats = [
  { value: 'BE 4th Year', label: 'AIDS Engineering @ SPPU', icon: GraduationCap },
  { value: 'Full Stack', label: 'React • Python • Java', icon: Rocket },
  { value: 'AI / ML', label: 'Agents & Deep Learning', icon: Brain },
  { value: 'Production Ready', label: 'Deployed Apps & Systems', icon: Award },
];

const timeline = [
  {
    year: '2023',
    title: 'Computer Engineering Foundation',
    desc: 'Began journey at Savitribai Phule Pune University (SPPU). Built strong foundations in algorithms, data structures, and computer science core concepts.',
    color: '#00f5ff',
  },
  {
    year: '2024',
    title: 'Python & Data Structures Mastery 🐍',
    desc: 'Mastered Python programming, OOP design patterns, automation scripts, and problem-solving techniques.',
    color: '#a855f7',
  },
  {
    year: '2025',
    title: 'Full Stack Python & AI Engineering 🤖',
    desc: 'Built intelligent Django & FastAPI microservices, integrated LLMs & Machine Learning pipelines, and scaled full-stack web applications.',
    color: '#3b82f6',
  },
  {
    year: '2026 (Present)',
    title: 'React & Enterprise Systems Architecture 🚀',
    desc: 'Spearheading modern single-page applications with React.js, Tailwind CSS, Java enterprise backend tools, and AI agent frameworks.',
    color: '#00f5ff',
  },
];

const highlights = [
  'Specializing in Artificial Intelligence & Data Science Engineering',
  'Proficient in building production full-stack React & Django / FastAPI apps',
  'Experienced with Docker containerization & cloud deployment platforms',
  'Active problem solver with strong Data Structures & Algorithms knowledge',
];

function StatCard({ value, label, icon: Icon, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass-card rounded-2xl p-6 text-left group border border-slate-800/80 hover:border-[#00f5ff]/30 transition-all"
    >
      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:border-[#00f5ff]/40 group-hover:bg-[#00f5ff]/10 transition-all">
        <Icon size={22} className="text-[#00f5ff]" />
      </div>
      <div className="text-xl font-extrabold text-white mb-1 tracking-tight">{value}</div>
      <div className="text-xs font-mono text-slate-400">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 space-y-3"
        >
          <p className="font-mono text-[#00f5ff] text-xs font-semibold tracking-widest uppercase">02. About Me</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Engineering <span className="gradient-text">Excellence</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f5ff] to-[#a855f7] mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Info Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 space-y-6 border border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00f5ff]/10 text-[#00f5ff]">
                  <Code2 size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Full Stack &amp; AI Developer</h3>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I am <span className="text-white font-semibold">Yuvraj Mangutkar</span>, a final-year (4th year) 
                  Engineering student specializing in <span className="text-[#00f5ff] font-medium">Artificial Intelligence &amp; Data Science</span> at SPPU.
                </p>
                <p>
                  My core passion lies in engineering intelligent software systems that seamlessly combine modern frontend user experiences with powerful backend AI architectures.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <h4 className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Competencies:</h4>
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-[#00f5ff] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Details Badge Table */}
            <div className="glass-card rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border border-slate-800 font-mono text-xs">
              <div>
                <span className="text-slate-400 block mb-1">LOCATION</span>
                <span className="text-white font-semibold">Pune, Maharashtra, India</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">DEGREE</span>
                <span className="text-[#00f5ff] font-semibold">B.E. AI &amp; Data Science</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">EMAIL</span>
                <span className="text-white font-semibold truncate block">Mangutkaryuvraj@gmail.com</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">AVAILABILITY</span>
                <span className="text-[#a855f7] font-semibold">Open to Work (Immediate)</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 relative pl-8"
          >
            <div className="timeline-line" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Point */}
                  <div
                    className="absolute -left-[33px] top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-slate-950 flex items-center justify-center"
                    style={{ borderColor: item.color }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>

                  <div className="glass-card rounded-2xl p-6 border border-slate-800/80 group-hover:border-[#00f5ff]/30 transition-all">
                    <span
                      className="font-mono text-xs font-bold tracking-widest px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 inline-block mb-3"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </span>
                    <h4 className="font-bold text-white text-base mb-1.5">{item.title}</h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
