import { Link } from 'react-router-dom';
import Crossword from './Crossword';
import './About.css';

/**
 * About Me Component — Authentic Free-Flowing Scrapbook Aesthetic
 * 
 * Key Principles:
 * 1. Scrapbook Design: No rigid corporate card containers or heavy outer boxes.
 *    Elements sit naturally on the warm pastel cream desk (#F6F4EE) with slight
 *    organic tilts, washi tape, magazine cutouts, and handwritten script accents.
 * 2. Standalone Crossword: Completely outside of any image container/gallery wrapper,
 *    rendered as its own distinct interactive element.
 * 3. Natural Image Sizing: Containers shrink-wrap the images (width: fit-content;
 *    height: fit-content;), scaling images down to compact, manageable dimensions
 *    without forcing square crops, stretches, or pixelation.
 * 4. Image Hygiene: Zero text captions, zero tags, and zero empty placeholder slots.
 *    Exactly 4 artworks, 4 travel photographs, and 3 snapshot moments.
 * 5. Personality Focus: Zero coding/DSA/framework mentions (homepage exclusively).
 * 6. Single Global Resume Button: No resume download button on this page.
 */
export default function About() {
  // Exactly 4 artworks (no captions, natural aspect ratios)
  const artworkImages = [
    { src: '/art/art1.png', tiltClass: 'art-rotate-1', tapeClass: 'tape-corner-left' },
    { src: '/art/art2.png', tiltClass: 'art-rotate-2', tapeClass: 'tape-top-center' },
    { src: '/art/art3.png', tiltClass: 'art-rotate-3', tapeClass: 'tape-corner-right' },
    { src: '/art/art4.png', tiltClass: 'art-rotate-4', tapeClass: 'tape-top-center' },
  ];

  // Exactly 4 travel photographs (clothesline style, no captions)
  const photographyImages = [
    { src: '/photography/photo1.png', tiltClass: 'photo-rotate-1' },
    { src: '/photography/photo2.png', tiltClass: 'photo-rotate-2' },
    { src: '/photography/photo3.png', tiltClass: 'photo-rotate-3' },
    { src: '/photography/photo4.png', tiltClass: 'photo-rotate-4' },
  ];

  // Exactly 3 photo booth snapshots (filmstrip cluster, no captions)
  const photoBoothImages = [
    '/photos/photo1.png',
    '/photos/photo2.png',
    '/photos/photo3.png',
  ];

  return (
    <div className="scrapbook-page-wrapper">

        {/* =================================================================
            1. HERO: "MEET THE ARTIST & CREATIVE MIND"
            Free-flowing scrapbook layout — no rigid outer card wrapper!
            ================================================================= */}
        <section className="scrapbook-hero-section" aria-label="Meet the Artist">
          
          {/* Left: Bio notes, cutout headers, and quick store links */}
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

            {/* Free-floating stationery note card with slight tilt & washi tape */}
            <div className="scrapbook-note-card">
              <div className="washi-tape tape-top-center" aria-hidden="true"></div>
              <p>
                Pre-final year student at <strong>NIT Hamirpur</strong>. While my academic studies keep my analytical mind engaged, creativity and visual expression are at the very heart of who I am. I believe the best work happens when deep passion, patience, and intentional design come together.
              </p>
            </div>

            {/* Quick action buttons */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginTop: '0.2rem' }}>
              <a 
                href="https://www.instagram.com/artsydaisies__?igsi=MXRvd2k0M3VxbnQwcA==" 
                target="_blank" 
                rel="noreferrer" 
                className="scrapbook-action-btn primary"
              >
                ART STORE (@artsydaisies__) ↗
              </a>
              <Link 
                to="/projects" 
                className="scrapbook-action-btn secondary"
              >
                EXPLORE MY WORK &rarr;
              </Link>
            </div>
          </div>

          {/* Right: Natural Portrait Cutout (Shrink-wrapped, tilted, star badge) */}
          <div className="scrapbook-hero-right">
            <div className="hero-cutout-wrapper">
              <div className="washi-tape tape-corner-right" aria-hidden="true"></div>
              <div className="scrapbook-star" style={{ top: '-18px', left: '-18px' }} aria-hidden="true"></div>
              <img 
                src="/photos/me.jpeg" 
                alt="Akshita Sharma Portrait" 
                className="hero-cutout-photo"
                fetchPriority="high"
              />
              <div className="hero-signature-stamp">Akshita</div>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. "ABOUT MYSELF" & PHOTO BOOTH FILMSTRIP
            Containerless layout: Story, passion badges, and natural snapshot moments
            ================================================================= */}
        <section className="scrapbook-myself-section" aria-label="About Myself">
          
          {/* Left: Bio narrative, handwritten overlay & passions */}
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

          {/* Right: 3 Photo Booth Snapshots (Natural sizing, tilted, filmstrip effect) */}
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

        {/* =================================================================
            3. STANDALONE CROSSWORD COMPONENT
            Completely outside of any image gallery container!
            ================================================================= */}
        <Crossword />

        {/* =================================================================
            4. "WELCOME TO MY ART GALLERY"
            Free-flowing tabletop cluster: 4 artworks tossed naturally onto a desk.
            No rigid card wrapper! No captions, no extra slots!
            ================================================================= */}
        <section className="scrapbook-gallery-section" aria-label="Welcome to My Art Gallery">
          <div className="scrapbook-header-row">
            <div className="scrapbook-section-header">
              <span className="scrapbook-cutout cutout-tilt-left" style={{ fontSize: '0.88rem' }}>
                🎨 ORIGINAL ARTWORKS &amp; COMMISSIONS
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

          {/* Scattered Art Cluster: Small, natural dimensions, slight random tilts, washi tape */}
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

        {/* =================================================================
            5. "THROUGH THE LENS" PHOTOGRAPHY
            Clothesline hanging style: 4 travel photographs clipped to a string.
            No rigid card wrapper! No captions, no extra slots!
            ================================================================= */}
        <section className="scrapbook-photography-section" aria-label="Photography and Aesthetics">
          <div className="scrapbook-header-row">
            <div className="scrapbook-section-header">
              <span className="scrapbook-cutout cutout-tilt-right" style={{ fontSize: '0.88rem' }}>
                📷 VISUAL CHRONICLES
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

          {/* Clothesline Hanging Display */}
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