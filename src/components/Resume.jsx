export default function Resume() {
  return (
    <div className="resume-page-section">
      
      <div className="resume-header-container">
        <div className="collage-star" style={{ top: '-10px', left: '-75px', transform: 'rotate(-15deg)' }}></div>
        <div className="magazine-cutout">EXPERIENCE &amp; SKILLS</div>
        <h1 className="serif-solid" style={{ fontSize: '4rem', marginTop: '10px', color: '#1B2533' }}>RESUME</h1>
      </div>

      <div className="resume-paper">
        <div className="resume-toolbar-row">
          <span className="resume-file-info">📄 Akshita_Resume.pdf</span>
          <a 
            href="/resume/Akshita_Resume.pdf" 
            download="Akshita_Resume.pdf" 
            className="resume-download-pill"
          >
            Download PDF &darr;
          </a>
        </div>
        <div className="pdf-viewer-container">
          <embed 
            src="/resume/Akshita_Resume.pdf" 
            type="application/pdf" 
            width="100%" 
            height="100%" 
          />
        </div>
      </div>
      
    </div>
  );
}