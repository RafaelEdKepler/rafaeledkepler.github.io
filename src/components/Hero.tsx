import Particles from './Particles.tsx';

const Hero = () => {
  return (
    <header id="home" className="hero">
      <Particles />
      <div className="content">
        <div className="profile-pic">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQEEANcrWUXHxA/profile-displayphoto-shrink_800_800/B4DZUaCwqgHIAo-/0/1739898686731?e=1749686400&v=beta&t=aCU2acWZu-gICBoounqYladGlh0Sr_RSuK5sHcIImC8" />
          <div className="profile-pic-placeholder">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <h1>Rafael Eduardo Kepler</h1>
        <h2>FrontEnd Engineer</h2>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://dev.to" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-dev"></i>
          </a>
        </div>
        <a href="https://www.linkedin.com/in/rafaeledkepler/" target="_blank" className="cta-btn">Get In Touch</a>
      </div>
      <div className="scroll-indicator">
        <i className="fas fa-chevron-down"></i>
      </div>
    </header>
  );
};

export default Hero;