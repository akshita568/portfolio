import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {

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
            Software developer and algorithmic problem solver passionate about building full-stack applications, exploring new technologies, and creating thoughtful digital experiences through clean code and creative problem-solving.
          </p>
        </div>
      </section>

      <section className="bento-hero-grid">

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

          <p className="intro-body-bio">
            I am a pre-final year Computer Science student at <strong>NIT Hamirpur</strong>. I specialize in building end-to-end full-stack systems with <strong>C++, Python, JavaScript, React, FastAPI</strong>, and modern databases, bridging algorithmic performance with creative visual expression.
          </p>

          <ul className="intro-key-points-list">
            
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

          <div className="intro-stats-quad">
            <div className="intro-stat-cell">
              <span className="intro-stat-number">400+</span>
              <span className="intro-stat-label">DSA Problems Solved</span>
            </div>
            <div className="intro-stat-cell">
              <span className="intro-stat-number">NITH '28</span>
              <span className="intro-stat-label">Hamirpur CSE</span>
            </div>
            <div className="intro-stat-cell">
              <span className="intro-stat-number">GWC 7.0</span>
              <span className="intro-stat-label">Flipkart</span>
            </div>
            <div className="intro-stat-cell">
              <span className="intro-stat-number">Artist</span>
              <span className="intro-stat-label">Sold Many Artworks</span>
            </div>
          </div>
        </div>

        <div className="bento-card bento-portrait-card">
          <div className="portrait-image-wrapper">
            <img 
              src="/photos/me3.webp" 
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

          <div className="niches-grid">
            
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

        
        <section className="bento-card bento-results-section">
          
          <div className="results-header-container">
            <span className="results-eyebrow">COMPETITIVE CODING & CREDENTIALS</span>
            <h2 className="results-title">REAL RESULTS & IMPACT</h2>
            <p className="results-subtitle">
              A solid foundation built through rigorous algorithmic problem solving, competitive contests, and verified engineering certifications.
            </p>
          </div>

          <div className="results-two-col-grid">
            
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

            <div className="results-sub-card">
              <div>
                <div className="results-card-title-row">
                  <h3 className="results-card-title">HONORS & CERTIFICATES</h3>
                </div>

                <div className="certificate-preview-box" style={{ marginTop: '1rem' }}>
                  <span className="certificate-title-text">
                    Flipkart GWC 7.0 Certificate
                  </span>
                  <span className="certificate-org">
                    Flipkart Girls Wanna Code 7.0 &middot;
                  </span>
                  <p style={{ fontSize: '0.85rem', color: '#4A5568', margin: '4px 0 0', lineHeight: '1.4' }}>
                    Selected among the Top 200 scholars in Flipkart Girls Wanna Code 7.0 program, competing with 28,000+ registrations.
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

        <section className="bento-card artist-spotlight-card">
          <div className="artist-spotlight-grid grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="artist-artwork-frame w-full overflow-hidden rounded-lg">
              <img 
                src="/art/art1.webp" 
                alt="Original Artwork by Akshita Sharma" 
                className="artist-artwork-img w-full h-auto object-cover rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="artist-spotlight-content flex flex-col justify-between">
              <div>
                <span className="bento-eyebrow-tag" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)', marginBottom: '0.6rem' }}>
                  CREATIVE STUDIO &middot; INDEPENDENT ARTIST
                </span>
                <h2 className="artist-title">
                  WHERE ENGINEERING MEETS <span>VISUAL ART</span>
                </h2>
                <p className="artist-desc" style={{ marginTop: '0.8rem' }}>
                  I enjoy exploring art and creativity alongside software development. I run my own art studio, where I create and sell hand-painted artworks and take up custom commissions. Painting has always been a way for me to experiment, pay attention to details, and express ideas creatively, something I also bring into the things I build.
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