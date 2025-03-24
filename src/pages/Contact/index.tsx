const Contact = () => {
  return (
    <>
      <div className="container flex-grow-1">
        <h2 className="ml-16">Fale com a gente</h2>
        <div className="row">
          <div className="col-6 py-0">
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse alias, rerum placeat tempora, voluptas modi assumenda voluptatem repellat molestiae minus dolor aspernatur! Temporibus placeat unde fugit, reprehenderit magni ratione itaque?
            </p>
            <h5 className="color-gray mt-8">E-mail: Test@email.com</h5>
          </div>
          <div className="col-6 py-0">
            <form className="">
              <input type="text" placeholder="Nome" name="name" />
              <input type="text" className="mt-16" placeholder="Email" name="email" />
              <textarea name="message" className="mt-16" placeholder="Mensagem" rows={8}></textarea>
              <div className="mt-16 flex-end">
                <button className="btn ">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;