import "./header.component.css";
import CTA from "./CTA";
import Me from "../../assets/me.PNG";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div>
          <div className="header__me">
            <div className="header__me-image">
              <img src={Me} alt="Sam Pano's Picture" />
            </div>
          </div>
        </div>
        <div>
          <h5 className="header-h5">Hello I'm</h5>
          <h1>Sam Pano</h1>
          <h5 className="text-light">Front-End Developer</h5>
          <CTA />
        </div>
      </div>
    </header>
  );
};

export default Header;
