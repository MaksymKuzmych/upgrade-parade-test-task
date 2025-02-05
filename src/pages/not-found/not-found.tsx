import { useNavigate } from 'react-router';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-4'>
      <h1 className='mb-4 text-9xl font-extrabold text-gray-200'>404</h1>
      <h2 className='mb-2 text-4xl font-semibold'>Oops! Page Not Found</h2>
      <p className='text-lg text-gray-600'>
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <button
        onClick={() => navigate('/')}
        className='mt-8 cursor-pointer rounded bg-yellow-400 px-6 py-3 font-semibold uppercase'
      >
        Go Home
      </button>
    </div>
  );
};
