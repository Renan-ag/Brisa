import Profile from 'img/profile.jpg'

const Main = () => {
  return (
    <>
      <div className="bb-black py-32">
        <h6 className="color-gray uppercase">12 SET 2021</h6>
        <h6 className="color-yellow uppercase">Games</h6>

        <h3 className="fw-normal mt-8">O que esperar de Pokemon Legends Z-A?</h3>
        <p className="mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Lorem
          ipsum
          dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.
        </p>

        <div className="flex-start mt-24">
          <div className="profile">
            <img src={Profile} className="profile-img" alt="" />
          </div>

          <div className="ml-16">
            <h6 className="color-blue bold">Lucas Monteiro</h6>
            <h6 className="color-gray">@lcasmontain</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main;