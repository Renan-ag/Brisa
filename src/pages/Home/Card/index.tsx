// Styles
import "./card.css";
// Types
import IPost from "types/post.type";
// Utils
import formatDateToPost from "utils/formatDateToPost";
// Components
import { Link } from "react-router-dom";

const Card = ({ content }: { content: IPost }) => {
  return (
    <>
      <article className="col-4">
        <div className="card p-0 mx-auto">
          <div className="thumb hidden">
            <Link
              aria-label={`Leia mais sobre ${content.title}`}
              to={`/post/${content.id}`}
            >
              <img
                loading="lazy"
                src={content.imageUrl}
                alt={`Imagem ilustrando o tema "${content.title}"`}
              />
            </Link>
          </div>

          <div className="px-16 pt-16 flex-grow-1">
            <div className="flex-between">
              <h6 className="uppercase color-gray">{content.category}</h6>
              <h6 className="color-gray">{formatDateToPost(content.date)}</h6>
            </div>
            <div className="flex-start flex-column h-100">
              <h4 className="fw-normal mt-8">{content.title}</h4>
              <div className="flex-grow-1">
                <p className="mt-8">{content.resume}</p>
              </div>
              <div className="w-100 button-container">
                <Link
                  aria-label={`Leia mais sobre ${content.title}`}
                  to={`/post/${content.id}`}
                  className="btn btn-outline btn-sm w-100 text-center"
                >
                  Ler mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
