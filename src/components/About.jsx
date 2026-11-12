import { Link } from 'react-router-dom';
import Crossword from './Crossword';
import './About.css';

export default function About() {
  const artworkImages = [
    { src: '/art/art1.webp', tiltClass: 'art-rotate-1', tapeClass: 'tape-corner-left' },
    { src: '/art/art2.webp', tiltClass: 'art-rotate-2', tapeClass: 'tape-top-center' },
    { src: '/art/art3.webp', tiltClass: 'art-rotate-3', tapeClass: 'tape-corner-right' },
    { src: '/art/art4.webp', tiltClass: 'art-rotate-4', tapeClass: 'tape-top-center' },
  ];

  const photographyImages = [
    { src: '/photography/photo1.webp', tiltClass: 'photo-rotate-1' },
    { src: '/photography/photo2.webp', tiltClass: 'photo-rotate-2' },
    { src: '/photography/photo3.webp', tiltClass: 'photo-rotate-3' },
    { src: '/photography/photo4.webp', tiltClass: 'photo-rotate-4' },
  ];

  const photoBoothImages = [
    '/photos/photo1.webp',
    '/photos/photo2.webp',
    '/photos/photo3.webp',
  ];

  return (
    <div className="scrapbook-page-wrapper">

        <section className="scrapbook-hero-section" aria-label="Meet the Artist">
          
          <div className="scrapbook-hero-left">
            <div style={{ position: 'relative' }}>
              <span className="scrapbook-cutout cutout-tilt-left" style={{ marginBottom: '6px' }}>
                MEET THE
              </span>
              <h1 className="scrapbook-hero-title">
                ARTIST <span>&amp; CREATIVE MIND</span>
              </h1>
            </div>

            <span className="scrapbook-hero-quote-pill">
              * a visual diary &amp; creative sanctuary
            </span>

            <div className="scrapbook-note-card">
              <div className="washi-tape tape-top-center" aria-hidden="true"></div>
              <p>
                Pre-final year student at <strong>NIT Hamirpur</strong>. While my academic studies keep my analytical mind engaged, creativity and visual expression are at the very heart of who I am. I believe the best work happens when deep passion, patience, and intentional design come together.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginTop: '0.2rem' }}>
              <a 
                href="https://silent-strokes.vercel.app/" 
                target="_blank" 
                rel="noreferrer" 
                className="scrapbook-action-btn primary"
              >
                ART WEBSITE
              </a>
              <Link 
                to="/projects" 
                className="scrapbook-action-btn secondary"
              >
                EXPLORE MY WORK &rarr;
              </Link>
            </div>
          </div>

          <div className="scrapbook-hero-right">
            <div className="hero-cutout-wrapper">
              <div className="washi-tape tape-corner-right" aria-hidden="true"></div>
              <div className="scrapbook-star" style={{ top: '-18px', left: '-18px' }} aria-hidden="true"></div>
              <img 
                src="/photos/me.webp" 
                alt="Akshita Sharma Portrait" 
                className="hero-cutout-photo"
                fetchPriority="high"
              />
              <div className="hero-signature-stamp">Akshita</div>
            </div>
          </div>
        </section>

        <section className="scrapbook-myself-section" aria-label="About Myself">
          
          <div className="scrapbook-myself-left">
            <div>
              <span className="scrapbook-cutout cutout-tilt-right" style={{ fontSize: '0.9rem' }}>
                HELLO &amp; WELCOME
              </span>
              <div className="scrapbook-script-overlay">
                About Myself
              </div>
            </div>

            <p className="scrapbook-body-text">
              Hi, I’m a pre-final year student at the <strong>National Institute of Technology, Hamirpur</strong>. I’m someone who is endlessly fascinated by the intersection of curiosity, visual aesthetics, and authentic self-expression.
            </p>

            <div className="scrapbook-quote-banner">
              &ldquo;Creating is not just something I do; it is how I process, observe, and engage with the world.&rdquo;
            </div>

            <p className="scrapbook-body-text">
              My passions center around traditional painting, candid travel photography, exploring textured mediums, and finding quiet harmony in the little things around us. This website is my little corner of the internet&mdash;a collection of the artworks I’ve brought to life, the scenes I’ve documented, and the perspectives I’ve nurtured along the way.
            </p>
          </div>

          <div className="scrapbook-filmstrip-cluster">
            {photoBoothImages.map((src, idx) => (
              <div key={idx} className="filmstrip-photo-item">
                <div className="washi-tape tape-top-center" aria-hidden="true"></div>
                <img 
                  src={src} 
                  alt={`Personal Snapshot ${idx + 1}`} 
                  className="scrapbook-filmstrip-img" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

        </section>

        <Crossword />

        <section className="scrapbook-gallery-section" aria-label="Welcome to My Art Gallery">
          <div className="scrapbook-header-row">
            <div className="scrapbook-section-header">
              <span className="scrapbook-cutout cutout-tilt-left" style={{ fontSize: '0.88rem' }}>
                ORIGINAL ARTWORKS &amp; COMMISSIONS
              </span>
              <h2 className="scrapbook-gallery-title">
                WELCOME TO MY <span>ART GALLERY</span>
              </h2>
            </div>

            <a 
              href="https://www.instagram.com/artsydaisies__?igsi=MXRvd2k0M3VxbnQwcA==" 
              target="_blank" 
              rel="noreferrer" 
              className="scrapbook-action-btn primary"
            >
              VISIT INSTAGRAM STORE (@artsydaisies__) ↗
            </a>
          </div>

          <p className="scrapbook-body-text" style={{ maxWidth: '820px' }}>
            I started seriously making art during lockdown and honestly, I haven’t stopped since. I went from being a complete beginner, figuring things out as I went, to developing my own style and taking my art much more seriously. Since then, I’ve sold many of my pieces both online and offline, built my own art website, and grown a social media art account with a community of people who genuinely follow and support my work.
          </p>

          <div className="scrapbook-scatter-cluster">
            {artworkImages.map((item, idx) => (
              <div key={idx} className={`scatter-art-item ${item.tiltClass}`}>
                <div className={`washi-tape ${item.tapeClass}`} aria-hidden="true"></div>
                <img 
                  src={item.src} 
                  alt={`Artwork Piece ${idx + 1}`} 
                  className="scrapbook-art-img" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="scrapbook-photography-section" aria-label="Photography and Aesthetics">
          <div className="scrapbook-header-row">
            <div className="scrapbook-section-header">
              <span className="scrapbook-cutout cutout-tilt-right" style={{ fontSize: '0.88rem' }}>
                VISUAL CHRONICLES
              </span>
              <h2 className="scrapbook-gallery-title">
                THROUGH THE LENS <span>&middot; EYE FOR AESTHETICS</span>
              </h2>
            </div>

            <span className="scrapbook-script" style={{ transform: 'rotate(-3deg)' }}>
              * See something pretty? Click! Click!!
            </span>
          </div>

          <p className="scrapbook-body-text" style={{ maxWidth: '820px' }}>
            I’m not a professional photographer, but photography is something I really enjoy. See something pretty? Click! click!! gotta take a picture. Sometimes it’s just to remember the moment, and sometimes I’ll look at it later and think, &ldquo;I should paint this someday.&rdquo; I genuinely love travelling and taking pictures of every pretty view I come across: mountains, sunsets, random streets, little details&mdash;if I find it beautiful, chances are I’m taking a picture of it.
          </p>

          <div className="clothesline-container">
            <div className="clothesline-rope" aria-hidden="true"></div>
            <div className="clothesline-photos-row">
              {photographyImages.map((item, idx) => (
                <div key={idx} className={`clothesline-photo-item ${item.tiltClass}`}>
                  <div className="clothesline-clip" aria-hidden="true"></div>
                  <img 
                    src={item.src} 
                    alt={`Photograph ${idx + 1}`} 
                    className="scrapbook-photo-img" 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

    </div>
  );
}