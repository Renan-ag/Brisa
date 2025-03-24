import wind from 'svg/wind.svg'
import './header.css';

const Header = () => {
  return (
    <>
      <header className="px-48 py-24">
        <nav>
          <span className="brand brand-font">
            <img src={wind} alt="Vento icone" />
            Brisa
          </span>
          <ul>            
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
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
            <a href="#" className="btn">Login</a>
          </div>

          <div className="cta-mobile">
            <a href="#" className="link color-yellow">Login</a>
          </div>
        </div>


        <div data-target="menuMobile" className="menu-mobile">
          <ul className="nav-mobile">            
            <li><a className="link-menu-mobile" href="">Sobre</a></li>
            <li><a className="link-menu-mobile" href="">Contato</a></li>
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