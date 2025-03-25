import WindParticle from "../WindParticle";

const Hero = () => {
  return (
    <>
      <section className="container wind-start position-relative hero">
        <div className="row">
          <div className="col-6 pl-72">
            <h1 className="brand-font fw-normal h0">Brisa</h1>
            <p className=" mt-16">
              Brisa é onde as ideias sopram livremente. Com conteúdos diversos, de notícias a reflexões e análises, nosso
              objetivo é trazer um ar novo de inspiração e conhecimento para sua rotina.
            </p>
          </div>
          <div className="col-6 h-100">
            <WindParticle />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;