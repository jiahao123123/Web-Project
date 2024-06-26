import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import bgEffect1 from './images/bgEffect1.png';
import bgEffect2 from './images/bgEffect2.png';
import bgEffect3 from './images/bgEffect3.png';
import projectImage1 from './images/projectImage1.png';
import projectImage2 from './images/projectImage2.png';
import projectImage3 from './images/projectImage3.png';

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
const projectData = [
  {
    name: "Project 1",
    image: projectImage1,
    description: "This is the description for Project 1.",
  },
  {
    name: "Project 2",
    image: projectImage2,
    description: "This is the description for Project 2.",
  },
  {
    name: "Project 3",
    image: projectImage3,
    description: "This is the description for Project 3.",
  },
];

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

function ProjectSection({ name, image, description }) {
  return (
    <div className="project-section">
      <div className="project-top">
        <h2>{name}</h2>
      </div>
      <div className="project-bottom">
        <img src={image} alt={name} />
        <p>{description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-page">
      {projectData.map((project, index) => (
        <ProjectSection
          key={index}
          name={project.name}
          image={project.image}
          description={project.description}
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
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Portfolio</h1>
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
