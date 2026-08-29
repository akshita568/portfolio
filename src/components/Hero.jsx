export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="magazine-cutout" style={{ marginBottom: '20px' }}>HELLO I AM</div>
      {/* Place an image named cutout.png in your public folder with a transparent background */}
      <img src="/cutout.png" alt="My Portrait" className="user-cutout" />
      <h1 className="serif-bold">YOUR NAME</h1>
      <span className="script-text" style={{ marginTop: '-10px' }}>
        software developer
      </span>
    </section>
  );
}