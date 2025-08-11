
import placeholder from '../assets/placeholder.png'
import placeholder2 from '../assets/placeholder-2.png'
import placeholder3 from '../assets/placeholder-3.png'
import placeholder4 from '../assets/placeholder-4.png'

const Projects = () => {
    return (
        <div>
            <h1>My Projects</h1>

            <div className="projects-container">
                <div className="thumbnail">
                    <h2>Paid.com</h2>
                    <p>With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.</p>
                    <div className='button-wrapper'>
                        <button>Live Site</button>
                        <button>GitHub Link</button>
                    </div>
                    <div className='thumbnail-container'>
                        <img src={placeholder} />
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
                        <img src={placeholder2} />
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
                        <img src={placeholder3} />
                    </div>
                </div>
                <div className="thumbnail">
                    <h2>Junior Portfolio</h2>
                    <p>With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.</p>
                    <div className='button-wrapper'>
                        <button>Live Site</button>
                        <button>GitHub Link</button>
                    </div>
                    <div className='thumbnail-container'>
                        <img src={placeholder4} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;