import { useEffect, useRef } from "react";

import placeholder from '../assets/placeholder.png'
import placeholder2 from '../assets/placeholder-2.png'
import placeholder3 from '../assets/placeholder-3.png'
import placeholder4 from '../assets/placeholder-4.png'

const Projects = ({ children }) => {

    return (
      <div>
        <h1 id="projects">My Projects</h1>

        <div className="projects-container">
          <ul id="cards">
            <li className="card" id="card1">
                <div className="card-content">
                    <h2>Paid</h2>
                    <p>
                        Paid is a personal project. It's a fullstack web application
                        designed to run on desktop. This monthly budgeting application
                        tracks expenses, expendable income, and more.
                    </p>
                    <div className="button-wrapper">
                        <a href="https://www.paidbudget.com/" target="_blank" rel="noopener noreferrer"><button>Live Site</button></a>
                        <a href="https://github.com/sgaona21/paid.git" target="_blank" rel="noopener noreferrer" ><button>GitHub Link</button></a>
                        
                    </div>
                    <div className="thumbnail-container">
                        <img src={placeholder} alt="thumbnail of project"/>
                    </div>    
                </div>
            </li>

            <li className="card" id="card2">
                <div className="card-content">
                    <h2>fullstack-course-manager</h2>
                    <p>
                        This site mimics a school database. It allows users to create, read, update, and delete courses. The site contains a frontend built with React, a REST API on Express, and a simple db with sqlite.
                    </p>
                    <div className="button-wrapper">
                        <a href="https://desirable-smile-production.up.railway.app/" target="_blank" rel="noopener noreferrer"><button>Live Site</button></a>
                        <a href="https://github.com/sgaona21/fullstack-course-manager.git" target="_blank" rel="noopener noreferrer"><button>GitHub Link</button></a>
                    </div>
                    <div className="thumbnail-container">
                        <img src={placeholder2} alt="thumbnail of project" />
                    </div>
                </div>
            </li>

            <li className="card" id="card3">
                <div className="card-content">
                    <h2>PokerStatTracker</h2>
                    <p>
                        This Android application allows users to create and track poker session data. It keeps a log of buy in amounts, cash out amounts, and total profit over time. I built this app for a final project in college.
                    </p>
                    <div className="button-wrapper">
                        {/* <button>Live Site</button> */}
                        <a href="https://github.com/sgaona21/PokerSessionTracker.git" target="_blank" rel="noopener noreferrer"><button>GitHub Link</button></a>
                    </div>
                    <div className="thumbnail-container">
                        <img src={placeholder3} alt="thumbnail of project" />
                    </div>
                </div>
            </li>


            <li className="card" id="card4">
                <div className="card-content">
                    <h2>Junior Portfolio</h2>
                    <p>
                        This was the first portfolio I created after completing my first techdegree from treehouse. It contains a collection of static web applications that demonstrate the basics of responsive design, CSS, and JavaScript.
                    </p>
                    <div className="button-wrapper">
                        <a href="https://sgaona21.github.io/" target="_blank" rel="noopener noreferrer"><button>Live Site</button></a>
                        <a href="https://github.com/sgaona21/sgaona21.github.io.git" target="_blank" rel="noopener noreferrer"><button>GitHub Link</button></a>
                        
                    </div>
                    <div className="thumbnail-container">
                        <img src={placeholder4} alt="thumbnail of project" />
                    </div>
                </div>
            </li>

          </ul>
        </div>

      </div>
    );
}

export default Projects;