// Styles
import './Post.css'
// Hooks
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// API
import api from 'services/api';
// Types
import IPost from 'types/post.type';
import IUser from 'types/user.type';
import formatDateToPost from 'utils/formatDateToPost';

const Post = () => {
  const { idPost } = useParams();
  const [error, setError] = useState(false);
  const [postData, setPostData] = useState<IPost>();
  const [authorData, setAuthorData] = useState<IUser>();

  useEffect(() => {
    if (idPost) {
      api.get("/posts/" + idPost)
        .then((res) => {
          setPostData(res.data);

          api.get("/users/" + res.data.id_user)
            .then((res) => { setAuthorData(res.data) })
            .catch((err) => {
              console.error(err);
              setError(true);
            })
        })
        .catch((err) => {
          console.error(err);
          setError(true);
        });
    }
  }, []);

  return (
    <>
      <section className="container text-container">
        {error && <h5 className='text-center pt-48 color-red'>Houve um erro ao carregar os dados da página, tente recarregar a página novamente! </h5>}
        <div>
          <h6 className="color-gray fw-normal uppercase">{postData?.category}</h6>
          <h3 className="fw-normal">{postData?.title}</h3>
          {authorData &&
            <div className="mt-8">
              <div className="flex-vertical-center">
                <div>
                  <h6 className="color-white">Escrito por {authorData?.name} {authorData?.surname}</h6>
                  <h6 className="color-gray">{formatDateToPost(postData?.date ?? new Date())} - leitura de {postData?.duration}</h6>
                </div>
              </div>
            </div>
          }
        </div>
        <div className="w-100 post-image my-24">
          <img src={postData?.imageUrl} alt={`Imagem da noticia "${postData?.title}"`} />
        </div>
        <div>
          <p>{postData?.content}</p>
        </div>
        <div className="row mt-40">
          <div className="col-1 remove-in-sm"></div>
          {authorData && <div className="col-10 border-black px-16 py-32">
            <div className="flex-start">
              <div>
                <div className="profile-big">
                  <img src={authorData?.imageProfile} className="profile-img" alt="Imagem do autor" />
                </div>
              </div>

              <div className="ml-32 flex-grow-1">
                <h6 className="fw-normal text-center color-white">{authorData?.name} {authorData?.surname}</h6>
                <h6 className="color-gray text-center">Autor</h6>
                <p className="mt-16 text-center"> {authorData?.description} </p>
              </div>
            </div>
          </div>}
          <div className="col-1 remove-in-sm"></div>
        </div>
      </section>
    </>
  )
}

export default Post;