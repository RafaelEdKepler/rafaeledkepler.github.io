import { useState } from 'react';
import { NavBarComponentProps } from './types';

const Navbar = ({ scrolled }: NavBarComponentProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <a href="#home" className="logo">Dev<span>Folio</span></a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <button className="close-menu-btn" onClick={closeMenu}>
          <i className="fas fa-times"></i>
        </button>
        <div className="mobile-links">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </div>

      <div className={`overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </>
  );
};

export default Navbar;