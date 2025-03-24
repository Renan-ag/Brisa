const NotFound = () => {
  return (
    <>
      <div className="container flex-center flex-column flex-grow-1">
        <h1 className="color-white">404</h1>
        <div className="mt-16">
          <h4 className="color-white fw-normal">Página não encontrada!</h4>
          <a href="#" className="btn w-100 text-center mt-24">Voltar</a>
        </div>
      </div>
    </>
  )
}

export default NotFound;