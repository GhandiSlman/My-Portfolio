import "./main.css";
import { myProjects } from "./myProjects";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <main id="projects" className="projects-section">

      <div className="projects-title">
        <span>MY WORK</span>
        <h2>Featured Mobile Applications</h2>
        <p>
          Real-world Flutter applications built with modern technologies,
          scalable architecture and great user experience.
        </p>
      </div>


      <div className="projects-container">

        {myProjects.map((project, index) => (

          <motion.article
            key={project.id}
            className={`project ${index % 2 !== 0 ? "reverse" : ""}`}

            initial={{
              opacity:0,
              y:50
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:.6
            }}
          >


            {/* Phone Mockup */}

            <div className="phone-wrapper">

              <div className="phone">

                <img 
                  src={project.image}
                  alt={project.title}
                />

              </div>

            </div>



            {/* Content */}

            <div className="project-content">

              <span className="project-type">
                {project.type}
              </span>


              <h3>
                {project.title}
              </h3>


              <p className="description">
                {project.subtitle}
              </p>



              <div className="technologies">

                {project.technologies.map((tech)=>(
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>



              <ul className="features">

                {project.features.map((feature)=>(
                  <li key={feature}>
                    {feature}
                  </li>
                ))}

              </ul>


<div className="project-status">
  {project.status}
</div>

<div className="project-buttons">

  {project.buttons.map((button) =>

    button.disabled ? (

      <span
        key={button.title}
        className="disabled-btn"
      >
        {button.title}
      </span>

    ) : (

      <a
        key={button.title}
        href={button.link}
        target="_blank"
        rel="noreferrer"
      >
        {button.title}
      </a>

    )

  )}

</div>


            </div>


          </motion.article>

        ))}

      </div>


    </main>
  );
};


export default Main;