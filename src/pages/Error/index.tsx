// Components
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container text-container flex-center flex-column flex-grow-1">
      <h3 className="color-red fw-normal text-center">Ocorreu um erro ao acessar o servidor ⚠</h3>
      <div className="mt-16">
        <h5 className="color-gray text-center fw-normal">Parece que houve um erro com nosso servidor mas já estamos consertando 🔧</h5>
        <Link to="/" className="btn w-100 text-center mt-32">Tentar accessar novamente</Link>
      </div>
    </div>
  )
}

export default Error;