import { useState, useEffect, use, useMemo } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Footer from './components/Footer.tsx';
import './App.css';
import { repositories } from './utils/repositories.ts';
import { ListOfRepositoriesProps } from './types.ts';

function App() {
  const [scrolled, setScrolled] = useState(false);

  const listOfRepositories: ListOfRepositoriesProps = useMemo(() => (repositories), []);


  useEffect(() => {
    try {
      const repositories = use(fetch("https://api.github.com/users/RafaelEdKepler/repos"))
      console.log(repositories);
    } catch (err) {
      console.log(err);
    }
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Projects
        repositories={listOfRepositories}
      />
      <Footer />
    </div>
  );
}

export default App;