// Styles
import './card.css';
// Types
import IPost from 'types/post.type';
// Utils
import formatDateToPost from 'utils/formatDateToPost';
// Components
import { Link } from 'react-router-dom';

const Card = ({ content }: { content: IPost }) => {
  return (
    <>
      <div className="col-4 card p-0">
        <div className="thumb hidden">
          <Link to={`/post/${content.id}`}>
            <img src={content.imageUrl} alt="Imagem de setup tematico do Raichu (Pokemon)" />
          </Link>
        </div>
        <div className="px-16 mt-16">
          <div className="flex-between ">
            <h6 className="uppercase color-gray">{content.category}</h6>
            <h6 className="color-gray">{formatDateToPost(content.date)}</h6>
          </div>
          <h4 className="fw-normal mt-8">{content.title}</h4>
          <p className="mt-8">{content.resume}</p>
          <div className="flex-center my-16">
            <Link to={`/post/${content.id}`} className="link color-blue"> Ler mais </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;