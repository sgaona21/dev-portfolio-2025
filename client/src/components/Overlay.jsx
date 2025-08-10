import { NavLink } from "react-router-dom"

const Overlay = (props) => {

    return (
      <div className={props.isOpen ? "hide-overlay" : "overlay"}>
        <button className="close-overlay" type="button" onClick={props.onClose}>X</button>
        <div className="overlay-nav-links">
          <NavLink>Projects</NavLink>
          <NavLink>LinkedIn</NavLink>
          <NavLink>GitHub</NavLink>
        </div>
      </div>
      
    );
}

export default Overlay;