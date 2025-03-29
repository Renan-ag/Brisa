const Contact = () => {
  return (
    <>
      <div className="container flex-grow-1">
        <h2 className="ml-16 fw-normal">Fale com a gente</h2>
        <div className="row mt-8">
          <div className="col-6 py-0">
            <p className="text-justify color-white">
              Seja bem-vindo(a) ao Brisa, um espaço dedicado a compartilhar ideias, inspirações e reflexões sobre vida, viagens, cultura e tudo o que nos move. Queremos ouvir você!
              <br /> <br />
              Se tiver dúvidas, sugestões ou apenas quiser bater um papo, não hesite em nos contatar. Sua opinião é importante para nós e ajuda a tornar o Brisa cada vez melhor.
              <br /> <br />
              <i>O Brisa é mais que um blog, é uma comunidade. Juntos, criamos ventos de mudança. 🌿</i>
            </p>
            <h5 className="color-white fw-normal mt-16">E-mail: Test@email.com</h5>
          </div>
          <div className="col-6 py-0">
            <form className="">
              <input type="text" placeholder="Nome" name="name" />
              <input type="text" className="mt-16" placeholder="Email" name="email" />
              <textarea name="message" className="mt-16" placeholder="Mensagem" rows={8}></textarea>
              <div className="mt-16 flex-end">
                <button className="btn">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;