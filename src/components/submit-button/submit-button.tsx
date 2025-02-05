export const SubmitButton = () => {
  return (
    <button
      onClick={() => alert('Submit')}
      className='cursor-pointer rounded bg-yellow-400 px-6 py-3 font-semibold uppercase'
    >
      Submit
    </button>
  );
};
