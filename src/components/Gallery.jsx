export default function Gallery() {
  return (
    <section className="gallery">
      <div className="magazine-cutout">visuals.</div>
      <div className="magazine-cutout" style={{ display: 'block', width: 'max-content', marginTop: '5px' }}>
        proof of work.
      </div>
      
      <div className="gallery-wire">
        <div className="polaroid">
          <div className="clip"></div>
          <div style={{ width: '100%', height: '100%', background: '#444' }}></div>
        </div>
        <div className="polaroid">
          <div className="clip"></div>
          <div style={{ width: '100%', height: '100%', background: '#555' }}></div>
        </div>
        <div className="polaroid">
          <div className="clip"></div>
          <div style={{ width: '100%', height: '100%', background: '#666' }}></div>
        </div>
      </div>
    </section>
  );
}