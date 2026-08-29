export default function Home() {
  return (
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
        <div className="hero-header" style={{ position: 'relative', width: '100%', marginTop: '30px' }}>
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
  );
}