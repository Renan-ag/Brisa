// Svg
import wind from "svg/wind.svg";
// Styles
import "./header.css";
// Components / Hooks  / Types
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowMobileMenu(false);
    navigate(`/pesquisa?search=${searchValue}`);
  }

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <>
      <header className="page-header px-48 py-24">
        <nav>
          <Link to="/" className="brand brand-font">
            <img src={wind} alt="Vento icone" />
            Brisa
          </Link>
          <ul>
            <li>
              <Link to="/pesquisa">Explorar</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>

        <div
          onClick={toggleMobileMenu}
          className={`bx ${showMobileMenu && "active"}`}
        ></div>

        <div className="flex-start">
          <div className="search">
            <form onSubmit={handleSearch} className="flex-center">
              <input
                type="text"
                name="search"
                onChange={handleInputChange}
                value={searchValue}
                placeholder="Buscar..."
              />
              <button
                type="submit"
                title="Pesquisar"
                className="btn-search"
              ></button>
            </form>
          </div>

          <div className="cta-desktop ml-24">
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>

          <div className="cta-mobile">
            <Link to="/login" className="link bold">
              Login
            </Link>
          </div>
        </div>
      </header>
      <div className={`menu-mobile ${showMobileMenu && "show-menu"}`}>
        <ul className="nav-mobile">
          <li>
            <Link
              onClick={toggleMobileMenu}
              className="link-menu-mobile"
              to="/pesquisa"
            >
              Explorar
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMobileMenu}
              className="link-menu-mobile"
              to="/sobre"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMobileMenu}
              className="link-menu-mobile"
              to="/contato"
            >
              Contato
            </Link>
          </li>
          <li className="p-16">
            <form onSubmit={handleSearch} className="flex-center">
              <input
                type="text"
                name="search"
                onChange={handleInputChange}
                value={searchValue}
                placeholder="Buscar..."
              />
              <button
                type="submit"
                title="Pesquisar"
                className="btn-search"
              ></button>
            </form>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
