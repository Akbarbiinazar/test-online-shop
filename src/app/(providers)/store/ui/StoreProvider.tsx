'use client';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/config';
import { State } from '@/shared/config/store/State';

type StoreProviderProps = {
  initialState?: DeepPartial<State>;
};

export const StoreProvider = ({
  children,
  initialState,
}: PropsWithChildren<StoreProviderProps>) => {
  const store = createReduxStore(initialState as State);

  return <Provider store={store}>{children}</Provider>;
};
