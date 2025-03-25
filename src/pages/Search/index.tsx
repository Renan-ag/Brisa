// Components
import Card from 'pages/Home/Card';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
// Hooks
import { useParams } from 'react-router';
import api from 'services/api';
import IPost from 'types/post.type';


const Search = () => {
  const { wordSearch } = useParams();
  const initialValueForm = { search: '' };

  const [form, setForm] = useState(initialValueForm);
  const [word, setWord] = useState(wordSearch);
  const [posts, setPosts] = useState<Array<IPost>>([]);

  useEffect(() => {    
    if (!word) return;

    api.get(`/posts?q=${word}`)
      .then((res) => {        
        setPosts(res.data);
      })
      .catch((err) => console.log(err));

  }, [word]);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setWord(form.search);
  }

  return (
    <>
      <section className="container flex-grow-1 flex-column position-relative">
        <h6 className='color-gray text-center'> {posts.length} resultados</h6>
        <h3 className="fw-normal text-center">"{word}"</h3>
        <form onSubmit={handleSearch}>
          <div className='row'>
            <div className='col-2 remove-in-small'></div>
            <div className='col-8 flex-center'>
              <input type="text" name='search' placeholder='Buscar...' onChange={onChange} />
              <button className='btn ml-16'> Buscar </button>
            </div>
            <div className='col-2 remove-in-small'></div>
          </div>
        </form>
        <div className="row mt-24">
          {posts.map((item) => (<Card key={item.id} content={item} />))}
        </div>
      </section>
    </>
  )
}

export default Search;