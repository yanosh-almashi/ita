import React from 'react';
import { render } from '@testing-library/react';
import MenuContainer from './MenuContainer';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import {Provider} from "react-redux";
import configureStore, {MockStore} from "redux-mock-store";

const mockStore = configureStore([]);

describe('Test menu container', () => {
  let store: MockStore;

  beforeEach(() => {
    store = mockStore({
      authReducer: {
        uid: 'token'
      }
    });
    store.dispatch = jest.fn();
  });

  it('render without crashing', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <MenuContainer />
        </Provider>
      </BrowserRouter>
    );
    expect(
      container.querySelector('[data-testid="menu-container"]')
    ).not.toBeNull();
  });
});
