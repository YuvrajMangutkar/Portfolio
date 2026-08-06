import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-[#00f5ff]/10">
      {/* Background wave */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="rgba(0, 245, 255, 0.02)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00f5ff] to-[#a855f7] flex items-center justify-center">
              <Code2 size={14} className="text-black" />
            </div>
            <span className="font-mono font-bold gradient-text">Yuvraj Mangutkar</span>
          </div>

          {/* Center text */}
          <motion.p
            className="font-mono text-xs text-slate-400 flex items-center gap-1"
            whileHover={{ color: '#00f5ff' }}
          >
            <span className="text-[#00f5ff]/50">&lt;</span>
            <span className="text-[#a855f7]">coded</span>
            <span className="text-[#00f5ff]/50">/&gt;</span>
            {' '}by Yuvraj with{' '}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={12} className="text-[#a855f7] fill-[#a855f7]" />
            </motion.span>
            {' '}&amp; too much{' '}
            <span className="text-yellow-400">☕</span>
            {' '}© {year}
          </motion.p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
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
                whileHover={{ scale: 1.2, color: '#00f5ff', y: -2 }}
                className="text-slate-400 transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
