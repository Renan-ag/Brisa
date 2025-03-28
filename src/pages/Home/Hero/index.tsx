import WindParticle from "../WindParticle";

const Hero = () => {
  return (
    <section className="position-relative">
      <div className="container wind-start hero">
        <div className="row">
          <div className="col-6 flex-start">
            <div className="pl-72 remove-in-sm"></div>
            <div>
              <h1 className="brand-font fw-normal h0">Brisa</h1>
              <p className="text-left color-white mt-16">
                Brisa é onde as ideias sopram livremente. Com conteúdos diversos, de notícias a reflexões e análises, nosso
                objetivo é trazer um ar novo de inspiração e conhecimento para sua rotina.
              </p>
            </div>
          </div>
          <div className="col-6 h-100 remove-in-sm">
            <WindParticle />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;