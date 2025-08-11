import { NavLink } from "react-router-dom";
import closeIcon from '../assets/close-icon.svg';
import sqlLogo from '../assets/sql-logo.png';

const Overlay = (props) => {

    return (
      <div className={props.isOpen ? "hide-overlay" : "overlay"}>
        <button className="close-overlay" type="button" onClick={props.onClose}>
          <img src={closeIcon}/>
        </button>
        <div className="overlay-nav-links">
          <NavLink>Projects</NavLink>
          <NavLink>LinkedIn</NavLink>
          <NavLink>GitHub</NavLink>
        </div>
      </div>
      
    );
}

export default Overlay;