import { useState } from 'react';

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projectList = [
    {
      title: "CompactIQ – Enterprise Compliance Engine",
      shortDesc: "An AI-powered hardware compatibility and compliance platform that helps identify potential conflicts between hardware components, BIOS versions, drivers, and system configurations using technical documentation and compatibility rules.",
      fullDesc: "Developed a full-stack desktop application using React, FastAPI, Electron, and SQLite to analyze hardware configurations and identify potential compatibility issues. Integrated Google's Gemini API to extract dependency and compatibility rules from vendor documentation, enabling automated analysis of hardware, BIOS, and driver requirements. Implemented backend APIs and a compliance engine to evaluate configuration changes against extracted rules and identify potential conflicts. The React frontend supports document uploads and compatibility scans, while Electron provides a desktop interface for comparing configurations and generating reports. SQLite handles local data persistence, bringing the analysis workflow together in a desktop application.",
      image: "/projects/compactIQ.webp",
      github: "https://github.com/akshita568/compactIQ"
    },
    {
      title: "Silent Strokes",
      shortDesc: "A digital art platform and portfolio for showcasing original artworks, managing commissions, and connecting with people interested in handmade art. Built to bring the artwork and the business behind it together in one place.",
      fullDesc: "Built using React and JavaScript with a component-based frontend architecture and custom CSS for responsive layouts and interactive UI elements. Integrated Firebase for backend services, data storage, and application functionality. Developed reusable components for artwork presentation and commission-related interactions, with responsive styling to ensure a consistent experience across desktop and mobile devices.",
      image: "/art/art1.webp",
      github: "https://github.com/akshita568/silentStrokes"
    },
    
    {
      title: "Network Security Threat Detection Platform",
      shortDesc: "A machine learning-based security platform that identifies potentially malicious URLs through an automated pipeline for data processing, model training, and prediction.",
      fullDesc: "Implemented an end-to-end machine learning pipeline using Python, Scikit-learn, Pandas, and NumPy for data processing, feature engineering, and model training. Integrated MongoDB Atlas for data ingestion and storage, with MLflow for experiment tracking and model management. Developed a FastAPI backend to serve model predictions through REST APIs. Containerized the application using Docker and deployed it on AWS EC2, with Amazon ECR for container image management. Configured GitHub Actions for automated CI/CD workflows.",
      image: "/projects/networksec.webp",
      github: "https://github.com/akshita568/network_security_threat_detection"
    },

    {
      title: "This Portfolio Actually",
      shortDesc: "A personal portfolio website that brings together my projects, technical experience, and creative interests in one place. It serves as a space to showcase my work, share a little about myself, and document my journey as a developer.",
      fullDesc: "Developed using React and Vite with a component-based architecture and reusable UI elements. Implemented custom styling using CSS Grid, Flexbox, and responsive design principles to ensure compatibility across different screen sizes. Incorporated custom SVG illustrations, typography, textures, and interactive elements to create a distinctive interface. Deployed on Vercel.",
      image: "/projects/portfolio.webp",
      github: "https://github.com/akshita568/portfolio"
    },
    {
      title: "Code Vulnerability Detection System",
      shortDesc: "A static code analysis tool that uses machine learning to detect potential security vulnerabilities in C/C++ programs. It evaluates source code, predicts whether it is safe or vulnerable, and highlights suspicious statements that may contribute to security risks.",
      fullDesc: "Developed a graph-based vulnerability detection system using Python, PyTorch, and PyTorch Geometric (PyG). The system converts C/C++ source code into Code Property Graphs (CPGs), combining Abstract Syntax Trees (AST), Control Flow Graphs (CFG), and Data Flow Graphs (DFG) to capture structural and semantic relationships within the code. Integrated Microsoft's CodeBERT model to generate contextual code embeddings, which are processed by a Relational Gated Graph Neural Network (GGNN) for binary vulnerability classification. Implemented attention-based graph pooling to identify influential code statements and provide explainability through suspicious statement rankings. Joern CLI is used for graph extraction, with a custom AST, CFG, and DFG extraction fallback. The inference pipeline produces safe/vulnerable predictions with confidence scores, while model training uses PyTorch, AdamW optimization, focal loss, and evaluation metrics including precision, recall, F1-score, and ROC-AUC.",
      image: "/projects/compiler.webp",
      github: "https://github.com/Jadedinfate/Compiler_optimisation"
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
        <h1 className="serif-solid" style={{ fontSize: '4rem', marginTop: '10px', color: '#1B2533' }}>PROJECTS</h1>
      </div>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-polaroid">
            <div className="project-image-frame">
              <img 
                src={project.image} 
                alt={project.title} 
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <div className="project-info">
              <h3>{project.title}</h3>
              
              <p>
                {expandedIndex === index ? project.fullDesc : project.shortDesc}
              </p>

              <div className="project-actions-row">
                <a href={project.github} target="_blank" rel="noreferrer" className="github-icon-btn" title="View GitHub Repo">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
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