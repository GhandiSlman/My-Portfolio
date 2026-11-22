import "./footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {

  return (

    <footer>


      <div className="footer-content">


        <div className="footer-brand">

          <h2>
            Ghandi Alslman
          </h2>

          <p>
            Flutter Developer building modern,
            scalable mobile applications.
          </p>

        </div>



        <div className="footer-links">


          <a href="#about">
            About
          </a>


          <a href="#skills">
            Skills
          </a>


          <a href="#projects">
            Projects
          </a>


          <a href="#contact">
            Contact
          </a>


        </div>




        <div className="footer-social">


          <a href="https://github.com/GhandiSlman">
            <FaGithub />
          </a>



          <a href="https://www.linkedin.com/in/ghandi-alslman-652aa33ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin />
          </a>



          <a  href="mailto:ghandialslman246@gmail.com">
            <FaEnvelope />
          </a>


        </div>



      </div>



      <div className="copyright">

        © {new Date().getFullYear()} Ghandi Alslman.
        All rights reserved.

      </div>


    </footer>

  );

};


export default Footer;