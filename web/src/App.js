import React from 'react';
import './App.css';
import part1Image1 from './images/part1-image1.jpg';
import part1Image2 from './images/part1-image2.jpg';
import part2Image1 from './images/part2-image1.jpg';
import part2Image2 from './images/part2-image2.jpg';
import part2Subpart1Image1 from './images/part2-subpart1-image1.jpg';
import part2Subpart1Image2 from './images/part2-subpart1-image2.jpg';

function PortfolioSection({ title, description, images, subsections }) {
  return (
    <div className="portfolio-section">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="images">
        {images.map((image, index) => (
          <img src={image} alt={`${title} ${index + 1}`} key={index} className="portfolio-image" />
        ))}
      </div>
      <div className="subsections">
        {subsections.map((subsection, index) => (
          <PortfolioSection
            key={index}
            title={subsection.title}
            description={subsection.description}
            images={subsection.images}
            subsections={subsection.subsections}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  const portfolioData = [
    {
      title: "Part 1",
      description: "This is the description for Part 1.",
      images: [part1Image1, part1Image2],
      subsections: [],
    },
    {
      title: "Part 2",
      description: "This is the description for Part 2.",
      images: [part2Image1, part2Image2],
      subsections: [
        {
          title: "Part 2 - Subpart 1",
          description: "This is the description for Part 2 - Subpart 1.",
          images: [part2Subpart1Image1, part2Subpart1Image2],
          subsections: [],
        },
      ],
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {portfolioData.map((section, index) => (
          <PortfolioSection
            key={index}
            title={section.title}
            description={section.description}
            images={section.images}
            subsections={section.subsections}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
