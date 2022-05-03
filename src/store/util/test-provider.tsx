import { ReactNode } from 'react';
import { createStore, Reducer } from 'redux';
import { Provider } from 'react-redux';

// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';

import { ITestProviderResult } from '../models/test-provider-result';

export const getTestProvider = (
  ui: ReactNode,
  rootReducer: Reducer,
  initialState?: never
): ITestProviderResult<never> => {
  const store = createStore(rootReducer as never, initialState);

  const originalDispatch = store.dispatch;
  store.dispatch = jest.fn(originalDispatch);

  const renderResult = render(<Provider store={store}>{ui}</Provider>);

  return {
    store: store as never,
    renderResult
  };
};
