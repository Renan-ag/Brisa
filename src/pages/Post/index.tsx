// Components
import ReactMarkdown from 'react-markdown';
// Styles
import './Post.css'
// Hooks
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// API
import api from 'services/api';
// Types
import IPost from 'types/post.type';
import IUser from 'types/user.type';
import formatDateToPost from 'utils/formatDateToPost';

const Post = () => {
  const navigate = useNavigate();
  const { idPost } = useParams<{ idPost: string }>();
  const [error, setError] = useState(false);
  const [postData, setPostData] = useState<IPost | null>(null);
  const [authorData, setAuthorData] = useState<IUser | null>(null);

  useEffect(() => {
    if (!idPost) {
      setError(true);
      return;
    }

    let isMounted = true;

    const fetchData = async () => {
      try {
        const postResponse = await api.get<IPost>(`/posts/${idPost}`);
        if (!isMounted) return;
        if (!postResponse.data) navigate('/post-nao-encontrado');
        setPostData(postResponse.data);

        try {
          const authorResponse = await api.get<IUser>(`/users/${postResponse.data.id_user}`);
          if (isMounted) setAuthorData(authorResponse.data);
        } catch (authorError) {
          console.error('Failed to fetch author:', authorError);
        }
      } catch (postError) {
        console.error('Failed to fetch post:', postError);
        if (isMounted) setError(true);
      }
    };

    fetchData();

    return () => { isMounted = false; };
  }, [idPost, navigate]);

  if (error) {
    return <h5 className='text-center pt-48 color-red'>Houve um erro ao carregar os dados da página, tente recarregar a página novamente! </h5>;
  }


  return (
    <article className="container text-container">
      <header>
        <span className="h6 color-gray fw-normal uppercase">{postData?.category}</span>
        <h1 className="fw-normal h3">{postData?.title}</h1>
        {authorData &&
          <div className="mt-8">
            <h2 className="color-white h6">Escrito por {authorData?.name} {authorData?.surname}</h2>
            <time className="h6 color-gray">{formatDateToPost(postData?.date ?? new Date())} - leitura de {postData?.duration}</time>
          </div>
        }
      </header>

      <figure className="w-100 post-image my-24">
        <img
          src={postData?.imageUrl}
          alt={`Imagem da notícia "${postData?.title}"`}
          loading='lazy'
        />
      </figure>

      <div className='post-content'>
        <ReactMarkdown>{postData?.content}</ReactMarkdown>
      </div>

      <footer className="row mt-40">
        <div className="col-1 remove-in-sm"></div>
        {authorData && <div className="col-10 border-black px-16 py-32">
          <div className="flex-start">
            <div>
              <div className="profile-big">
                <img src={authorData?.imageProfile} className="profile-img" alt={`Foto de ${authorData.name}`} />
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
      </footer>
    </article>
  )
}

export default Post;