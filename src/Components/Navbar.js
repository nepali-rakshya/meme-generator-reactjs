import NavbarCSS from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__logo">
        <img src="/images/logo.png" alt="trollface-logo" />
        <span>Meme Generator</span>
      </div>

      <div className="nav__title--light">React Course - Project 3</div>
    </nav>
  );
};

export default Navbar;
