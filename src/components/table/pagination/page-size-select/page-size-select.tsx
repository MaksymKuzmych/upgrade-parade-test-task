import { pageSizes } from './page-size-select.constants';

interface IPageSizeSelectProps {
  pageSize: number;
  setPageSize: (pageSize: number) => void;
}

export const PageSizeSelect = ({ pageSize, setPageSize }: IPageSizeSelectProps) => {
  return (
    <div className='flex items-center gap-5'>
      <label htmlFor='pageSizeSelect' className='text-sm'>
        Items per page:
      </label>
      <div className='rounded border border-gray-400 px-3'>
        <select
          id='pageSizeSelect'
          value={pageSize}
          onChange={(e) => setPageSize(+e.target.value)}
          className='w-14 py-2 text-sm focus:outline-0'
        >
          {pageSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
