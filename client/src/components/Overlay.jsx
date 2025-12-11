import { NavLink } from "react-router-dom";
import closeIcon from '../assets/close-icon.svg';
import sqlLogo from '../assets/sql-logo.png';

const Overlay = (props) => {

    return (
      <div className={props.isOpen ? "hide-overlay" : "overlay"}>
        <button className="close-overlay" type="button" onClick={props.onClose}>
          <img src={closeIcon} alt="close window icon"/>
        </button>
        <div className="overlay-nav-links">
          {/* <NavLink>Projects</NavLink> */}
          <NavLink to="https://www.linkedin.com/in/steven-gaona-76a943126/" target="_blank" rel="noopener noreferrer">LinkedIn</NavLink>
          <NavLink to='https://github.com/sgaona21' target="_blank" rel="noopener noreferrer">GitHub</NavLink>
        </div>
      </div>
      
    );
}

export default Overlay;