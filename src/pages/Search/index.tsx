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
import { AxiosHeaders } from 'axios';

const Search = () => {
  const LIMIT = 6;
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Estado para controlar busca e paginação
  const [form, setForm] = useState({ search: searchParams.get('search') || '' });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0,
    totalItems: 0,
    data: [] as IPost[],
  });

  // Busca dados na API sempre que `search` ou `currentPage` mudar
  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (!searchQuery) return;

    api.get(`/posts?_page=${pagination.currentPage}&_limit=${LIMIT}&q=${searchQuery}`)
      .then((res) => {
        const headers = res.headers;
        const totalItems = headers instanceof AxiosHeaders ? Number(headers.get('X-Total-Count')) : 0;
        setPagination((prev) => ({
          ...prev,
          totalItems,
          totalPages: Math.ceil(totalItems / LIMIT),
          data: res.data,
        }));
      })
      .catch(() => {
        navigate('/erro-servidor');
      });
  }, [searchParams, pagination.currentPage]);

  // Atualiza campo de busca
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({ search: e.target.value });
  }

  // Realiza nova busca ao submeter o formulário
  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchParams({ search: form.search });
  }

  // Troca de página
  function changePage(direction: 'next' | 'prev') {
    setPagination((prev) => ({
      ...prev,
      currentPage: direction === 'next' ? prev.currentPage + 1 : prev.currentPage - 1,
    }));
  }

  return (
    <section className="container flex-grow-1 flex-column position-relative w-100">
      <h6 className='color-gray text-center'>{pagination.totalItems} resultados</h6>
      <h3 className="fw-normal text-center">"{searchParams.get('search')}"</h3>

      {/* Formulário de busca */}
      <form onSubmit={handleSearch}>
        <div className='row'>
          <div className='col-2 remove-in-small'></div>
          <div className='col-8 flex-center'>
            <input
              type="text"
              name="search"
              placeholder="Buscar..."
              value={form.search}
              onChange={onChange}
            />
            <button className='btn ml-16'>Buscar</button>
          </div>
          <div className='col-2 remove-in-small'></div>
        </div>
      </form>

      {/* Lista de resultados */}
      <div className="row">
        {pagination.data.length === 0 ? (
          <h5 className='text-center color-gray'>Nenhum registro encontrado</h5>
        ) : (
          pagination.data.map((item) => <Card key={item.id} content={item} />)
        )}
      </div>

      {/* Controles de Paginação */}
      <div className='flex-between mt-40 mx-auto text-container'>
        <button
          className='btn-change-page btn-prev'
          disabled={pagination.currentPage === 1}
          onClick={() => changePage('prev')}
        >
          <img src={ChevronLeft} alt="Seta apontando para esquerda" />
          Anterior
        </button>

        <h5 className='fw-normal flex-center'>{pagination.currentPage} de {pagination.totalPages}</h5>

        <button
          className='btn-change-page btn-next'
          disabled={pagination.currentPage >= pagination.totalPages}
          onClick={() => changePage('next')}
        >
          Próximo
          <img src={ChevronRight} alt="Seta apontando para direita" />
        </button>
      </div>
    </section>
  );
};

export default Search;