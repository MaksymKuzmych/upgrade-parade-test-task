import { ColumnDef } from '@tanstack/react-table';

import { Edit, Delete } from '../../assets/svg';
import { IProductItem } from '../../types';
import { IconButton } from '../ui';
import { ProductImage } from './product-image';

export const DEFAULT_PAGE_INDEX = 0;
export const DEFAULT_PAGE_SIZE = 10;

export const columns: ColumnDef<IProductItem>[] = [
  {
    header: 'Image',
    accessorKey: 'Image',
    cell: ({ row, getValue }) => <ProductImage src={getValue<string>()} alt={row.original.Name} />,
  },
  {
    header: 'Name',
    accessorKey: 'Name',
  },
  {
    header: 'Category',
    accessorKey: 'Category',
    cell: ({ getValue }) => getValue<string>() || 'N/A',
  },
  {
    header: 'Price',
    accessorKey: 'ProductPrice',
    cell: ({ getValue }) => `$${getValue<number>().toFixed(2)}`,
  },
  {
    header: 'Country',
    accessorKey: 'Country',
    cell: ({ getValue }) => JSON.parse(getValue<string>()).join(', ') || 'N/A',
  },
  {
    header: 'Marketplace status',
    accessorKey: 'Status',
  },
  {
    header: 'Action',
    id: 'action',
    cell: () => (
      <div className='flex gap-2'>
        <IconButton icon={Edit} alt='Edit' onClick={() => alert('Edit')} />
        <IconButton icon={Delete} alt='Delete' onClick={() => alert('Delete')} />
      </div>
    ),
  },
];
