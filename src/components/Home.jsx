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
            <div className="artwork-polaroid art-piece-1"><img src="/art/art1.png" alt="Art 1" /></div>
            <div className="artwork-polaroid art-piece-2"><img src="/art/art2.png" alt="Art 2" /></div>
            <div className="artwork-polaroid art-piece-3"><img src="/art/art3.png" alt="Art 3" /></div>
            <div className="artwork-polaroid art-piece-4"><img src="/art/art4.png" alt="Art 4" /></div>
          </div>
        </div>

        <div className="art-info-container">
          <div className="magazine-cutout" style={{ transform: 'rotate(-2deg)' }}>
            MY ART
          </div>
          <h2 className="serif-solid" style={{ fontSize: '3.5rem' }}>ME AS AN ARTIST</h2>
          
          <div className="hero-about" style={{ marginTop: '10px' }}>
            <p className="about-text-p" style={{ marginBottom: '1.2rem' }}>
              I started seriously making art during lockdown and honestly, I haven’t stopped since. I went from being a complete beginner, figuring things out as I went, to developing my own style and taking my art much more seriously.
            </p>
            <p className="about-text-p">
              Since then, I’ve sold many of my pieces both online and offline, built my own art website, and grown a social media art account with a community of people who genuinely follow and support my work.
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
              I’m not a professional photographer, but photography is something I really enjoy. See something pretty? Click! click!!  gotta take a picture. Sometimes it’s just to remember the moment, and sometimes I’ll look at it later and think, “I should paint this someday.”
            </p>
            <p className="about-text-p">
              I genuinely love travelling and taking pictures of every pretty view I come across. Mountains, sunsets, random streets, little details, if I find it beautiful, chances are I’m taking a picture of it.
            </p>
          </div>
        </div>

        <div className="pink-tape-banner">
          <img src="/art/tape.png" alt="Pink Tape Background" className="pink-tape-bg" />
          <div className="artworks-overlap-group grid-4-art">
            <div className="artwork-polaroid photo-piece-1"><img src="/photography/photo1.png" alt="Photo 1" /></div>
            <div className="artwork-polaroid photo-piece-2"><img src="/photography/photo2.png" alt="Photo 2" /></div>
            <div className="artwork-polaroid photo-piece-3"><img src="/photography/photo3.png" alt="Photo 3" /></div>
            <div className="artwork-polaroid photo-piece-4"><img src="/photography/photo4.png" alt="Photo 4" /></div>
          </div>
        </div>
      </section>
    </>
  );
}