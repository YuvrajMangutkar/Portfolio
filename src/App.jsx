import { useEffect, useRef, lazy, Suspense } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Loader from './components/Loader';
import ErrorBoundary from './components/ErrorBoundary';
import ChakraBg from './components/ChakraBg';

// Lazy-load below-the-fold sections for faster initial paint
const About    = lazy(() => import('./components/About'));
const Skills   = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact  = lazy(() => import('./components/Contact'));
const Footer   = lazy(() => import('./components/Footer'));

// Section loading placeholder
function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-8 h-8 border-2 border-[#00f5ff]/30 border-t-[#00f5ff] rounded-full animate-spin" />
    </div>
  );
}

// Cursor follower — hidden on touch devices
function CursorGlow() {
  const cursorRef = useRef(null);
  const dotRef    = useRef(null);

  useEffect(() => {
    // Skip on touch-only devices
    if (window.matchMedia('(hover: none)').matches) return;

    let mouseX = 0, mouseY = 0;
    let curX   = 0, curY   = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top  = `${mouseY}px`;
      }
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.1;
      curY += (mouseY - curY) * 0.1;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${curX}px`;
        cursorRef.current.style.top  = `${curY}px`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    animate();
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Don't render on touch devices at all
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-40 h-40 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ background: 'radial-gradient(circle, rgba(255,140,0,0.05) 0%, transparent 70%)', transition: 'none' }}
      />
      <div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ background: '#ff8c00', boxShadow: '0 0 8px #ff8c00, 0 0 16px #ff4500' }}
      />
    </>
  );
}

// Scroll progress bar
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8c00] via-[#ff4500] to-[#cc1a00] origin-left z-[60]"
      style={{ scaleX }}
    />
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <div className="relative min-h-screen naruto-bg bg-[#030712] text-slate-100 overflow-x-hidden">
        <ChakraBg />
        <Loader />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />

        <main role="main">
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
