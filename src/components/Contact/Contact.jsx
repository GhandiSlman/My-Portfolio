import "./contact.css";
import { 
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";


const Contact = () => {

  return (

    <section id="contact" className="contact">


      <div className="contact-title">

        <span>
          CONTACT ME
        </span>

        <h2>
          Let's Build Something Great
        </h2>

        <p>
          I'm open to Flutter development opportunities,
          freelance projects and collaborations.
        </p>

      </div>



      <div className="social-links">


        <a 
          href="https://wa.me/+963992114052"
          target="_blank"
          className="whatsapp"
        >
          <FaWhatsapp />
          <span>
            WhatsApp
          </span>
        </a>



        <a 
           href="mailto:ghandialslman246@gmail.com"
          className="email"
        >
          <FaEnvelope />
          <span>
            Email
          </span>
        </a>




        <a 
          href="https://www.linkedin.com/in/ghandi-alslman-652aa33ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          className="linkedin"
        >
          <FaLinkedin />
          <span>
            LinkedIn
          </span>
        </a>




        <a 
          href="https://github.com/GhandiSlman"
          target="_blank"
          className="github"
        >
          <FaGithub />
          <span>
            Github
          </span>
        </a>



      </div>


    </section>

  );

};


export default Contact;