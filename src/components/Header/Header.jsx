import "./header.css";

const Header = () => {

  return (

    <header>

      <nav>

        <a href="#up" className="logo">
          Ghandi Alslman
        </a>


        <ul>

          <li>
            <a href="#about">
              About
            </a>
          </li>


          <li>
            <a href="#skills">
              Skills
            </a>
          </li>


          <li>
            <a href="#projects">
              Projects
            </a>
          </li>


          <li>
            <a href="#contact">
              Contact
            </a>
          </li>

        </ul>


      </nav>


    </header>

  );

};


export default Header;