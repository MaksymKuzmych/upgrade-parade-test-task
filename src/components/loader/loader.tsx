export const Loader = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='h-10 w-10 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-gray-400' />
      <p className='mt-2 text-lg text-gray-700'>Loading...</p>
    </div>
  );
};
