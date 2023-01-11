import NavbarCSS from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={NavbarCSS.navbar}>
      <div className={NavbarCSS.nav__logo}>
        <img
          src="/images/logo.png"
          alt="trollface-logo"
          className={NavbarCSS["nav__logo--width"]}
        />
        <span>Meme Generator</span>
      </div>

      <div className={NavbarCSS["nav__title--light"]}>
        Rakshya Nepali - Project
      </div>
    </nav>
  );
};

export default Navbar;
