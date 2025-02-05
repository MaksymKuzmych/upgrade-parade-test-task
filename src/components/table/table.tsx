import { useSearchParams } from 'react-router';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

import { useGetProducts } from '../../hooks';
import { Loader } from '../loader';
import { ErrorMessage } from '../error-message';
import { Pagination } from './pagination';
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE, columns } from './table.constants';

export const Table = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';
  const pageIndex = Number(searchParams.get('pageIndex')) || DEFAULT_PAGE_INDEX;
  const pageSize = Number(searchParams.get('pageSize')) || DEFAULT_PAGE_SIZE;

  const { data, isLoading, isFetching, isError, error } = useGetProducts({
    query,
    limit: pageSize,
    page: pageIndex + 1,
  });

  const table = useReactTable({
    data: data?.Items ?? [],
    columns,
    rowCount: data?.Pagination.TotalItemsCount,
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    onPaginationChange: (updaterOrValue) => {
      const newState =
        typeof updaterOrValue === 'function'
          ? updaterOrValue(table.getState().pagination)
          : updaterOrValue;
      setSearchParams({
        pageIndex: newState.pageIndex.toString(),
        pageSize: newState.pageSize.toString(),
      });
    },
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  });

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage message={error.message} />;

  return (
    <div className='m-8 border border-gray-400'>
      <table className='w-full'>
        <thead className='bg-gray-700 text-sm font-medium text-white'>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className='divide-x divide-gray-400'>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan} className='px-8 py-4 text-start'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className='divide-y divide-gray-400'>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className='divide-x divide-gray-400'>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className='px-8 py-2 text-start'>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        table={table}
        isFetching={isFetching}
        totalItems={data?.Pagination.TotalItemsCount}
      />
    </div>
  );
};
