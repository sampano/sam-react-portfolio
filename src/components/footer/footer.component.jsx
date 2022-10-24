import "./footer.component.css";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        SAMP
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/profile.php?id=100086041495411"
          target="_blank"
        >
          <BsFacebook />
        </a>

        <a href="https://github.com/sampano" target="_blank">
          <BsGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/samuel-pano-35545ab9/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sam Pano. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
