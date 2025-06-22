import axios from 'axios';
import { ApiResponse } from '../types';

const API_KEY = '76YFQ0LUyPvjVwj6tmIY34NXYLiz7iDoOn_Z9oT6DRQ';
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchData = async (
  query: string,
  page: number
): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });

  return response.data;
};
