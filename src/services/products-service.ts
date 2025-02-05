import axios from 'axios';

import { IProductItem } from '../types';

interface IQueryParams {
  query: string;
  limit: number;
  page: number;
  prop_ModuleId: number;
}

interface IApiResponse {
  Items: IProductItem[];
  Pagination: {
    TotalItemsCount: number;
  };
}

export const getProducts = async ({ queryKey }: { queryKey: [string, IQueryParams] }) => {
  try {
    const [_key, params] = queryKey;

    const { data } = await axios.get<IApiResponse>('/api/items', {
      params,
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Unknown error occurred');
  }
};
