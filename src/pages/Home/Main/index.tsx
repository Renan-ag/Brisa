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
  const [authorData, setAuthorData] = useState<IUser>();

  useEffect(() => {
    if (!content) return;

    api.get(`users/${content.id_user}`)
      .then((res) => {
        setAuthorData(res.data as IUser);
      })
      .catch((err) => { console.error(err); });
  }, []);

  return (
    <>
      <div className={`${border && 'bb-black'} py-32`}>
        <h6 className="color-gray uppercase">{formatDateToPost(content.date)}</h6>
        <h6 className="color-gray uppercase">{content.category}</h6>

        <Link to={`/post/${content.id}`}>
          <h3 className="fw-normal mt-8">{content.title}</h3>
        </Link>
        <p className="mt-8">
          {content.resume}
        </p>

        <div className="mt-24 flex-vertical-center">
          <div className="profile">
            <img src={authorData?.imageProfile} className="profile-img" alt="Imagem de perfil do autor." />
          </div>

          <div className="ml-16">
            <h6 className="color-white">{authorData?.name} {authorData?.surname}</h6>
            <h6 className="color-gray">@{authorData?.user}</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main;