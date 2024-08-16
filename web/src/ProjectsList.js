import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsList.css';
import Button from '@mui/material/Button';

const projectData = [
  {
    name: "Project 1",
    image: require('./images/projectImage1.png'),
    description: "This is the description for Project 1."
  },
  {
    name: "Project 2",
    image: require('./images/projectImage2.png'),
    description: "This is the description for Project 2."
  },
  {
    name: "Project 3",
    image: require('./images/projectImage3.png'),
    description: "This is the description for Project 3."
  }
];

function ProjectsList() {
  return (
    <div className="projects-list">
      {projectData.map((project, index) => (
        <div key={index} className={`project-item project-color-${index % 3}`}>
          <h2>{project.name}</h2>
          <img src={project.image} alt={project.name} className="project-image" />
          <p>{project.description}</p>
          <Link to={`/project/${project.name}`} style={{ textDecoration: 'none' }}>
            <Button variant="outlined">
              View Details
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;
