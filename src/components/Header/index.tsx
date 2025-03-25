// Svg
import wind from 'svg/wind.svg'
// Styles
import './header.css';
// Components / Hooks  / Types
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';

const Header = () => {
  const initialValueForm = { search: '' };
  const navigate = useNavigate();

  const [form, setForm] = useState(initialValueForm);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;    
    setForm({ ...form, [name]: value });
  }

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();    
    navigate(`/pesquisa/${form.search}`);
  }

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
            <form onSubmit={handleSearch} className="flex-center">
              <input type="text" name="search" onChange={onChange} placeholder="Buscar..." />
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
              <form onSubmit={handleSearch} className="flex-center">
                <input type="text" name="search" onChange={onChange} placeholder="Buscar..." />
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