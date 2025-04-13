import { useEffect } from 'react';

const Particles = () => {
  useEffect(() => {
    const createParticle = () => {
      const particlesContainer = document.getElementById('particles')!;
      const colors = ['#e94560', '#0f3460', '#16213e', '#1a1a2e'];

      const particle = document.createElement('div');
      particle.classList.add('particle');

      const size = Math.random() * 15 + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;

      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;

      particle.style.left = `${posX}%`;
      particle.style.bottom = `${posY}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;

      particlesContainer.appendChild(particle);
    };

    for (let i = 0; i < 50; i++) {
      createParticle();
    }
  }, []);

  return <div className="background-animation" id="particles"></div>;
};

export default Particles;