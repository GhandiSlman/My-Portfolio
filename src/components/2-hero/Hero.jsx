import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json";
import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero">
      <div className="left-section">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          src="./me.jpg"
          alt="Profile"
          className="avatar"
        />

        <motion.span
          className="badge"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          👋 Available for Freelance
        </motion.span>

        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Hi, I'm <span>John Doe</span>
          <br />
          Flutter Developer
        </motion.h1>

        <motion.p
          className="sub-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I build beautiful, scalable and high-performance mobile
          applications using Flutter, Firebase, REST APIs and modern
          architectures.
        </motion.p>

        <div className="hero-buttons">
          <a href="#projects">
            <button className="primary-btn">
              View Projects
            </button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">
              Contact Me
            </button>
          </a>
        </div>

        <div className="all-icons">
          <a href="#">
            <i className="icon-github"></i>
          </a>

          <a href="#">
            <i className="icon-linkedin"></i>
          </a>

          <a href="#">
            <i className="icon-twitter"></i>
          </a>
        </div>
      </div>

      <motion.div
        className="right-section"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={devAnimation}
          onLoadedImages={() => {
            lottieRef.current?.setSpeed(0.6);
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;