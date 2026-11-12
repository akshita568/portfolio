import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <span>AKSHITA</span>
          <span className="brand-badge">PORTFOLIO</span>
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
          <li><Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link></li>
        </ul>

        <div className="navbar-quick-links">
          <a href="/resume/Akshita_Resume.pdf" download="Akshita_Resume.pdf" className="nav-pill-btn nav-resume-download" title="Download Resume PDF">
            RESUME &darr;
          </a>
        </div>
      </nav>
    </header>
  );
}