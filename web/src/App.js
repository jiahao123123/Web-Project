import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import bgEffect1 from './images/bgEffect1.png';
import bgEffect2 from './images/bgEffect2.png';
import bgEffect3 from './images/bgEffect3.png';

const initialPortfolioData = [
  {
    title: "Part 1",
    description: "This is the description for Part 1.",
  },
  {
    title: "Part 2",
    description: "This is the description for Part 2.",
  },
  {
    title: "Part 3",
    description: "This is the description for Part 3.",
  },
];

const bgEffects = [bgEffect1, bgEffect2, bgEffect3];

function PortfolioSection({ title, description, index }) {
  const backgroundColor = index % 2 === 0 ? 'rgb(22, 23, 24)' : 'rgb(31, 32, 34)';
  const textColor = 'white';

  return (
    <div className="portfolio-section" style={{ backgroundColor, color: textColor }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Portfolio() {
  const [portfolioData, setPortfolioData] = useState(initialPortfolioData);
  const [bgEffectIndex, setBgEffectIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.body.scrollHeight;

      if (scrollPosition >= totalHeight) {
        setPortfolioData(prevData => [...prevData, ...initialPortfolioData]);
      }

      const index = Math.floor((window.scrollY / (totalHeight / portfolioData.length)) % bgEffects.length);
      setBgEffectIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [portfolioData]);

  return (
    <div className="portfolio-container">
      <div className="bg-effect" style={{ backgroundImage: `url(${bgEffects[bgEffectIndex]})` }}></div>
      {portfolioData.map((section, index) => (
        <PortfolioSection
          key={index}
          title={section.title}
          description={section.description}
          index={index}
        />
      ))}
    </div>
  );
}

function About() {
  return <div className="page-content">This is the About page.</div>;
}

function Projects() {
  return <div className="page-content">This is the Projects page.</div>;
}

function Contact() {
  return <div className="page-content">This is the Contact page.</div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Portfolio</h1>
          <nav>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
