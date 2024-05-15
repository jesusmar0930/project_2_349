import React from 'react';
import './Projects.css';
import reactLogoImage from '../images/reactLogo.png'; // Import project images
import djangoPythonLogo from '../images/djangoPythonLogo.png';
import Spaceship from '../images/Spaceship.jpg';

const Projects = () => {
  const projects = [
    { // Project 1 data (details, technologies, timeline, etc.)
      title: 'Project 1',
      description: 'Frontend Web App',
      technologies: ['React', 'Node.js'],
      link: 'https://github.com/jesusmar0930',
      image: reactLogoImage,
      // ...timeline data
    },
    { // Project 2 data
      // ...
    },
    { // Project 3 data (note the humorous technologies list)
      // ...
    },
    // Add more projects as needed...
  ];

  return (
    <section className="projects"> 
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => ( // Map project data to JSX 
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details"> {/* Title, description, technologies, link */}
              <h3>{project.title}</h3>
              {/* ...other project details */}
            </div>
            <div className="project-timeline">  {/* Project timeline (dates and milestones) */}
              <h4>Project Timeline</h4>
              {/* ...timeline items */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
