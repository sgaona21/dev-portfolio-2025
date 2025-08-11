import './styles/styles.css';
import { useState } from 'react';

//Components 
import Nav from './components/Nav';
import Overlay from './components/Overlay';
import Projects from './components/Projects';

function App() {
  const [overlayOpen, setOverlayOpen] = useState(true)

  const toggleOverlay = () => setOverlayOpen(prev => !prev);

  return (
    <div className="main-grid">
      <header>
        <Nav toggleOverlay={toggleOverlay}/>
      </header>

      <main>
        <Projects />
      </main>

      <footer>

      </footer>
      <Overlay isOpen={overlayOpen} onClose={toggleOverlay} />
    </div>
  )
}

export default App;
