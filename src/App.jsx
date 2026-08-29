import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Crossword from './components/Crossword';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-wrapper">
      <Navbar />
      <main>
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={
            <>
              <Home />
              <Crossword />
            </>
          } />
          
          {/* Dedicated Projects Page Route */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
