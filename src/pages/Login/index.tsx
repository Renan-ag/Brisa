import Wind from 'svg/wind.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="container small-content-container flex-grow-1">
      <div className="row w-100">
        <div className="col-2 remove-in-sm"></div>
        <div className="col-8">
          <div className="flex-center">
            <h3 className="text-center">
              <span className="brand brand-font fw-normal flex-center g-8">
                <img src={Wind} alt="Vento icone" />
                Brisa
              </span>
            </h3>
          </div>

          <h5 className="text-center fw-normal mt-16"> Olá, faça o login para continuar.</h5>

          <form>
            <input type="text" name="user" className="mt-24" placeholder="Digite seu usuário" />
            <input type="password" name="password" className="mt-16" placeholder="Digite sua senha" />
            <Link to="/perfil" className="btn text-center w-100 mt-32"> Entrar </Link>
          </form>
        </div>
        <div className="col-2 remove-in-sm"></div>
      </div>
    </section>
  )
}

export default Login;