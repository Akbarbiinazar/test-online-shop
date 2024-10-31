import { baseApi } from '../api/baseApi';

export type State = {
  [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
};
