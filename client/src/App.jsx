import './styles/styles.css';
import { useState } from 'react';
import { useEffect } from "react";

//Components 
import Nav from './components/Nav';
import Overlay from './components/Overlay';
import Projects from './components/Projects';
import TechStackOrbit from './components/TechStackOrbit';

function App() {
  const [overlayOpen, setOverlayOpen] = useState(true)

  const toggleOverlay = () => setOverlayOpen(prev => !prev);

  useEffect(() => {
    console.log("page loaded");
  }, []);

  return (
    <div className="main-grid">
      <header>
        <Nav toggleOverlay={toggleOverlay}/>
      </header>

      <main>
        <TechStackOrbit />
        <Projects />
      </main>

      <footer>

      </footer>
      <Overlay isOpen={overlayOpen} onClose={toggleOverlay} />
    </div>
  )
}

export default App;
