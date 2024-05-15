import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
  ];

  return (
    <section className="skills">
      <h2>Skills and Expertise</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">
              <i className={skill.icon}></i>
            </div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;