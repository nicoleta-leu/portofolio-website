import "./Header.css";

const Header = () => {

  return (
    <header className="header">
      <nav className="navbar container">
        <a href="/" className="logo">
          <img src="/assets/logo.png" alt="Page – logo" />
        </a>
        <ul className='nav-links'>
          <li><a href="#story">Povestea mea</a></li>
          <li><a href="#education">Dezvoltare personală</a></li>
          <li><a href="#project">Proiect personal</a></li>
          <li><a href="#contact">Contacte</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
