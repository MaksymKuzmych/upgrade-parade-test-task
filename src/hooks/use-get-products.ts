import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { getProducts } from '../services';

interface IQueryParams {
  query: string;
  limit: number;
  page: number;
}

export const useGetProducts = ({ query, limit, page }: IQueryParams) => {
  return useQuery({
    queryKey: ['products', { query, limit, page, prop_ModuleId: 2053 }],
    queryFn: getProducts,
    placeholderData: keepPreviousData,
    staleTime: 5 * 60 * 1000,
  });
};
