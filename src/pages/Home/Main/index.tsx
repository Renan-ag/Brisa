// Components
import { Link } from 'react-router-dom';
// Hooks
import { useEffect, useState } from 'react';
// API
import api from 'services/api';
// Types
import IPost from 'types/post.type';
import IUser from 'types/user.type';
// Utils
import formatDateToPost from 'utils/formatDateToPost';

const Main = ({ content, border }: { content: IPost, border: boolean }) => {
  const [authorData, setAuthorData] = useState<IUser | null>(null);

  useEffect(() => {
    if (!content?.id_user) return;

    const fetchAuthorData = async () => {
      try {
        const response = await api.get<IUser>(`users/${content.id_user}`);
        setAuthorData(response.data);
      } catch (err) {
        console.error('Failed to fetch author data:', err);
      }
    };

    fetchAuthorData();
  }, [content?.id_user]);

  return (
    <>
      <article className={`post-card ${border ? 'bb-black' : ''} py-32`}>
        <div className="post-meta">
          <span className="color-gray uppercase h6">{formatDateToPost(content.date)}</span>
          <br />
          <span className="color-gray uppercase h6">{content.category}</span>
        </div>

        <Link
          to={`/post/${content.id}`}
          className="post-title-link"
          aria-label={`Leia mais sobre ${content.title}`}
        >
          <h3 className="fw-normal mt-8">{content.title}</h3>
        </Link>

        <p className="post-excerpt mt-8">
          {content.resume}
        </p>

        <div className="author-info mt-24 flex-vertical-center">
          <div className="profile">
            <img
              src={authorData?.imageProfile}
              className="profile-img"
              alt={`Perfil de ${authorData?.name}`}
              loading="lazy"
            />
          </div>

          <div className="author-details ml-16">
            <h6 className="color-white">
              {authorData?.name} {authorData?.surname}
            </h6>
            <h6 className="color-gray">@{authorData?.user}</h6>
          </div>
        </div>
      </article>
    </>
  );
}

export default Main;