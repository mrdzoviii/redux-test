/* eslint-disable import/no-extraneous-dependencies */
import { RenderResult } from '@testing-library/react';
import { Store } from 'redux';

export interface ITestProviderResult<S> {
  store: Store<S>;
  renderResult: RenderResult;
}
