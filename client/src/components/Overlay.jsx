import { NavLink } from "react-router-dom"

const Overlay = () => {

    return (
      <div className="overlay">
        <div className="overlay-nav-links">
          <NavLink>Projects</NavLink>
          <NavLink>LinkedIn</NavLink>
          <NavLink>GitHub</NavLink>
        </div>
      </div>
    );
}

export default Overlay;