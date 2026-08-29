export default function Resume() {
  return (
    <div className="resume-page-section">
      
      {/* Header */}
      <div className="resume-header-container">
        <div className="collage-star" style={{ top: '-10px', left: '-75px', transform: 'rotate(-15deg)' }}></div>
        <div className="magazine-cutout">EXPERIENCE & SKILLS</div>
        <h1 className="serif-solid" style={{ fontSize: '4rem !important', marginTop: '10px' }}>RESUME</h1>
      </div>

      {/* Resume Document Wrapper */}
      <div className="resume-paper">
        
        {/* Download & View Options */}
        <div className="resume-download-bar">
          <a href="/my-resume.pdf" download="Akshita_Resume.pdf" className="project-link-btn">
            DOWNLOAD PDF ↓
          </a>
        </div>

        {/* Embedded PDF Viewer for actual preview */}
        <div className="pdf-viewer-container">
          <embed 
            src="/resume/Akshita_Resume.pdf" 
            type="application/pdf" 
            width="100%" 
            height="700px" 
          />
        </div>

      </div>
    </div>
  );
}