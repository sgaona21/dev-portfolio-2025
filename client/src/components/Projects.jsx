import { useEffect, useRef } from "react";

import placeholder from '../assets/placeholder.png'
import placeholder2 from '../assets/placeholder-2.png'
import placeholder3 from '../assets/placeholder-3.png'
import placeholder4 from '../assets/placeholder-4.png'

const Projects = ({ children }) => {

  const containerRef = useRef(null);
  const lastCardRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const last = lastCardRef.current;
    const stickTopPx = parseFloat(
      getComputedStyle(el).getPropertyValue("--stick-top")
    );

    const onScroll = () => {
      const top = last.getBoundingClientRect().top;
      // when last card’s top reaches the sticky line, lock stack
      el.classList.toggle("stack-locked", top <= stickTopPx + 1);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);




    return (
        <div>
            <h1 id="projects">My Projects</h1>

            <div className="projects-container" ref={containerRef} >
                <div className="thumbnail">
                    <h2>Paid</h2>
                    <p>Paid is a personal project. It's a fullstack web application designed to run on desktop. It's a monthly budgeting application that tracks expenses, expendable income, and more.</p>
                    <div className='button-wrapper'>
                        <button>Live Site</button>
                        <button>GitHub Link</button>
                    </div>
                    <div className='thumbnail-container'>
                        <img src={placeholder} alt="thumbnail of project"/>
                    </div>
                    
                </div>
                <div className="thumbnail">
                    <h2>fullstack-course-manager</h2>
                    <p>With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.</p>
                    <div className='button-wrapper'>
                        <button>Live Site</button>
                        <button>GitHub Link</button>
                    </div>
                    <div className='thumbnail-container'>
                        <img src={placeholder2} alt="thumbnail of project"/>
                    </div>
                </div>
                <div className="thumbnail">
                    <h2>PokerStatTracker</h2>
                    <p>With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.</p>
                    <div className='button-wrapper'>
                        <button>Live Site</button>
                        <button>GitHub Link</button>
                    </div>
                    <div className='thumbnail-container'>
                        <img src={placeholder3} alt="thumbnail of project"/>
                    </div>
                </div>
      
                <div className="thumbnail" ref={lastCardRef}>
                    <h2>Junior Portfolio</h2>
                    <p>With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.</p>
                    <div className='button-wrapper'>
                        <button>Live Site</button>
                        <button>GitHub Link</button>
                    </div>
                    <div className='thumbnail-container'>
                        <img src={placeholder4} alt="thumbnail of project"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;