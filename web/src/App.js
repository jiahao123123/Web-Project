import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import ProjectsList from './ProjectsList'; // Add this line to import the CSS
import ProjectDetails from './ProjectDetails';
import bgEffect1 from './images/bgEffect1.png';
import bgEffect2 from './images/bgEffect2.png';
import bgEffect3 from './images/bgEffect3.png';

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
  const initialPortfolioData = [
    { title: "JiaMei Li" },
    { title: "UX Design" },
    { title: "Creative Developer & Designer" },
  ];

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

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1><span style={{ color: "rgb(200, 200, 200)" }}>Jiamei Li</span></h1>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <h2>Phone</h2>
          <p>+123-456-7890</p>
        </div>
        <div className="contact-item">
          <h2>Email</h2>
          <p>li@example.com</p>
        </div>
        <div className="contact-item">
          <h2>LinkedIn</h2>
          <p><a href="https://www.linkedin.com/in/li" target="_blank" rel="noopener noreferrer">linkedin.com/in/li</a></p>
        </div>
      </div>
    </div>
  );
}

function Taskbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="taskbar" onClick={handleClick}>
      {/* Your taskbar content here */}
    </div>
  );
}

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <Router>
      <div className="App">
        <header className={`App-header ${visible ? '' : 'hidden'}`}>
          <h1>JIAMEI LI</h1>
          <nav>
            <ul>
              <li><Link to="/">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <Taskbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/projects" element={<ProjectsList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:projectName" element={<ProjectDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
