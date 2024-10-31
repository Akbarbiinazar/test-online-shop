/* eslint-disable @typescript-eslint/no-unused-vars */
import { productsSlice } from '@/entities/products/slices/products';
import { baseApi } from '@/shared/config/api/baseApi';
import { State } from '@/shared/config/store/State';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

export const createReduxStore = (initialState?: State) => {
  return configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      products: productsSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(baseApi.middleware),
    preloadedState: initialState,
  });
};

const store = createReduxStore();
export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const wrapper = createWrapper<AppStore>(createReduxStore, { debug: true });
