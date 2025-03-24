import wind from 'svg/wind.svg'
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="px-48 py-24">
        <nav>
          <Link to="/" className="brand brand-font">
            <img src={wind} alt="Vento icone" />
            Brisa
          </Link>
          <ul>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>

        <div data-target="toggleMenuButton" className="bx"></div>

        <div className="flex-start">
          <div className="search">
            <form className="flex-center">
              <input type="text" name="search" placeholder="Buscar..." />
              <button title='Pesquisar' className="btn-search"></button>
            </form>
          </div>

          <div className="cta-desktop ml-24">
            <Link to="/login" className="btn">Login</Link>
          </div>

          <div className="cta-mobile">
            <Link to="/login" className="link color-yellow">Login</Link>
          </div>
        </div>

        <div data-target="menuMobile" className="menu-mobile">
          <ul className="nav-mobile">
            <li><Link className="link-menu-mobile" to="/sobre">Sobre</Link></li>
            <li><Link className="link-menu-mobile" to="/contato">Contato</Link></li>
            <li className="p-16">
              <form className="flex-center">
                <input type="text" name="search" placeholder="Buscar..." />
                <button title='Pesquisar' className="btn-search"></button>
              </form>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;