import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'TrendwaveApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://trendwave-backend.onrender.com',
    // prepareHeaders: (headers, { getState }) => {
      
    //   const token = (getState() as { user: { token: string } }).user.token;
    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`); 
    //   }
    //   return headers;
    // }
    
  }),
  endpoints: () => ({}),
});