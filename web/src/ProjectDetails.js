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
import "./ProjectDetails.css"
import projectImage2_1 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_02.png';
import projectImage2_2 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_03.png';
import projectImage2_3 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_04.png';
import projectImage2_4 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_05.png';
import projectImage2_5 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_06.png';
import projectImage2_6 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_07.png';
import projectImage2_7 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_08.png';
import projectImage2_8 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_09.png';
import projectImage2_9 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_10.png';
import projectImage2_11 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_11.png';
import projectImage2_12 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_12.png';
import projectImage2_13 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_13.png';
import projectImage2_14 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_14.png';
import projectImage2_15 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_15.png';
import projectImage2_16 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_16.png';
import projectImage2_17 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_17.png';
import projectImage2_18 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_18.png';
import projectImage2_19 from './Profolio_website/GoodDesign/li_j_good_design_brochure_104_Page_19.png';


import projectImage3_1 from './Profolio_website/Ziptie/DSC02587.jpg';
import projectImage3_2 from './Profolio_website/Ziptie/DSC02589.jpg';
import projectImage3_3 from './Profolio_website/Ziptie/DSC02600.jpg';
import projectImage3_4 from './Profolio_website/Ziptie/DSC02601.jpg';
import projectImage3_5 from './Profolio_website/Ziptie/DSC02603.jpg';
import projectImage3_6 from './Profolio_website/Ziptie/IMG_9918.jpg';

const projectData = [
  {
    name: "Project 1",
    description: "This is the description for Project 1.",
    additionalImages: [
        projectImage1,
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
    image: projectImage2_1,
    description: "This is the description for Project 2.",
    additionalImages: [
        projectImage2_2,
        projectImage2_3,
        projectImage2_4,
        projectImage2_5,
        projectImage2_6,
        projectImage2_7,
        projectImage2_8,
        projectImage2_9,
        projectImage2_11,
        projectImage2_12,
        projectImage2_13,
        projectImage2_14,
        projectImage2_15,
        projectImage2_16,
        projectImage2_17,
        projectImage2_18,
        projectImage2_19,
    ]
  },
  {
    name: "Project 3",
    image: projectImage3_1,
    description: `
      Course material: Form Studio offers students a strong foundation in the making, assessing, and critiquing of visual materials and begins a discussion that will reverberate through the rest of their studies. Students learn the use and structure of materials and media, and the development of a rigorous and disciplined process through which they can create and analyze what they are creating. Form studio will examine process, and explore iterative methodologies for producing work- creating systems, tools, algorithms, and operations. Heavy emphasis will be placed on thinking through making in two and three dimensional space. Students will use digital and analog tools to create work that explores, critiques, and interrogates the means of work-making itself, and student's assumptions about their own practice.

      My Inspiration is Thomas Jansen
      Media: Ziptie, Photoshot 
      Date: Fall 2024
    `,
    additionalImages: [projectImage3_2,
        projectImage3_3,
        projectImage3_4,
        projectImage3_5,
        projectImage3_6
    ]
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
      <p>{project.description}</p>
      
      <div className="additional-images">
        {project.additionalImages.map((img, index) => (
          <img key={index} src={img} alt={`${project.name} additional ${index + 1}`} className="project-image" />
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
