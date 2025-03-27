// Svg
import ChevronLeft from 'svg/chevron-left.svg';
import ChevronRight from 'svg/chevron-right.svg';
// Components | Hooks
import Card from 'pages/Home/Card';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import api from 'services/api';
// Types
import IPostPaginated from 'types/postPaginated.type';

const Search = () => {
  const navigate = useNavigate();
  const { wordSearch } = useParams();
  const initialValueForm = { search: '' };

  const [form, setForm] = useState(initialValueForm);
  const [word, setWord] = useState(wordSearch);
  const [actualPage, setActualPage] = useState(1);
  const [paginationData, setPaginationData] = useState<IPostPaginated>()

  useEffect(() => {
    if (!word) return;

    api.get(`/posts?_page=${actualPage}&_per_page=9&q=${word}`)
      .then((res) => { setPaginationData(res.data); })
      .catch((err) => {
        console.error(err);
        navigate('/erro-servidor');
      });
  }, [word, actualPage]);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setWord(form.search);
  }

  function changePage(action: 'inc' | 'dec') {
    if (paginationData && (action == 'inc' && actualPage < paginationData?.pages)) {
      setActualPage(actualPage + 1);
    } else if (paginationData && (action == 'dec' && actualPage > 1)) {
      setActualPage(actualPage - 1);
    }
  }

  return (
    <>
      <section className="container flex-grow-1 flex-column position-relative">
        <h6 className='color-gray text-center'> {paginationData?.items} resultados</h6>
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
          {paginationData?.data.map((item) => (<Card key={item.id} content={item} />))}
        </div>

        <div className='flex-between mt-24 px-48'>
          <button
            className='btn-change-page btn-prev'
            disabled={actualPage == 1}
            onClick={() => changePage('dec')}
          >
            <img src={ChevronLeft} alt="Seta apontando para direita" />
            Anterior
          </button>
          <div className='flex-center'>
            <h5 className='bold'>
              {paginationData?.next ? paginationData.next - 1 : paginationData?.pages} de {paginationData?.pages}
            </h5>
          </div>
          <button
            className='btn-change-page btn-next'
            disabled={actualPage == paginationData?.pages}
            onClick={() => changePage('inc')}
          >
            Próximo
            <img src={ChevronRight} alt="Seta apontando para direita" />
          </button>
        </div>
      </section>
    </>
  )
}

export default Search;