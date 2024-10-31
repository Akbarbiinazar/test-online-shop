import { RootState } from '@/app/(providers)/store/config/config';
import { Action, PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API,
  credentials: 'include',
});

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,

  tagTypes: ['products'],
  endpoints: () => ({}),
});
