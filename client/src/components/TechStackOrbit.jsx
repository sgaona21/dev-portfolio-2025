import gitLogo from '../assets/git-logo.svg.png';
import reactLogo from '../assets/react-logo.svg.png';
import cssLogo from '../assets/css-logo.svg';
import nodeLogo from '../assets/node-logo.jpg';
import jsLogo from '../assets/javascript-logo.webp';
import sqlLogo from '../assets/sql-logo.png';


const IMAGES = [gitLogo, nodeLogo, reactLogo, sqlLogo, cssLogo, jsLogo];

const TechStackOrbit = () => {
    return (
      <div className="orbit">
        <div className="orbit__track">
          {IMAGES.map((src, i) => (
            <div className="orbit__item" key={`a-${i}`}>
              <img src={src} alt="" />
            </div>
          ))}
          {IMAGES.map((src, i) => (
            <div className="orbit__item" key={`b-${i}`} aria-hidden="true">
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
}

export default TechStackOrbit;