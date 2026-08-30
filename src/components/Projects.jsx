import { useState } from 'react';

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projectList = [
    {
      title: "CompactIQ – Enterprise Compliance Engine",
      shortDesc: "A desktop-based enterprise compliance engine built with FastAPI, React, Electron, and SQLite.",
      fullDesc: "Built a desktop-based enterprise compliance engine with a FastAPI backend, React/Electron frontend, and SQLite persistence. Integrated Google Gemini to extract dependency and compatibility rules from vendor documentation and store them in a searchable knowledge base. Developed automated endpoint scanning and compatibility visualization to identify compliance issues across application dependencies.",
      image: "/projects/compactIQ.png",
      github: "https://github.com/akshita568/compactIQ"
    },
    {
      title: "Silent Strokes",
      shortDesc: "A full-stack art portfolio and studio management platform using React and Firebase.",
      fullDesc: "Built a full-stack art portfolio and studio management platform using React, Vite, Firebase Authentication, and Cloud Firestore. Implemented protected admin routes and real-time commission management using Firebase Authentication and Firestore. Designed a responsive interface with interactive galleries and storytelling-driven user experience using Tailwind CSS.",
      image: "/art/art1.png",
      github: "https://github.com/akshita568/silentStrokes"
    },
    {
      title: "Network Security Threat Detection Platform",
      shortDesc: "An end-to-end phishing URL detection pipeline covering MongoDB and Scikit-Learn.",
      fullDesc: "Developed an end-to-end phishing URL detection pipeline covering MongoDB ingestion, preprocessing and model training. Built reusable configuration, logging, exception handling, and data ingestion modules to improve pipeline reliability and maintainability. Containerized the ML workflow using Docker for seamless deployment.",
      image: "/projects/networksec.png",
      github: "https://github.com/akshita568/network_security_threat_detection"
    }
  ];

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="projects-page-section">
      <div className="projects-header-container">
        <div className="collage-star" style={{ top: '-20px', left: '10px', transform: 'rotate(-15deg)' }}></div>
        <div className="magazine-cutout">MY WORK</div>
        <h1 className="serif-solid" style={{ fontSize: '4rem !important', marginTop: '10px' }}>PROJECTS</h1>
      </div>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-polaroid">
            <div className="project-image-frame">
              <img src={project.image} alt={project.title} />
            </div>
            
            <div className="project-info">
              <h3>{project.title}</h3>
              
              <p>
                {expandedIndex === index ? project.fullDesc : project.shortDesc}
              </p>

              <div className="project-actions-row">
                <a href={project.github} target="_blank" rel="noreferrer" className="github-icon-btn" title="View GitHub Repo">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>

                <button onClick={() => toggleReadMore(index)} className="read-more-btn">
                  {expandedIndex === index ? 'Read Less ↑' : 'Read More ↓'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}