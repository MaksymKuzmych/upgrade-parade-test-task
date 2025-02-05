import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';

import { Search as SearchIcon } from '../../assets/svg';

export const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!query) {
      navigate('/');
      return;
    }
    navigate(`?query=${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className='mb-8 flex items-center rounded border border-gray-400'>
      <input
        type='text'
        placeholder='Search'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='h-10 flex-1 px-6 focus:outline-none'
      />
      <button type='submit' className='cursor-pointer rounded-r bg-yellow-400 px-4 py-3'>
        <img src={SearchIcon} alt='Search' />
      </button>
    </form>
  );
};
