import ProfileImg from 'img/profile.jpg';

const Profile = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-6">
            <div className="flex-start">
              <div className="profile-big">
                <img src={ProfileImg} className="profile-img" alt="" />
              </div>

              <div className="ml-24">
                <h3 className="fw-normal">Lucas Monteiro</h3>
                <h6 className="color-gray">@lcasmountain</h6>
              </div>
            </div>

            <p className="mt-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis earum aut ab accusamus quidem blanditiis.
              Modi molestiae voluptas voluptatum labore.
            </p>
          </div>
          <div className="col-6 flex-end g-24">
            <a href="#" className="btn"> Meus dados </a>
            <a href="#" className="btn">Adicionar Post</a>
          </div>
        </div>

        <div className='mt-32'>
          <div className='px-16'>
            <h3 className="fw-normal">Adicionar um novo post</h3>
            <p className="mt-8">
              Preencha os campos abaixo para adicionar um novo post ao blog.
            </p>
          </div>

          <form>
            <div className="row">
              <div className="col-3 p-0">
                <label htmlFor="date">
                  <h6 className="fw-normal">Data</h6>
                </label>
                <input type="date" id="date" name="date" className="mt-8" />
              </div>
              <div className="col-3 p-0">
                <label htmlFor="category">
                  <h6 className="fw-normal">Categoria</h6>
                </label>
                <select id="category" name="category" className="mt-8">
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Jogos">Jogos</option>
                  <option value="Cinema">Cinema</option>
                  <option value="Fotografia">Fotografia</option>
                  <option value="Criativo">Criativo</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              <div className="col-6 p-0">
                <label htmlFor="title">
                  <h6>Título</h6>
                </label>
                <input type="text" id="title" name="title" className="mt-8" />
              </div>
            </div>

            <div className="row">
              <div className="col-9 p-0">
                <label htmlFor="resume">
                  <h6>Resumo do post</h6>
                </label>
                <input type="text" id="resume" name="resume" className="mt-8" />
              </div>
              <div className="col-3 p-0">
                <label htmlFor="duration">
                  <h6 className="fw-normal">Categoria</h6>
                </label>
                <select id="duration" name="duration" className="mt-8">
                  <option value="5">5min.</option>
                  <option value="10">10min.</option>
                  <option value="15">15min.</option>
                  <option value="20">20min.</option>
                  <option value="25">25min.</option>
                  <option value="30">30min.</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-12 p-0">
                <label htmlFor="description">
                  <h6 className="mb-8">Descrição</h6>
                </label>
                <textarea name="description" id="description" className="w-100" rows={8}></textarea>
              </div>
            </div>

            <div className="row flex-end">
              <button className="btn mr-16">Adicionar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Profile;