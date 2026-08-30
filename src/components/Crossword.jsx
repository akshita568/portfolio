export default function Crossword() {
  const letters = [
    ['a', 'k', 's', 'h', 'i', 't', 'a'], 
    ['o', 'r', 'x', 'v', 'q', 'n', 'z'],
    ['a', 'r', 't', 'i', 's', 't', 'k'], 
    ['x', 'q', 'o', 'u', 'r', 'x', 'p'],
    ['b', 'c', 'o', 'd', 'e', 'r', 't'], 
    ['s', 't', 'y', 'l', 'e', 'g', 'm']
  ];

  return (
    <section id="projects" className="projects-section">
      
      <div className="contents-sidebar">
        <div className="vertical-title">CONTENTS</div>
        <div className="vertical-line"></div>
      </div>

      <div className="projects-middle">
        <div className="collage-star projects-star"></div>
        <img src="/photos/me2.png" alt="Secondary Portrait" className="projects-cutout" />
      </div>

      <div className="crossword-container">
        
        <svg style={{ width: 0, height: 0, position: 'absolute' }}>
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="white" />
            </marker>
          </defs>
        </svg>

        {/* Annotation 1*/}
        <div className="annotation anno-akshita">
          <span className="anno-text">that's me!</span>
          <svg className="arrow-svg arrow-1" viewBox="0 0 60 60">
            <path d="M 50,10 Q 30,30 10,50" markerEnd="url(#arrowhead)" />
          </svg>
        </div>
        
        {/* Annotation 2 */}
        <div className="annotation anno-artist">
          <span className="anno-text">creative expression</span>
          <svg className="arrow-svg arrow-2" viewBox="0 0 90 50">
            <path d="M 5,10 Q 40,10 70,35" markerEnd="url(#arrowhead)" />
          </svg>
        </div>

        {/* The Grid & Hand-drawn Circles */}
        <div className="crossword-grid">
          <div className="word-circle circle-akshita"></div>
          <div className="word-circle circle-artist"></div>
          <div className="word-circle circle-coder"></div>

          {letters.map((row, rowIndex) => (
            row.map((letter, colIndex) => (
              <span key={`${rowIndex}-${colIndex}`}>{letter}</span>
            ))
          ))}
        </div>
      </div>
      
    </section>
  );
}