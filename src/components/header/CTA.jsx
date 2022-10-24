import CV from "../../assets/cv.pdf";
import "./header.component.css";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-header">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary btn-header">
        Want to Talk?
      </a>
    </div>
  );
};

export default CTA;
