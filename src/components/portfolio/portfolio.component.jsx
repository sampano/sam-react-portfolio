import "./portfolio.component.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Creative Single Landing Page",
      github: "https://github.com/sampano/singlepage-website.git",
      demo: "https://sampano.github.io/singlepage-website/",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequatur natus recusandae ex est perferendis.",
    },

    {
      id: 2,
      image: IMG2,
      title: "Recipe Finder",
      github: "https://github.com/sampano/meal-finder.git",
      demo: "https://sampano.github.io/meal-finder/",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequatur natus recusandae ex est perferendis.",
    },

    {
      id: 3,
      image: IMG3,
      title: "Monster Rolodex",
      github: "https://github.com/sampano/monsters-rolodex-func-comp.git",
      demo: "https://sampano.github.io/monsters-rolodex-func-comp/",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequatur natus recusandae ex est perferendis.",
    },

    {
      id: 4,
      image: IMG4,
      title: "Youtube Clone",
      github: "https://github.com/sampano/youtube-clone.git",
      demo: "https://sampano.github.io/youtube-clone/",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequatur natus recusandae ex est perferendis.",
    },

    {
      id: 5,
      image: IMG5,
      title: "Travel Buddy",
      github: "https://github.com/sampano/travel-buddy",
      demo: "https://sampano.github.io/travel-buddy/",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequatur natus recusandae ex est perferendis.",
    },

    {
      id: 6,
      image: IMG6,
      title: "Project Number One",
      github: "https://github.com",
      demo: "https://github.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequatur natus recusandae ex est perferendis.",
    },
  ];
  return (
    <section id="portfolio">
      <h5 className="portfolio-h5">My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="project 1" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="portfolio-item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
