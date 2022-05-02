import { linkedin, github } from '../assets/index';

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://www.linkedin.com/in/kevin-c-miller/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="linkedin logo" className="social" />
      </a>
      <a
        href="https://github.com/Kevin-c-miller"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="github logo" className="social" />
      </a>
    </footer>
  );
};

export default Footer;
