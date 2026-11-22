import "./about.css";
import { motion } from "framer-motion";

const About = () => {

  return (

    <section id="about" className="about">


      <div className="section-title">

        <span>
          ABOUT ME
        </span>

        <h2>
          Flutter Developer Building Real Products
        </h2>

      </div>



      <div className="about-content">


        <motion.div

          className="about-text"

          initial={{
            opacity:0,
            x:-40
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

        >


          <p>
            I'm a Flutter Developer specialized in building
            modern, scalable and production-ready mobile applications.
          </p>


          <p>
            I focus on creating smooth user experiences,
            clean architecture and reliable applications
            connected with powerful backend systems.
          </p>


          <p>
            My experience includes Flutter, Bloc, Cubit, GetX, Firebase,
            REST APIs, Google Maps, Background services,
            real-time communication and payment systems.
          </p>



          <div className="about-info">


            <div>
              <h3>
                5+
              </h3>

              <span>
                Years Experience
              </span>
            </div>



            <div>
              <h3>
                10+
              </h3>

              <span>
                Mobile Apps
              </span>
            </div>



            <div>
              <h3>
                15+
              </h3>

              <span>
                Technologies
              </span>
            </div>


          </div>


        </motion.div>




        <motion.div

          className="about-card"

          initial={{
            opacity:0,
            x:40
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

        >


          <h3>
            What I Build
          </h3>


          <ul>

            <li>
              Flutter Mobile Applications
            </li>

            <li>
              Ride Sharing Applications
            </li>

            <li>
              E-commerce Platforms
            </li>

            <li>
              Business Applications
            </li>

            <li>
              Firebase Integrations
            </li>

            <li>
              REST API & Backend Integration
            </li>

            <li>
              Maps & Location Services
            </li>

            <li>
              Background Services
            </li>

            <li>
              Payment Solutions
            </li>


          </ul>


        </motion.div>


      </div>


    </section>

  );

};


export default About;