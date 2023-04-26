import '../../Main.css';

const Header = (props) => {
  return (
    <>
      <header>
        <a href="#!">
          <img
            src={require('../../../src/images/mutsalogo.png')}
            alt="logo"
            className="likelion"
            id="likelion1"
          />
        </a>
        <nav className={props.dark ? 'navDark' : 'nav'}>
          <a href="#go__about" className="nav__about">
            ABOUT
          </a>
          <a href="#go__hobby" className="nav__hobby">
            HOBBY
          </a>
          <a href="#go__skill" className="nav__skill">
            SKILL
          </a>
          <a href="#go__passion" className="nav__passion">
            PASSION
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
