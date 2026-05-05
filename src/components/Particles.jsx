import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 3 },
          },
        },
        particles: {
          color: { value: ['#00f5ff', '#bf5fff', '#ff0080'] },
          links: {
            color: '#00f5ff',
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: { density: { enable: true, area: 1000 }, value: 60 },
          opacity: { value: { min: 0.1, max: 0.4 }, animation: { enable: true, speed: 1, sync: false } },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 }, animation: { enable: true, speed: 2, sync: false } },
        },
        detectRetina: true,
      }}
    />
  );
}
