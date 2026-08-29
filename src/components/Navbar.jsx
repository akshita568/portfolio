import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">YOUR LOGO</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><a href="/resume">Resume</a></li>
      </ul>
    </nav>
  );
}