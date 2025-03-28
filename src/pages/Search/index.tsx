// Svg
import ChevronLeft from 'svg/chevron-left.svg';
import ChevronRight from 'svg/chevron-right.svg';

// Components | Hooks
import Card from 'pages/Home/Card';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import api from 'services/api';
// Types
import IPost from 'types/post.type';
import useDebounce from 'utils/useDebounce';

const Search = () => {
  const LIMIT = 6;
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);

  const [form, setForm] = useState({ search: searchParams.get('search') || '' });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0,
    totalItems: 0,
    data: [] as IPost[],
  });

  const debouncedSearchTerm = useDebounce(form.search, 500);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!debouncedSearchTerm) {
        setPagination(prev => ({ ...prev, data: [], totalItems: 0 }));
        return;
      }

      setError(false);

      try {
        const response = await api.get(`/posts`, {
          params: {
            _page: pagination.currentPage,
            _limit: LIMIT,
            q: debouncedSearchTerm,
          }
        });

        const totalItems = Number(response.headers['x-total-count']) || 0;

        setPagination({
          currentPage: pagination.currentPage,
          totalPages: Math.ceil(totalItems / LIMIT),
          totalItems,
          data: response.data,
        });

        setSearchParams({
          search: debouncedSearchTerm,
          page: String(pagination.currentPage)
        });

      } catch (err) {
        console.error('Search failed:', err);
        setError(true);
      }
    };

    fetchPosts();
  }, [debouncedSearchTerm, pagination.currentPage]);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({ search: e.target.value });
    setPagination(prev => ({ ...prev, currentPage: 1 }));
  }

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchParams({ search: form.search });
  }

  function changePage(direction: 'next' | 'prev') {
    setPagination((prev) => ({
      ...prev,
      currentPage: direction === 'next' ? pagination.currentPage + 1 : pagination.currentPage - 1,
    }));
  }

  if (error) {
    navigate('/erro-servidor');
  }

  return (
    <section className="container flex-grow-1 flex-column position-relative w-100">
      <header>
        <p className='color-gray text-center h6'>{pagination.totalItems} {pagination.totalItems === 1 ? 'resultado' : 'resultados'}</p>
        <h2 className="fw-normal text-center h3">"{searchParams.get('search')}"</h2>
      </header>

      <form onSubmit={handleSearch}>
        <div className='row'>
          <div className='col-2 remove-in-small'></div>
          <div className='col-8 flex-center'>
            <input
              type="text"
              name="search"
              placeholder="Buscar..."
              aria-label='Buscar posts'
              value={form.search}
              onChange={onChange}
            />
            <button type='submit' className='btn ml-16'>Buscar</button>
          </div>
          <div className='col-2 remove-in-small'></div>
        </div>
      </form>

      <div className="row">
        {pagination.data.length === 0 ? (
          <h5 className='text-center color-gray'>Nenhum registro encontrado!</h5>
        ) : (
          pagination.data.map((item) => <Card key={item.id} content={item} />)
        )}
      </div>

      <div className='flex-between mt-40 mx-auto text-container'>
        <button
          className='btn-change-page btn-prev'
          disabled={pagination.currentPage === 1}
          onClick={() => changePage('prev')}
          aria-label='Página anterior'
        >
          <img src={ChevronLeft} aria-hidden="true" alt="" />
          Anterior
        </button>

        <h5 className='fw-normal flex-center'>{pagination.currentPage} de {pagination.totalPages}</h5>

        <button
          className='btn-change-page btn-next'
          disabled={pagination.currentPage >= pagination.totalPages}
          onClick={() => changePage('next')}
          aria-label='Próxima página'
        >
          Próximo
          <img src={ChevronRight} aria-hidden="true"  alt="" />
        </button>
      </div>
    </section>
  );
};

export default Search;