import './AboutMe.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="about-container">
      <div className="about-text">
        <h2>
          BUNĂ!<br />
          sunt<br />
          LEU Nicoleta!
        </h2>
        <p> Absolventă a Universității Tehnice din Moldova, specialitatea Tehnologii Informaționale. Sunt pasionată de Front-End Development și mereu dornică să învăț și să aflu lucruri noi. Îmi place să creez interfețe moderne și intuitive, folosind tehnologii precum HTML, CSS, JavaScript și React.</p> 
        <p>Sunt în căutarea unor noi oportunități de dezvoltare profesională, unde să pot aplica cunoștințele dobândite și să continui să cresc alături de echipe dinamice și proiecte interesante. Sunt o persoană deschisă, motivată și dedicată în tot ceea ce fac. </p>
      </div>

      <div className="about-img">
        <img src="/assets/profileFoto.png" alt="Poza de profil" />

        <div className="social-icons">
          <a href="https://github.com/nicoleta-leu" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/leu-nicoleta/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

    </section>
  );
}
export default AboutMe;