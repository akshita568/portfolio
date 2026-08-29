export default function Footer() {
  return (
    <footer className="site-footer">
      <h2 style={{ fontFamily: 'Permanent Marker', color: 'var(--accent-color)', fontSize: '2.5rem' }}>
        CONNECT
      </h2>
      <div className="footer-links">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LINKEDIN</a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">GITHUB</a>
        <a href="mailto:your@email.com">EMAIL ME</a>
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer">INSTAGRAM</a>
      </div>
    </footer>
  );
}