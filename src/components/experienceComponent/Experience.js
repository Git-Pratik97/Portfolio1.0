import React, { useEffect, useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/info.json')
      .then((response) => response.json())
      .then((data) => setExperience(data.experience || []))
      .catch(() => setExperience([]));
  }, []);

  if (!experience.length) {
    return <div className="exp-container">Loading experience...</div>;
  }

  return (
    <div className="exp-container">
      <h2 className="exp-title">Professional Experience</h2>
      {experience.map((exp, idx) => (
        <div className="exp-card" key={idx}>
          <div className="exp-header">
            <span className="exp-role">{exp.role}</span>
            <span className="exp-company">{exp.company}</span>
            <span className="exp-duration">{exp.duration}</span>
          </div>
          {exp.projects && exp.projects.length > 0 && (
            <div className="exp-projects">
              <h3 className="exp-projects-title">Projects</h3>
              {exp.projects.map((proj, pidx) => (
                <div className="exp-project-card" key={pidx}>
                  <div className="exp-project-name">{proj.name}</div>
                  <div className="exp-tech-stack">
                    <span>Tech Stack:</span>
                    <span className="exp-tech-list">
                      {proj.tech_stack.join(', ')}
                    </span>
                  </div>
                  <ul className="exp-highlights-list">
                    {proj.highlights.map((hl, hidx) => (
                      <li key={hidx} className="exp-highlight">{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience;