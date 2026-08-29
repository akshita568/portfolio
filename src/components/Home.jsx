export default function Home() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section id="home" className="home-section">

        
        {/* Left Side: Visuals (Portrait + Camera Roll) */}
        <div className="hero-visuals">
          
          <div className="portrait-wrapper">
            <div className="collage-star" style={{ top: '20%', left: '-15%', transform: 'rotate(-15deg)' }}></div>
            <img src="/photos/me.png" alt="My Portrait" className="user-cutout" />
            <div className="name-stamp">Akshita</div>
          </div>

          {/* Camera roll */}
          <div className="camera-roll-vertical">
            <div className="polaroid-mini"><img src="/photos/photo1.png" alt="Roll 1" /></div>
            <div className="polaroid-mini"><img src="/photos/photo2.png" alt="Roll 2" /></div>
            <div className="polaroid-mini"><img src="/photos/photo3.png" alt="Roll 3" /></div>
          </div>

        </div>
        
        {/* Right Side: Combined Content */}
        <div className="hero-content">

          {/* Header Block */}
          <div className="hero-header" style={{ position: 'relative', width: '100%', marginTop: '10px' }}>
            <div className="magazine-cutout" style={{ position: 'absolute', top: '-65px', right: '100px', zIndex: 2, transform: 'rotate(-3deg)' }}>
              meet the
            </div>
            <h1 className="serif-solid" style={{ fontSize: '6vw' }}>DEVELOPER</h1>
          </div>

          {/* About Block */}
          <div className="hero-about">
            <div className="magazine-cutout" style={{ marginBottom: '1.5rem', transform: 'rotate(2deg)' }}>
              ABOUT ME
            </div>
            <p className="about-text-p" style={{ marginBottom: '1.2rem' }}>
              Hi, I’m a pre final year Computer Science student at the National Institute of Technology, Hamirpur. I’m someone who is equally fascinated by technology and creativity, and I’m always trying to find ways to bring the two together.
            </p>
            
            <p className="about-text-p">
              My interests lie across software development, machine learning, and building thoughtful digital experiences.
              This website is my little corner of the internet, a collection of the things I’ve built, learned, created, and explored along the way.
            </p>
          </div>

        </div>
      </section>

      {/* --- SECTION: MY ART --- */}
      <section className="artworks-tape-section">
        <div className="pink-tape-banner">
          <img src="/art/tape.png" alt="Pink Tape Background" className="pink-tape-bg" />
          <div className="artworks-overlap-group grid-4-art">
            <div className="artwork-polaroid art-piece-1"><img src="/photos/artwork1.png" alt="Art 1" /></div>
            <div className="artwork-polaroid art-piece-2"><img src="/photos/artwork2.png" alt="Art 2" /></div>
            <div className="artwork-polaroid art-piece-3"><img src="/photos/artwork3.png" alt="Art 3" /></div>
            <div className="artwork-polaroid art-piece-4"><img src="/photos/artwork4.png" alt="Art 4" /></div>
          </div>
        </div>

        <div className="art-info-container">
          <div className="magazine-cutout" style={{ transform: 'rotate(-2deg)' }}>
            MY ART
          </div>
          <h2 className="serif-solid" style={{ fontSize: '3.5rem' }}>ME AS AN ARTIST</h2>
          
          <div className="hero-about" style={{ marginTop: '10px' }}>
            <p className="about-text-p" style={{ marginBottom: '1.2rem' }}>
              Art is where my intuition takes over. Whether it's digital illustration or experimental visual design, creating gives me a space to explore textures, color palettes, and storytelling without constraints.
            </p>
            <p className="about-text-p">
              I love how artistic expression influences the way I approach code—both require an eye for structure, rhythm, and a distinct emotional resonance.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION: PHOTOGRAPHY --- */}
      <section className="artworks-tape-section">
        <div className="art-info-container">
          <div className="magazine-cutout" style={{ transform: 'rotate(2deg)' }}>
            THROUGH THE LENS
          </div>
          <h2 className="serif-solid" style={{ fontSize: '3.5rem' }}>MY PHOTOGRAPHY</h2>
          
          <div className="hero-about" style={{ marginTop: '10px' }}>
            <p className="about-text-p" style={{ marginBottom: '1.2rem' }}>
              Capturing moments through photography lets me freeze fleeting light, architecture, and raw landscapes. It trains my eye to notice composition, lighting, and detail in everyday environments.
            </p>
            <p className="about-text-p">
              Every frame tells a story, serving as a visual journal of places explored and perspectives discovered along the way.
            </p>
          </div>
        </div>

        <div className="pink-tape-banner">
          <img src="/art/tape.png" alt="Pink Tape Background" className="pink-tape-bg" />
          <div className="artworks-overlap-group grid-4-art">
            <div className="artwork-polaroid photo-piece-1"><img src="/photos/photography1.png" alt="Photo 1" /></div>
            <div className="artwork-polaroid photo-piece-2"><img src="/photos/photography2.png" alt="Photo 2" /></div>
            <div className="artwork-polaroid photo-piece-3"><img src="/photos/photography3.png" alt="Photo 3" /></div>
            <div className="artwork-polaroid photo-piece-4"><img src="/photos/photography4.png" alt="Photo 4" /></div>
          </div>
        </div>
      </section>
    </>
  );
}