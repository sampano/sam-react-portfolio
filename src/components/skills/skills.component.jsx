import "./skills.component.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills">
      <h5 className="experience-h5">What Skills I have</h5>
      <h2>My Professional Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Other Skills</h3>
          <div className="experience__content other__skills">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>
                  Windows <br /> Server
                </h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>
                  Citrix <br /> Troubleshooting
                </h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>
                  VDI <br />
                  Troubleshooting
                </h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>
                  Computer <br />
                  Hardware
                </h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
