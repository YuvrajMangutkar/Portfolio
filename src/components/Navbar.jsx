import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Code2 } from 'lucide-react';

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-[#00f5ff]/15 shadow-[0_4px_30px_rgba(0,245,255,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f5ff] to-[#a855f7] flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.3)]">
            <Code2 size={16} className="text-black" />
          </div>
          <span className="font-mono font-bold text-lg gradient-text">YM</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                duration={800}
                offset={-80}
                className="relative font-medium text-sm text-slate-300 hover:text-[#00f5ff] transition-colors duration-300 cursor-pointer group font-mono"
                activeClass="!text-[#00f5ff]"
              >
                <span className="text-[#00f5ff]/60 mr-1">0{i + 1}.</span>
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00f5ff] group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
          <motion.a
            href="/yuvraj_resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyber-btn text-xs"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#00f5ff] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          id="mobile-menu-btn"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-[#00f5ff]/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={800}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="block font-mono text-slate-300 hover:text-[#00f5ff] transition-colors duration-300 cursor-pointer text-lg"
                  >
                    <span className="text-[#00f5ff]/60 mr-2">0{i + 1}.</span>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="/yuvraj_resume.pdf"
                download
                className="cyber-btn text-xs text-center mt-2"
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
