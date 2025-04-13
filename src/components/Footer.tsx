import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy; {new Date().getFullYear()} Rafael Kepler. All Rights Reserved.</p>
      <div className="social-links">
        <a href="https://github.com/RafaelEdKepler" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github">
            <FaGithub />
          </i>
        </a>
        <a href="https://www.linkedin.com/in/rafaeledkepler/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin">
            <FaLinkedin />
          </i>
        </a>
      </div>
      <a href="#home" className="back-to-top">
        Back to Top <i className="fas fa-arrow-up"></i>
      </a>
    </footer>
  );
};

export default Footer;