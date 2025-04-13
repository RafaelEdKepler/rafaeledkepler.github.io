import { useInView } from 'react-intersection-observer';
import SkillBar from './SkillBar.tsx';

const About = () => {
  const { ref: aboutRef, inView: aboutVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { ref: skillsRef, inView: skillsVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = [
    { name: 'JavaScript', percentage: 90 },
    { name: 'TypeScript', percentage: 80 },
    { name: 'React', percentage: 90 },
    { name: 'Next.js', percentage: 80 },
    { name: 'Node.js', percentage: 70 },
    { name: 'HTML/CSS', percentage: 95 },

  ];

  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div
          ref={aboutRef}
          className={`about-text ${aboutVisible ? 'visible' : ''}`}
        >
          <p>Hello! I'm a fullstack developer with a strong focus on frontend development. I specialize in React, Next.js, TypeScript, and Node.js, and have been working professionally in the field since 2020.</p>
          <p>The repositories listed below are all study projects I’ve built during my free time, exploring new tools, features, and techniques to constantly evolve as a developer.</p>
          <p>I also have experience working on high-traffic applications and applying test-driven development practices to ensure code quality and reliability.</p>
          <p>Feel free to reach out on LinkedIn if you'd like to connect or chat!</p>
        </div>
        <div
          ref={skillsRef}
          className={`skills ${skillsVisible ? 'visible' : ''}`}
        >
          <div className="skill-bars">
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                visible={skillsVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;