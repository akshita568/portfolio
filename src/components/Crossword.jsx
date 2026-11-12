import './Crossword.css';

/**
 * Restored Scrapbook-Style Crossword Component
 * Maintains original structural elements:
 * - Vertical "CONTENTS" sidebar with capped line
 * - Portrait cutout (/photos/me2.png) + amber collage star
 * - Handwritten annotations ("that's me!", "creative expression") with curved SVG arrows
 * - 7x6 letter grid with tilted hand-drawn oval highlight circles
 * Colors updated to new theme: Pastel Cream (#FCFBF7), Slate Blue (#385273), Amber (#D99B26), Navy (#1B2533)
 */
export default function Crossword() {
  const letters = [
    ['a', 'k', 's', 'h', 'i', 't', 'a'],
    ['o', 'r', 'x', 'v', 'q', 'n', 'z'],
    ['a', 'r', 't', 'i', 's', 't', 'k'],
    ['x', 'q', 'o', 'u', 'r', 'x', 'p'],
    ['b', 'c', 'o', 'd', 'e', 'r', 't'],
    ['s', 't', 'y', 'l', 'e', 'g', 'm'],
  ];

  return (
    <section className="crossword-section-wrapper" aria-label="Interactive Word Collage">
      <div className="crossword-scrapbook-card">
        
        {/* 1. Vertical CONTENTS Sidebar */}
        <div className="crossword-sidebar">
          <div className="crossword-vertical-title">CONTENTS</div>
          <div className="crossword-vertical-line"></div>
        </div>

        {/* 2. Middle Portrait Cutout (Black & White, Scaled, Shifted Left) */}
        <div className="crossword-middle">
          <img 
            src="/photos/me2.png" 
            alt="Akshita Sharma Portrait Cutout" 
            className="crossword-cutout-img" 
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* 3. Crossword Graphic with Annotations & Hand-Drawn Circles */}
        <div className="crossword-graphic-container">
          
          {/* Arrowhead Defs for SVG Markers */}
          <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true">
            <defs>
              <marker id="arrowhead-blue" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#385273" />
              </marker>
              <marker id="arrowhead-gold" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#D99B26" />
              </marker>
            </defs>
          </svg>

          {/* Annotation 1: that's me! -> points to 'akshita' */}
          <div className="crossword-anno crossword-anno-akshita">
            <span>that&rsquo;s me!</span>
            <svg className="crossword-arrow-1" viewBox="0 0 60 60" aria-hidden="true">
              <path d="M 50,10 Q 30,30 10,50" markerEnd="url(#arrowhead-blue)" />
            </svg>
          </div>
          
          {/* Annotation 2: creative expression -> points to 'artist' */}
          <div className="crossword-anno crossword-anno-artist">
            <span>creative expression</span>
            <svg className="crossword-arrow-2" viewBox="0 0 90 50" aria-hidden="true">
              <path d="M 5,10 Q 40,10 70,35" markerEnd="url(#arrowhead-gold)" />
            </svg>
          </div>

          {/* 7x6 Letter Grid & Stylized Highlight Circles */}
          <div className="crossword-letter-grid">
            <div className="crossword-circle-highlight circle-row-akshita" title="akshita"></div>
            <div className="crossword-circle-highlight circle-row-artist" title="artist"></div>
            <div className="crossword-circle-highlight circle-row-coder" title="coder"></div>

            {letters.map((row, rowIndex) =>
              row.map((letter, colIndex) => (
                <span key={`${rowIndex}-${colIndex}`}>{letter}</span>
              ))
            )}
          </div>

        </div>

      </div>
    </section>
  );
}