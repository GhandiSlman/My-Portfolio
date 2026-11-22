import "./hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="hero-small">
          SOFTWARE ENGINEER • FLUTTER SPECIALIST
        </span>

        <h1>
          Engineering
          <br />
          <span>High-Performance Mobile Apps</span>
        </h1>

        <p>
          I'm <strong>Ghandi Alslman</strong>, a Software Engineer specializing
          in Flutter development. I build scalable, production-ready mobile
          applications with clean architecture, exceptional user experiences,
          and seamless backend integration.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            View Projects
          </a>

          <a href="#contact">
            Contact Me
          </a>

          <a
            className="cv-btn"
            href="/Ghandi_Alslman_CV.pdf"
            download
          >
            Download CV
          </a>
        </div>

        <div className="hero-stack">
          <span>Flutter</span>
          <span>Dart</span>
          <span>GetX</span>
          <span>Bloc</span>
          <span>Cubit</span>
          <span>Firebase</span>
          <span>REST APIs</span>
          <span>Clean Architecture</span>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .7 }}
      >
        <div className="developer-card">

          <div className="circle">
            <img src="./me2.png" alt="Ghandi Alslman" />
          </div>

          <h3>
            Software Engineer
          </h3>

          <p>
            Flutter • Mobile Development
          </p>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;