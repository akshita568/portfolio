import { Link } from 'react-router-dom';
import './Home.css';

/**
 * Modern Bento Box Homepage Component
 * Inspired by structured editorial magazine layout:
 * - Slate/Denim Blue (#385273)
 * - Warm Beige/Cream background (#F4F0EB)
 * - High-contrast Dark Navy text (#1B2533)
 * - Preserves 100% of user content (Bio, 400+ DSA, Skills, Tools, Links, Certificate, Art)
 */
export default function Home() {
  // All current skill & language data preserved
  const languages = [
    { name: 'C++', percentage: 90, level: 'Advanced' },
    { name: 'Python', percentage: 85, level: 'Advanced' },
    { name: 'JavaScript', percentage: 70, level: 'Proficient' },
    { name: 'Go', percentage: 10, level: 'Exploring' },
  ];

  const frameworks = [
    'React',
    'FastAPI',
    'Flask',
    'Pandas',
    'Scikit-Learn',
    'MongoDB',
    'SQLite',
    'Firebase',
    'NumPy',
    'HTML & CSS',
  ];

  const tools = [
    'Git',
    'GitHub',
    'Docker',
    'VS Code',
    'Figma',
    'Postman',
  ];

  // All current social links preserved
  const socialLinks = [
    {
      platform: 'GitHub',
      handle: '@akshita568',
      url: 'https://github.com/akshita568',
      desc: 'Code repositories & open source projects',
    },
    {
      platform: 'LinkedIn',
      handle: 'Akshita Sharma',
      url: 'https://www.linkedin.com/in/akshita-sharma-90474a347/',
      desc: 'Professional career & network updates',
    },
    {
      platform: 'LeetCode',
      handle: '@akshita_Sharma568',
      url: 'https://leetcode.com/u/akshita_Sharma568/',
      desc: '400+ DSA algorithmic problems solved',
    },
    {
      platform: 'Codeforces',
      handle: '@akshita_sharma',
      url: 'https://codeforces.com/profile/akshita_sharma',
      desc: 'Competitive programming & live rounds',
    },
    {
      platform: 'Codolio',
      handle: '@akshita_',
      url: 'https://codolio.com/profile/akshita_',
      desc: 'Unified competitive developer profile',
    },
    {
      platform: 'Art Page',
      handle: '@artsydaisies__',
      url: 'https://www.instagram.com/artsydaisies__?igsi=MXRvd2k0M3VxbnQwcA==',
      desc: 'Original artwork, prints & commissions',
    },
  ];

  return (
    <div className="bento-container">
      
      {/* =================================================================
          1. TOP BANNER CARD: EDITORIAL MASTHEAD
          ================================================================= */}
      <section className="bento-card bento-header-card">
        <div className="bento-header-top">
          <div className="bento-eyebrow-tag">
            PRE-FINAL YEAR CS STUDENT &middot; NIT HAMIRPUR
          </div>
          
          <div className="bento-social-icons-row">
            <a href="https://github.com/akshita568" target="_blank" rel="noreferrer" className="bento-mini-icon-link">
              GITHUB ↗
            </a>
            <a href="https://www.linkedin.com/in/akshita-sharma-90474a347/" target="_blank" rel="noreferrer" className="bento-mini-icon-link">
              LINKEDIN ↗
            </a>
            <a href="https://leetcode.com/u/akshita_Sharma568/" target="_blank" rel="noreferrer" className="bento-mini-icon-link">
              LEETCODE ↗
            </a>
            <a href="https://www.instagram.com/artsydaisies__?igsi=MXRvd2k0M3VxbnQwcA==" target="_blank" rel="noreferrer" className="bento-mini-icon-link">
              ART ↗
            </a>
          </div>
        </div>

        <div className="bento-header-title-row">
          <h1 className="bento-giant-title">
            AKSHITA <span>SHARMA</span>
          </h1>
          <p className="bento-header-tagline">
            Software engineer, algorithmic problem solver, and visual artist building full-stack applications with AI-powered features and thoughtful digital craftsmanship.
          </p>
        </div>
      </section>

      {/* =================================================================
          2. HERO BENTO SECTION: INTRO CARD + PORTRAIT CARD
          ================================================================= */}
      <section className="bento-hero-grid">
        
        {/* Left Column: Blue Hero Intro Card */}
        <div className="bento-card bento-intro-card">
          <div className="intro-card-header">
            <div>
              <span className="bento-eyebrow-tag" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)', marginBottom: '0.6rem' }}>
                MEET THE DEVELOPER
              </span>
              <h2 className="intro-greeting-title">HI, I'M AKSHITA</h2>
            </div>
            <span className="intro-pronoun-pill">she / her</span>
          </div>

          {/* Restored Hero Paragraph */}
          <p className="intro-body-bio">
            I am a pre-final year Computer Science student at <strong>NIT Hamirpur</strong>. I specialize in building end-to-end full-stack systems with <strong>C++, Python, JavaScript, React, FastAPI</strong>, and modern databases, bridging algorithmic performance with creative visual expression.
          </p>

          {/* Key Bullet Points */}
          <ul className="intro-key-points-list">
            <li className="intro-key-point-item">
              Pre-final year student at <strong>NIT Hamirpur</strong> (Computer Science &amp; Engineering).
            </li>
            <li className="intro-key-point-item">
              Experienced with <strong>C++, Python, JavaScript, React, FastAPI</strong>, and databases, with hands-on experience building full-stack applications and integrating AI-powered features.
            </li>
            <li className="intro-key-point-item">
              Active problem solver, having solved <strong>400+ DSA problems</strong> across LeetCode, GeeksforGeeks, and Codeforces.
            </li>
            <li className="intro-key-point-item">
              A part-time professional artist who has sold many of her artworks online and offline.
            </li>
          </ul>

          {/* High-Impact Stat Metrics Quad */}
          <div className="intro-stats-quad">
            <div className="intro-stat-cell">
              <span className="intro-stat-number">400+</span>
              <span className="intro-stat-label">DSA Problems Solved</span>
            </div>
            <div className="intro-stat-cell">
              <span className="intro-stat-number">NIT '26</span>
              <span className="intro-stat-label">Hamirpur CSE</span>
            </div>
            <div className="intro-stat-cell">
              <span className="intro-stat-number">GWC 7.0</span>
              <span className="intro-stat-label">Flipkart Scholar</span>
            </div>
            <div className="intro-stat-cell">
              <span className="intro-stat-number">Artist</span>
              <span className="intro-stat-label">Sold Art Worldwide</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Portrait Card */}
        <div className="bento-card bento-portrait-card">
          <div className="portrait-image-wrapper">
            <img 
              src="/photos/me3.jpeg" 
              alt="Akshita Sharma" 
              className="portrait-photo"
              loading="eager"
              fetchPriority="high"
            />
            <div className="portrait-overlay-badge">
              <span>AKSHITA SHARMA</span>
              <span className="portrait-tag">NIT HAMIRPUR</span>
            </div>
          </div>
        </div>

      </section>

        {/* =================================================================
            3. "CONTENT NICHES" TECH DOMAINS & SKILLS SECTION
            (Structured directly after the reference image "Content Niches")
            ================================================================= */}
        <section className="bento-card bento-niches-section">
          
          <div className="niches-header-row">
            <div>
              <h2 className="niches-main-title">
                TECHNICAL <span>NICHES & SKILLS</span>
              </h2>
              <span className="niches-subtitle">// CORE STACK, FRAMEWORKS & TOOLING</span>
            </div>

            <div className="bento-eyebrow-tag">
              PRODUCTION & ACADEMIC EXPERTISE
            </div>
          </div>

          {/* 3-Card Grid for Languages, Frameworks, Tools */}
          <div className="niches-grid">
            
            {/* 1. Languages Card */}
            <div className="niche-category-card">
              <div className="niche-pill-header accent-blue">
                LANGUAGES
              </div>

              <div className="language-meter-list">
                {languages.map((lang) => (
                  <div key={lang.name} className="language-meter-item">
                    <div className="language-label-row">
                      <span>{lang.name}</span>
                      <span>{lang.percentage}%</span>
                    </div>
                    <div className="meter-track">
                      <div 
                        className={`meter-fill ${lang.percentage >= 85 ? 'accent' : ''}`}
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Frameworks & Libraries Card */}
            <div className="niche-category-card">
              <div className="niche-pill-header">
                FRAMEWORKS & LIBS
              </div>

              <div className="framework-badge-grid">
                {frameworks.map((fw) => (
                  <span key={fw} className="framework-badge">
                    <span className="badge-dot"></span>
                    {fw}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. Developer Tools Card */}
            <div className="niche-category-card">
              <div className="niche-pill-header accent-gold">
                TOOLS & ENVIRONMENTS
              </div>

              <div className="tools-badge-grid">
                {tools.map((t) => (
                  <div key={t} className="tool-app-card">
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =================================================================
            4. "REAL RESULTS": PROBLEM SOLVING & CERTIFICATIONS
            (Structured after reference "Real Results Created with Purpose")
            ================================================================= */}
        <section className="bento-card bento-results-section">
          
          <div className="results-header-container">
            <span className="results-eyebrow">COMPETITIVE CODING & CREDENTIALS</span>
            <h2 className="results-title">REAL RESULTS & IMPACT</h2>
            <p className="results-subtitle">
              A solid foundation built through rigorous algorithmic problem solving, competitive contests, and verified engineering certifications.
            </p>
          </div>

          <div className="results-two-col-grid">
            
            {/* Left: Problem Solving & DSA Card */}
            <div className="results-sub-card">
              <div>
                <div className="results-card-title-row">
                  <h3 className="results-card-title">DSA PROBLEM SOLVING</h3>
                  <span className="results-badge">VERIFIED</span>
                </div>

                <div className="dsa-metric-banner" style={{ marginTop: '1rem' }}>
                  <div className="dsa-metric-num">400+</div>
                  <div className="dsa-metric-desc">
                    Problems conquered across LeetCode, GeeksforGeeks, and Codeforces covering dynamic programming, graphs, trees, and system logic.
                  </div>
                </div>
              </div>

              <div>
                <div className="platform-button-row">
                  <a href="https://leetcode.com/u/akshita_Sharma568/" target="_blank" rel="noreferrer" className="platform-link-btn">
                    LeetCode Profile ↗
                  </a>
                  <a href="https://codeforces.com/profile/akshita_sharma" target="_blank" rel="noreferrer" className="platform-link-btn">
                    Codeforces Profile ↗
                  </a>
                  <a href="https://codolio.com/profile/akshita_" target="_blank" rel="noreferrer" className="platform-link-btn">
                    Codolio Profile ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Flipkart GWC 7.0 Certificate */}
            <div className="results-sub-card">
              <div>
                <div className="results-card-title-row">
                  <h3 className="results-card-title">HONORS & CERTIFICATES</h3>
                  <span className="results-badge">SCHOLARSHIP</span>
                </div>

                <div className="certificate-preview-box" style={{ marginTop: '1rem' }}>
                  <span className="certificate-title-text">
                    Flipkart GWC 7.0 Certificate
                  </span>
                  <span className="certificate-org">
                    Flipkart Girls Wanna Code 7.0 &middot; Recognized Scholar
                  </span>
                  <p style={{ fontSize: '0.85rem', color: '#4A5568', margin: '4px 0 0', lineHeight: '1.4' }}>
                    Competitive coding, problem solving, and software engineering development curriculum curated by Flipkart engineering leaders.
                  </p>
                </div>
              </div>

              <a 
                href="https://drive.google.com/file/d/15Eo8WdlMqDJ1XDoS-ueZklWEi2bJPDoZ/view?usp=sharing" 
                target="_blank" 
                rel="noreferrer" 
                className="cert-btn-primary"
              >
                <span>VIEW CERTIFICATE ON GOOGLE DRIVE</span>
                <span>↗</span>
              </a>
            </div>

          </div>

        </section>

        {/* =================================================================
            5. DUAL CRAFT: CREATIVE STUDIO & ARTIST SPOTLIGHT
            ================================================================= */}
        <section className="bento-card artist-spotlight-card">
          <div className="artist-spotlight-grid grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left: Artwork Showcase Image Placeholder */}
            <div className="artist-artwork-frame w-full overflow-hidden rounded-lg">
              <img 
                src="/art/art1.png" 
                alt="Original Artwork by Akshita Sharma" 
                className="artist-artwork-img w-full h-auto object-cover rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right: Studio Narrative & Action Buttons */}
            <div className="artist-spotlight-content flex flex-col justify-between">
              <div>
                <span className="bento-eyebrow-tag" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)', marginBottom: '0.6rem' }}>
                  CREATIVE STUDIO &middot; INDEPENDENT ARTIST
                </span>
                <h2 className="artist-title">
                  WHERE ENGINEERING MEETS <span>VISUAL ART</span>
                </h2>
                <p className="artist-desc" style={{ marginTop: '0.8rem' }}>
                  Beyond full-stack architecture and algorithmic problem solving, I run an independent creative studio specializing in traditional painting and visual aesthetics. Having sold original artworks and custom commissions to collectors worldwide, I bring that same patient craftsmanship and intentional design to every software system I build.
                </p>
              </div>

              <div className="artist-action-row" style={{ marginTop: '1.2rem' }}>
                <a 
                  href="https://www.instagram.com/artsydaisies__?igsi=MXRvd2k0M3VxbnQwcA==" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="artist-btn primary"
                >
                  <span>VISIT ART STORE (@artsydaisies__) ↗</span>
                </a>
                <Link to="/about" className="artist-btn secondary">
                  <span>EXPLORE ART GALLERY &rarr;</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* =================================================================
            6. FEATURED PROJECT HIGHLIGHTS PREVIEW
            ================================================================= */}
        <section className="bento-card bento-card-beige" style={{ padding: '2rem' }}>
          <div className="niches-header-row" style={{ marginBottom: '1.5rem' }}>
            <div>
              <h2 className="niches-main-title">
                FEATURED <span>PROJECTS</span>
              </h2>
              <span className="niches-subtitle">// HIGH-PERFORMANCE WEB & AI APPLICATIONS</span>
            </div>

            <Link to="/projects" className="platform-link-btn" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
              VIEW ALL PROJECTS &rarr;
            </Link>
          </div>

          <div className="niches-grid">
            <div className="niche-category-card">
              <div className="niche-pill-header">
                <span>01</span> COMPACTIQ
              </div>
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '1.1rem', margin: 0, color: '#1B2533' }}>
                Enterprise Compliance Engine
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#4A5568', margin: 0, lineHeight: '1.5' }}>
                Desktop engine with FastAPI backend, React/Electron frontend, SQLite persistence, and Google Gemini AI rule extraction.
              </p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: 'auto' }}>
                <span className="framework-badge" style={{ padding: '3px 8px', fontSize: '0.75rem' }}>FastAPI</span>
                <span className="framework-badge" style={{ padding: '3px 8px', fontSize: '0.75rem' }}>Gemini AI</span>
                <span className="framework-badge" style={{ padding: '3px 8px', fontSize: '0.75rem' }}>React</span>
              </div>
            </div>

            <div className="niche-category-card">
              <div className="niche-pill-header accent-blue">
                <span>02</span> SILENT STROKES
              </div>
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '1.1rem', margin: 0, color: '#1B2533' }}>
                Art Portfolio & Studio Management
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#4A5568', margin: 0, lineHeight: '1.5' }}>
                Full-stack art portfolio and commission studio with React, Firebase Auth, Firestore real-time storage, and interactive storytelling.
              </p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: 'auto' }}>
                <span className="framework-badge" style={{ padding: '3px 8px', fontSize: '0.75rem' }}>React</span>
                <span className="framework-badge" style={{ padding: '3px 8px', fontSize: '0.75rem' }}>Firebase</span>
                <span className="framework-badge" style={{ padding: '3px 8px', fontSize: '0.75rem' }}>Tailwind</span>
              </div>
            </div>

            <div className="niche-category-card">
              <div className="niche-pill-header accent-gold">
                <span>03</span> NETWORK SECURITY
              </div>
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '1.1rem', margin: 0, color: '#1B2533' }}>
                Threat Detection ML Platform
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#4A5568', margin: 0, lineHeight: '1.5' }}>
                Phishing URL classification pipeline with MongoDB ingestion, Scikit-Learn model training, and containerized Docker workflow.
              </p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: 'auto' }}>
                <span className="framework-badge" style={{ padding: '3px 8px', fontSize: '0.75rem' }}>Python</span>
                <span className="framework-badge" style={{ padding: '3px 8px', fontSize: '0.75rem' }}>MongoDB</span>
                <span className="framework-badge" style={{ padding: '3px 8px', fontSize: '0.75rem' }}>Docker</span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            7. DEDICATED "CONNECT" GRID CARD
            (Replaces scattered social cards with sleek, aligned Bento grid)
            ================================================================= */}
        <section className="bento-card bento-connect-card">
          <div className="connect-header">
            <div>
              <span className="bento-eyebrow-tag" style={{ marginBottom: '0.5rem' }}>
                NETWORKS & PLATFORMS
              </span>
              <h2 className="connect-title">LET'S CONNECT & COLLABORATE</h2>
            </div>
            
            <div className="bento-eyebrow-tag" style={{ backgroundColor: '#FCFBF7', borderColor: '#1B2533', color: '#1B2533' }}>
              AVAILABLE FOR OPPORTUNITIES
            </div>
          </div>

          {/* Responsive CSS Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="connect-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {socialLinks.map((link) => (
              <a 
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="connect-pill-card"
              >
                <div>
                  <div className="connect-pill-top-row">
                    <span className="connect-pill-platform">{link.platform}</span>
                    <span className="connect-pill-arrow">↗</span>
                  </div>
                  <span className="connect-pill-handle">{link.handle}</span>
                  {link.desc && (
                    <p className="connect-pill-desc">{link.desc}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>

    </div>
  );
}