import "./skills.css";
import { motion } from "framer-motion";
const skills = [
  {
    title: "Flutter",
    description:
      "Building high-performance, cross-platform mobile applications."
  },

  {
    title: "Dart",
    description:
      "Writing clean, scalable and maintainable application code."
  },

  {
    title: "GetX",
    description:
      "State management, dependency injection and route management."
  },

  {
    title: "Bloc & Cubit",
    description:
      "Predictable state management following the BLoC architecture."
  },

  {
    title: "Clean Architecture",
    description:
      "Designing scalable, modular and maintainable applications."
  },

  {
    title: "Firebase",
    description:
      "Authentication, Cloud Messaging, Analytics and cloud services."
  },

  {
    title: "REST APIs",
    description:
      "Integrating secure and scalable backend services."
  },

  {
    title: "Real-Time Applications",
    description:
      "Live communication using WebSockets and event-driven systems."
  },

  {
    title: "Background Services",
    description:
      "Foreground services, location tracking and background execution."
  },

  {
    title: "Google Maps",
    description:
      "Real-time tracking, geolocation and map-based applications."
  },

  {
    title: "Push Notifications",
    description:
      "Firebase Cloud Messaging and local notification integration."
  },

  {
    title: "Performance Optimization",
    description:
      "Optimizing rendering, responsiveness and application performance."
  },

  {
    title: "Hive & Sqflite",
    description:
      "Efficient local storage and offline-first data persistence."
  },

  {
    title: "Payments",
    description:
      "Secure payment integration with Stripe and payment gateways."
  },

  {
    title: "Google Play Publishing",
    description:
      "Publishing, signing and managing production app releases."
  },

  {
    title: "Responsive UI",
    description:
      "Building adaptive interfaces for mobile, tablet and web."
  },

  {
    title: "Git & GitLab",
    description:
      "Version control, branching strategies and team collaboration."
  },

  {
    title: "Agile Development",
    description:
      "Collaborating effectively within Scrum and Agile teams."
  }
];

const Skills = () => {

  return (

    <section className="skills" id="skills">


      <div className="skills-title">

        <span>
          MY SKILLS
        </span>


        <h2>
          Technologies I Work With
        </h2>


      </div>



      <div className="skills-container">


        {
          skills.map((skill,index)=>(

            <motion.div

              key={skill.title}

              className="skill-card"

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                delay:index * .05
              }}

            >


              <h3>
                {skill.title}
              </h3>


              <p>
                {skill.description}
              </p>


            </motion.div>

          ))
        }


      </div>


    </section>

  );

};


export default Skills;