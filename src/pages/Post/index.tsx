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
  const [postData, setPostData] = useState<IPost>();
  const [authorData, setAuthorData] = useState<IUser>();

  useEffect(() => {
    if (idPost) {
      api.get("/posts/" + idPost)
        .then((res) => {
          setPostData(res.data);

          api.get("/users/" + res.data.id_user)
            .then((res) => { setAuthorData(res.data) })
            .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <>
      <section className="container">
        <div>
          <h5 className="color-gray fw-normal uppercase text-center">{postData?.category}</h5>
          <h2 className="fw-normal mt-8 text-center">{postData?.title}</h2>
          <div className="flex-center mt-24">
            <div className="flex-start">
              <div className="profile">
                <img src={authorData?.imageProfile} className="profile-img" alt="Imagem do autor" />
              </div>
              <div className="ml-16">
                <h6 className="color-blue bold">{authorData?.name} {authorData?.surname}</h6>
                <h6 className="color-gray">Autor</h6>
              </div>
            </div>
            <div className="ml-32">
              <h6 className="color-gray"> {formatDateToPost(postData?.date ?? new Date())} - leitura de {postData?.duration}.</h6>
            </div>
          </div>
        </div>
        <div className="w-100 post-image my-32">
          <img src={postData?.imageUrl} alt="Imagem da noticia" />
        </div>
        <div>
          {/* <h3 className="mb-8 fw-normal">Este aqui é o primeiro titulo</h3> */}
          <p>{postData?.content}</p>
        </div>
        <div className="row mt-40">
          <div className="col-3 remove-in-sm"></div>
          <div className="col-6 border-black px-16 py-32">
            <div className="flex-start">
              <div>
                <div className="profile-big">
                  <img src={authorData?.imageProfile} className="profile-img" alt="Imagem do autor" />
                </div>
              </div>

              <div className="ml-32">
                <h6 className="fw-normal color-blue">{authorData?.name} {authorData?.surname}</h6>
                <h6 className="color-gray">Autor</h6>
                <p className="mt-16"> {authorData?.description} </p>
              </div>
            </div>
          </div>
          <div className="col-3 remove-in-sm"></div>
        </div>
      </section>
    </>
  )
}

export default Post;