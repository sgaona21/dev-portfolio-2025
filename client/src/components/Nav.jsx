import { NavLink } from 'react-router-dom';

const Nav = (props) => {



    return (
      <div className="nav">
        <div className="headline">Steven Gaona | Software Developer</div>
        <div className='nav-links-ham'>
          <div className="nav-links">
          {/* <NavLink>Projects</NavLink>
          <NavLink>LinkedIn</NavLink>
          <NavLink>GitHub</NavLink> */}
          <div>Projects</div>
          <div>LinkedIn</div>
          <div>GitHub</div>
        </div>
        <button className="hamburger" type='button' onClick={props.toggleOverlay}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        </div>
        
      </div>
    );
}

export default Nav;