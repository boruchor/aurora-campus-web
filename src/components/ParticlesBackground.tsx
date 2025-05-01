
import React, { useCallback, useEffect, useState } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { useTheme } from '@/components/ThemeProvider';

const ParticlesBackground = () => {
  const { theme } = useTheme();
  const [particlesKey, setParticlesKey] = useState(0);
  
  // Force particles to re-render when theme changes
  useEffect(() => {
    setParticlesKey(prev => prev + 1);
  }, [theme]);
  
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      key={particlesKey}
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        fpsLimit: 60,
        particles: {
          color: {
            value: theme === 'dark' ? '#a78bfa' : '#7952cf',
          },
          links: {
            color: theme === 'dark' ? '#a78bfa' : '#7952cf',
            distance: 150,
            enable: true,
            opacity: theme === 'dark' ? 0.4 : 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: theme === 'dark' ? 50 : 40,
          },
          opacity: {
            value: theme === 'dark' ? 0.3 : 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
        background: {
          color: {
            value: theme === 'dark' ? '#0f172a' : 'transparent',
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
