import './styles/styles.css';
import { Routes, Route} from "react-router-dom";
import { useState } from 'react';

//Components 
import Nav from './components/Nav';
import Overlay from './components/Overlay';
import Projects from './components/Projects';
import TechStackOrbit from './components/TechStackOrbit';

function App() {
  const [overlayOpen, setOverlayOpen] = useState(true)

  const toggleOverlay = () => setOverlayOpen(prev => !prev);

  return (
    <div className="main-grid">
      <header>
        <Nav toggleOverlay={toggleOverlay}/>
      </header>

      <main>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
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
