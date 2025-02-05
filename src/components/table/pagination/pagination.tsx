import { Table } from '@tanstack/react-table';

import { IProductItem } from '../../../types';
import { ArrowLeft, ArrowRight } from '../../../assets/svg';
import { IconButton } from '../../ui';
import { PageSizeSelect } from './page-size-select';
import { ChangePageInput } from './change-page-input';
import { getStartAndEndRow } from './pagination.utils';

interface IPaginationProps {
  table: Table<IProductItem>;
  isFetching: boolean;
  totalItems?: number;
}

export const Pagination = ({ table, isFetching, totalItems = 0 }: IPaginationProps) => {
  const { pageIndex, pageSize } = table.getState().pagination;
  const { startRow, endRow } = getStartAndEndRow(pageIndex, pageSize, totalItems);

  return (
    <div className='flex items-center justify-end gap-3 border-t border-gray-400 px-8 py-2'>
      <PageSizeSelect
        pageSize={table.getState().pagination.pageSize}
        setPageSize={table.setPageSize}
      />
      <p className='mr-2 w-56 text-end text-sm'>
        Showing {startRow} - {endRow} of {totalItems} Rows
      </p>
      <IconButton
        icon={ArrowLeft}
        alt='Previous page'
        onClick={table.previousPage}
        disabled={!table.getCanPreviousPage() || isFetching}
      />
      <ChangePageInput
        value={pageIndex + 1}
        max={table.getPageCount()}
        setPageIndex={table.setPageIndex}
      />
      <IconButton
        icon={ArrowRight}
        alt='Next page'
        onClick={table.nextPage}
        disabled={!table.getCanNextPage() || isFetching}
      />
    </div>
  );
};
