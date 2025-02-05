import { ChangeEvent } from 'react';

interface IChangePageInputProps {
  value: number;
  max: number;
  setPageIndex: (page: number) => void;
}

export const ChangePageInput = ({ value, max, setPageIndex }: IChangePageInputProps) => {
  const handlePageChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = +e.target.value;

    if (inputValue < 1) {
      inputValue = 1;
    }
    if (inputValue > max) {
      inputValue = max;
    }

    setPageIndex(inputValue - 1);
  };

  return (
    <input
      type='number'
      min={1}
      max={max}
      value={value}
      onChange={handlePageChange}
      className='w-20 rounded border border-gray-400 p-2 text-center text-sm'
    />
  );
};
