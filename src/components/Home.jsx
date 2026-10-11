import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="portfolio-wrapper">
      <main className="new-home-layout">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="hero-section">
          
          <div className="sparkle-star" style={{ top: '2%', left: '42%', fontSize: '2rem' }}>✦</div>
          <div className="sparkle-star" style={{ bottom: '15%', right: '5%', fontSize: '1.5rem' }}>✦</div>
          <div className="sparkle-star" style={{ top: '25%', right: '-2%', fontSize: '1rem' }}>✦</div>
          <div className="sparkle-star" style={{ bottom: '25%', left: '-5%', fontSize: '1.8rem' }}>✦</div>

          <img src="/photos/me3.jpeg" alt="Akshita" className="hero-photo" />
          
          <div className="hero-info">
            <div style={{ marginBottom: '0.8rem', alignSelf: 'flex-start' }}>
              <div className="magazine-cutout cutout-tilt-left">hello, I'm</div>
            </div>
            
            <h1 className="hero-name-giant">AKSHITA</h1>
            <div>she / her</div>
            <div className="hero-divider"></div>
            
            <div className="hero-details-stack">
              <ul>
              <li>Pre-final year student at NIT Hamirpur.</li>
              <li>Experienced with C++, Python, JavaScript, React, FastAPI, and databases, with hands-on experience building full-stack applications and integrating AI-powered features.</li>
              <li>Active problem solver, having solved 400+ DSA problems across LeetCode, GeeksforGeeks, and Codeforces.</li>
              <li>A part-time professional artist who has sold many of her artworks online and offline.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- 2. SOCIAL LINKS GRID --- */}
        <section className="links-grid">
          <a href="https://github.com/akshita568" className="social-card">
            <div className="social-content">
              <div className="social-title">GitHub</div>
            </div>
            <span>↗</span>
          </a>

          <a href="https://www.linkedin.com/in/akshita-sharma-90474a347/" className="social-card">
            <div className="social-content">
              <div className="social-title">LinkedIn</div>
            </div>
            <span>↗</span>
          </a>

          <a href="https://leetcode.com/u/akshita_Sharma568/" className="social-card">
            <div className="social-content">
              <div className="social-title">LeetCode</div>
            </div>
            <span>↗</span>
          </a>

          <a href="https://codeforces.com/profile/akshita_sharma" className="social-card">
            <div className="social-content">
              <div className="social-title">Codeforces</div>
            </div>
            <span>↗</span>
          </a>

          <a href="https://codolio.com/profile/akshita_" className="social-card">
            <div className="social-content">
              <div className="social-title">Codolio</div>
            </div>
            <span>↗</span>
          </a>

          <a href="https://www.instagram.com/artsydaisies__?igsi=MXRvd2k0M3VxbnQwcA==" className="social-card">
            <div className="social-content">
              <div className="social-title">Art page</div>
            </div>
            <span>↗</span>
          </a>
        </section>

        {/* --- 3. AESTHETIC SKILLS SECTION --- */}
        <section className="aesthetic-skills-wrapper">
          
          <div className="skills-top-row">
            {/* Languages Column */}
            <div className="aesthetic-skill-block">
              <div className="magazine-cutout cutout-tilt-left" style={{ marginBottom: '1.5rem' }}>
                LANGUAGES
              </div>
              
              <div className="language-row">
                <span className="language-name">C++</span>
                <div className="progress-bar-container">
                  <div className="progress-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="language-row">
                <span className="language-name">Python</span>
                <div className="progress-bar-container">
                  <div className="progress-fill" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="language-row">
                <span className="language-name">JavaScript</span>
                <div className="progress-bar-container">
                  <div className="progress-fill" style={{ width: '70%' }}></div>
                </div>
              </div>

              <div className="language-row">
                <span className="language-name">Go</span>
                <div className="progress-bar-container">
                  <div className="progress-fill" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>

            {/* Added Capped Vertical Divider */}
            <div className="aesthetic-divider"></div>

            {/* Skills Column */}
            <div className="aesthetic-skill-block">
              <div className="magazine-cutout cutout-tilt-right" style={{ marginBottom: '1.5rem' }}>
                FRAMEWORKS AND
              </div>
              <div className="hero-name">LIBRARIES</div>

              <ul className="skills-bullet-grid">
                <li>HTML & CSS</li>
                <li>React</li>
                <li>FastAPI</li>
                <li>Flask</li>
                <li>Pandas</li>
                <li>Scikit-Learn</li>
                <li>MongoDB</li>
                <li>SQLite</li>
                <li>Firebase</li>
                <li>NumPy</li>
              </ul>
            </div>
          </div>

          {/* Tools Column */}
          <div className="aesthetic-skill-block" style={{ maxWidth: '100%' }}>
            <div className="magazine-cutout cutout-tilt-left" style={{ marginBottom: '1.5rem' }}>
              TOOLS
            </div>
            
            <div className="tools-icon-row">
              <div className="tool-app-box">Git</div>
              <div className="tool-app-box">GitHub</div>
              <div className="tool-app-box">Docker</div>
              <div className="tool-app-box">VS Code</div>
              <div className="tool-app-box">Figma</div>
              <div className="tool-app-box">Postman</div>
            </div>
          </div>

        </section>

        {/* --- 4. CERTIFICATIONS SECTION --- */}
        <section className="cert-section">
          
          <div className="magazine-cutout cutout-tilt-right" style={{ marginBottom: '0.5rem' }}>
            CERTIFICATES
          </div>

          <a href="https://drive.google.com/file/d/15Eo8WdlMqDJ1XDoS-ueZklWEi2bJPDoZ/view?usp=sharing" className="cert-card">
            <div className="social-content">
              <div className="aesthetic-icon">⚝</div>
              <div className="social-title">Flipkart GWC 7.0 Certificate</div>
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>↗</span>
          </a>
          
        </section>

      </main>
    </div>
  );
}