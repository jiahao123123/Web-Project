import React from 'react';
import { useParams } from 'react-router-dom';
import projectImage1 from './Profolio_website/GardenOfEden/Artboard_1.png';
import projectImage1_1 from './Profolio_website/GardenOfEden/Artboard_2.png';
import projectImage1_2 from './Profolio_website/GardenOfEden/Artboard_3.png';
import projectImage1_3 from './Profolio_website/GardenOfEden/Artboard_4.png';
import projectImage1_4 from './Profolio_website/GardenOfEden/Artboard_6.png';
import projectImage1_5 from './Profolio_website/GardenOfEden/book.cover.png';
import projectImage1_6 from './Profolio_website/GardenOfEden/Poster_1.png';
import projectImage1_7 from './Profolio_website/GardenOfEden/shot.png';
import projectImage1_8 from './Profolio_website/GardenOfEden/shot2.png';
import projectImage1_9 from './Profolio_website/GardenOfEden/ticket.png';
import projectImage1_10 from './Profolio_website/GardenOfEden/ticket2.png';
import projectImage1_11 from './Profolio_website/GardenOfEden/TicketBack.png';

const projectData = [
  {
    name: "Project 1",
    image: projectImage1,
    description: "This is the description for Project 1.",
    additionalImages: [
      projectImage1_1,
      projectImage1_2,
      projectImage1_3,
      projectImage1_4,
      projectImage1_5,
      projectImage1_6,
      projectImage1_7,
      projectImage1_8,
      projectImage1_9,
      projectImage1_10,
      projectImage1_11
    ]
  },
  {
    name: "Project 2",
    image: "path/to/projectImage2.png",
    description: "This is the description for Project 2.",
    additionalImages: ["path/to/additionalImage3.png", "path/to/additionalImage4.png"]
  },
  {
    name: "Project 3",
    image: "path/to/projectImage3.png",
    description: "This is the description for Project 3.",
    additionalImages: ["path/to/additionalImage5.png", "path/to/additionalImage6.png"]
  }
];

function ProjectDetails() {
  const { projectName } = useParams();
  const project = projectData.find(p => p.name === projectName);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-details">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} className="project-main-image" />
      <p>{project.description}</p>
      <div className="additional-images">
        {project.additionalImages.map((img, index) => (
          <img key={index} src={img} alt={`${project.name} additional ${index + 1}`} className="additional-image" />
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
