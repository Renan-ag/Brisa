import PostImg from 'img/post-1.png';
import './card.css';

const Card = () => {
  return (
    <>
      <div className="col-4 card p-0">
        <div className="thumb hidden">
          <a href="#">
            <img src={PostImg} alt="Imagem de setup tematico do Raichu (Pokemon)" />
          </a>
        </div>
        <div className="px-16">
          <div className="flex-between mt-8">
            <h6 className="color-yellow uppercase">Games</h6>
            <h6 className="color-gray">12 SET 2021</h6>
          </div>
          <h4 className="fw-normal mt-8">Setup tematico do raichu abalou internet ! </h4>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.
          </p>

          <div className="flex-center mt-16 mb-8">
            <a href="#" className="link color-blue"> Ler mais </a>
          </div>
        </div>

      </div>
    </>
  );
}

export default Card;